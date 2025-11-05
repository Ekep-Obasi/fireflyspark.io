"use client";

import Header from "@/components/Header";
import Toast from "@/components/Toast";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { AsYouType, parsePhoneNumberFromString } from "libphonenumber-js/min";

const submitVolunteerApplication = async (data: {
  name: string;
  email: string;
  phone: string;
  cities: string[];
  invite?: string;
}) => {
  try {
    const response = await fetch("/api/volunteers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to submit volunteer application:", error);
    throw error;
  }
};

const CITIES = {
  mississauga: {
    label: "Mississauga, ON",
    path: "canada--mississauga",
  },
  brampton: {
    label: "Brampton, ON",
    path: "canada--brampton",
  },
  richmond_hill: {
    label: "Richmond Hill, ON",
    path: "canada--york",
  },
  vaughan: {
    label: "Vaughan, ON",
    path: "canada--york",
  },
  city_of_toronto: {
    label: "Toronto, ON",
    path: "canada--toronto",
  },
  ajax: {
    label: "Ajax, ON",
    path: "canada--durham",
  },
  pickering: {
    label: "Pickering, ON",
    path: "canada--durham",
  },
  markham: {
    label: "Markham, ON",
    path: "canada--york",
  },
};

const CITY_KEYS = Object.keys(CITIES) as Array<keyof typeof CITIES>;

export default function VolunteerPage() {
  const searchParams = useSearchParams();
  const inviteParam = searchParams.get("invite");

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [selectedCities, setSelectedCities] = useState<
    Array<keyof typeof CITIES | "other">
  >([]);
  const [customCity, setCustomCity] = useState<string>("");
  const [inviteCode, setInviteCode] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    cities?: string;
    invite?: string;
  }>({});
  const [toast, setToast] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const defaultCountry = "CA" as const;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors((prev) => ({ ...prev, phone: undefined }));
    const raw = e.target.value;
    const formatter = new AsYouType(defaultCountry);
    const formatted = formatter.input(raw);
    setPhone(formatted);
  };

  const handleCityToggle = (cityKey: keyof typeof CITIES | "other") => {
    setErrors((prev) => ({ ...prev, cities: undefined }));
    if (cityKey === "other") {
      // If "Other" is selected, clear other cities and keep only "Other"
      setSelectedCities(["other"]);
      setCustomCity("");
      setIsDropdownOpen(false);
    } else {
      // Remove "Other" if selecting a specific city
      setSelectedCities((prev) => {
        const filtered = prev.filter((c) => c !== "other");
        if (filtered.includes(cityKey)) {
          return filtered.filter((c) => c !== cityKey);
        }
        return [...filtered, cityKey];
      });
    }
  };

  const removeCity = (cityKey: keyof typeof CITIES | "other") => {
    setSelectedCities((prev) => prev.filter((c) => c !== cityKey));
    if (cityKey === "other") {
      setCustomCity("");
    }
  };

  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    const parsed = parsePhoneNumberFromString(phone, defaultCountry);
    if (!phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!parsed || !parsed.isValid()) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    const citiesToSubmit =
      selectedCities.includes("other") && customCity.trim()
        ? [customCity.trim()]
        : selectedCities.filter((c) => c !== "other");

    if (citiesToSubmit.length === 0) {
      newErrors.cities = "Please select at least one city.";
    }

    // Check for invitation code if no invite param
    if (!inviteParam) {
      if (!inviteCode.trim()) {
        newErrors.invite = "Please enter an invitation code.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const parsed = parsePhoneNumberFromString(phone, defaultCountry);
    const citiesToSubmit =
      selectedCities.includes("other") && customCity.trim()
        ? [customCity.trim()]
        : selectedCities
            .filter((c) => c !== "other")
            .map((cityKey) => CITIES[cityKey as keyof typeof CITIES].path);

    try {
      await submitVolunteerApplication({
        name: name.trim(),
        email: email.trim(),
        phone: parsed!.number,
        cities: citiesToSubmit,
        invite: inviteParam || inviteCode.trim() || undefined,
      });

      // Reset form
      setName("");
      setEmail("");
      setPhone("");
      setSelectedCities([]);
      setCustomCity("");
      setInviteCode("");
      setToast(
        "Thank you for your interest! We&apos;ll be in touch soon via email.",
      );
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Failed to submit application. Please try again.";
      setToast(errorMessage);

      // Handle specific invite errors
      if (
        errorMessage.includes("invitation") ||
        errorMessage.includes("invalid")
      ) {
        setErrors({ cities: errorMessage });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-1 overflow-hidden relative px-6 py-8 md:px-10 md:py-10">
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-brand/10 blur-[200px] animate-move-gradient" />
      </div>
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}

      <section
        aria-label="volunteer"
        className="min-h-[calc(100vh-280px)] flex items-center justify-center"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col items-center justify-center">
            {/* Content Section */}
            <div className="w-full max-w-[800px]">
              <FadeIn delay={0}>
                <Header />
              </FadeIn>

              <FadeIn delay={0}>
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-50 mt-12 md:mt-8 text-left leading-tight">
                  Be a Founding Volunteer
                </h1>
              </FadeIn>

              <FadeIn delay={150}>
                <p className="mt-6 text-base sm:text-base md:text-lg lg:text-xl text-gray-200 text-left leading-relaxed">
                  We&apos;re building a platform for spontaneous connections
                  that matter. Volunteer with us and help create a new way for
                  people to come together.
                </p>
              </FadeIn>

              <FadeIn delay={300}>
                <form
                  onSubmit={onSubmit}
                  className="mt-8 sm:mt-10 md:mt-12 w-full"
                >
                  <div className="flex flex-col gap-4 w-full">
                    {/* Name Input */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-[#999] bg-[#333] px-4 py-2.5 sm:py-3 text-base text-gray-100 placeholder:text-gray-400 focus:outline-none focus:border-brand"
                        aria-label="Full name"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-400 mt-1.5">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Input */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        placeholder="your.email@example.com"
                        className="w-full rounded-xl border border-[#999] bg-[#333] px-4 py-2.5 sm:py-3 text-base text-gray-100 placeholder:text-gray-400 focus:outline-none focus:border-brand"
                        aria-label="Email address"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-400 mt-1.5">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone Input */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Phone Number
                      </label>
                      <div className="flex items-center gap-3 w-full rounded-xl border border-[#999] bg-[#333] px-4 py-2.5 sm:py-3 focus-within:border-brand focus-within:ring-0">
                        <div className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0">
                          <Image
                            src="https://flagpedia.net/data/flags/w580/ca.webp"
                            alt="Canada flag"
                            fill
                            className="rounded-full"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          value={phone}
                          onChange={handlePhoneChange}
                          placeholder="(204) 555-1234"
                          className="flex-1 min-w-0 bg-transparent text-base text-gray-100 placeholder:text-gray-400 focus:outline-none"
                          aria-label="Phone number"
                          aria-invalid={!!errors.phone}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-sm text-red-400 mt-1.5">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Invitation Code - Only show if no invite param */}
                    {!inviteParam && (
                      <div>
                        <label
                          htmlFor="invite"
                          className="block text-sm font-medium text-gray-300 mb-2"
                        >
                          Invitation Code
                        </label>
                        <input
                          id="invite"
                          type="text"
                          value={inviteCode}
                          onChange={(e) => {
                            setInviteCode(e.target.value);
                            setErrors((prev) => ({
                              ...prev,
                              invite: undefined,
                            }));
                          }}
                          placeholder="Your invitation code"
                          className="w-full rounded-xl border border-[#999] bg-[#333] px-4 py-2.5 sm:py-3 text-base text-gray-100 placeholder:text-gray-400 focus:outline-none focus:border-brand"
                          aria-label="Invitation code"
                          aria-invalid={!!errors.invite}
                        />
                        {errors.invite && (
                          <p className="text-sm text-red-400 mt-1.5">
                            {errors.invite}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Cities Selection - Multi-select Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Cities You&apos;re Willing to Volunteer In
                      </label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="w-full rounded-xl border border-[#999] bg-[#333] px-4 py-2.5 sm:py-3 text-left text-base text-gray-100 focus:outline-none focus:border-brand flex items-center justify-between"
                          aria-label="Select cities"
                          aria-expanded={isDropdownOpen}
                        >
                          <div className="flex flex-wrap gap-2 flex-1 min-w-0">
                            {selectedCities.length === 0 ? (
                              <span className="text-gray-400">
                                Choose your cities
                              </span>
                            ) : (
                              selectedCities.map((cityKey) => {
                                if (cityKey === "other") {
                                  return (
                                    <span
                                      key="other"
                                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-brand/20 text-brand text-sm font-medium"
                                    >
                                      {customCity || "Other"}
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          removeCity("other");
                                        }}
                                        className="hover:text-brand/70"
                                        aria-label="Remove other"
                                      >
                                        ×
                                      </button>
                                    </span>
                                  );
                                }
                                return (
                                  <span
                                    key={cityKey}
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-brand/20 text-brand text-sm font-medium"
                                  >
                                    {CITIES[cityKey].label}
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        removeCity(cityKey);
                                      }}
                                      className="hover:text-brand/70"
                                      aria-label={`Remove ${CITIES[cityKey].label}`}
                                    >
                                      ×
                                    </button>
                                  </span>
                                );
                              })
                            )}
                          </div>
                          <svg
                            className={`w-5 h-5 transition-transform ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {isDropdownOpen && (
                          <div className="absolute z-10 w-full mt-2 rounded-xl border border-[#999] bg-[#333] shadow-lg max-h-60 overflow-y-auto">
                            <div className="p-2">
                              {CITY_KEYS.map((cityKey) => (
                                <button
                                  key={cityKey}
                                  type="button"
                                  onClick={() => handleCityToggle(cityKey)}
                                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                    selectedCities.includes(cityKey)
                                      ? "bg-brand/20 text-brand"
                                      : "text-gray-200 hover:bg-[#404040]"
                                  }`}
                                >
                                  {CITIES[cityKey].label}
                                </button>
                              ))}
                              <button
                                type="button"
                                onClick={() => handleCityToggle("other")}
                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                  selectedCities.includes("other")
                                    ? "bg-brand/20 text-brand"
                                    : "text-gray-200 hover:bg-[#404040]"
                                }`}
                              >
                                Other
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                      {selectedCities.includes("other") && (
                        <input
                          type="text"
                          value={customCity}
                          onChange={(e) => {
                            setCustomCity(e.target.value);
                            setErrors((prev) => ({
                              ...prev,
                              cities: undefined,
                            }));
                          }}
                          placeholder="Which city?"
                          className="w-full mt-3 rounded-xl border border-[#999] bg-[#333] px-4 py-2.5 sm:py-3 text-base text-gray-100 placeholder:text-gray-400 focus:outline-none focus:border-brand"
                        />
                      )}
                      {errors.cities && (
                        <p className="text-sm text-red-400 mt-1.5">
                          {errors.cities}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-base rounded-xl bg-brand font-semibold text-[#03320D] px-4 sm:px-5 py-2.5 sm:py-3 hover:bg-brand/90 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                    >
                      {isSubmitting
                        ? "Submitting..."
                        : "Join as Founding Volunteer"}
                    </button>
                  </div>
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
