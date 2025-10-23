'use client';

import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import PhoneMockup from "@/components/PhoneMockup";
import Image from "next/image";
import { useState } from "react";
import { faq } from '@/public/faq/index.js'
import { type FAQItem } from "@/components/FAQ";
import { AsYouType, parsePhoneNumberFromString } from 'libphonenumber-js/min';

const submitToWaitlist = async (phone: string) => {
    try {
        const response = await fetch('/api/waitlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phone }),
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Failed to submit to waitlist:', error);
        throw error;
    }
};

export default function WaitlistPage() {
    const [inputValue, setInputValue] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [isOpen, setIsOpen] = useState<number | null>(null);

    const defaultCountry = 'CA' as const;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError('');
        const raw = e.target.value;

        const formatter = new AsYouType(defaultCountry);
        const formatted = formatter.input(raw);
        setInputValue(formatted);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const parsed = parsePhoneNumberFromString(inputValue, defaultCountry);

        if (!parsed || !parsed.isValid()) {
            setError('Please enter a valid phone number.');
            return;
        }

        // Submit to API
        submitToWaitlist(parsed.number)
            .then(() => {
                setInputValue('');
                
                // Show success toast
                const toast = document.createElement('div');
                toast.className = 'toast toast-top toast-center';
                toast.innerHTML = `
                    <div class="alert alert-success">
                        <span>Thank you! We'll be in touch soon.</span>
                    </div>
                `;
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 3000);
            })
            .catch((error) => {
                setError('Failed to join waitlist. Please try again.');
                console.error('Waitlist submission error:', error);
            });
    };

    return (
        <main
            className="flex-1 overflow-hidden
      bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)]
      pb-4 px-5 md:p-10"
        >
            <div className="flex flex-col md:flex-row md:flex-wrap items-start justify-center gap-10 md:gap-[120px] m-0 md:m-[60px] lg:m-[80px] xl:m-[108px] py-3 md:py-0">

                <div className="relative grow-0 basis-auto max-w-[750px] w-full mx-auto md:mx-0 sm:mt-0 md:mt-5 lg:mt-20">
                    <Header />

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-50 mt-4 md:mt-6 text-center md:text-left">
                        Be the first to know
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-gray-200 max-w-[650px] text-center md:text-left mx-auto md:mx-0">
                        Don&apos;t miss out — join the waitlist to unlock special launch perks...
                    </p>

                    <form onSubmit={onSubmit} className="mt-10 w-full max-w-[380px] mx-auto md:mx-0 px-6 md:px-0">
                        <div className="flex flex-col md:flex-row gap-4 md:gap-0 w-full">
                            <div className="flex items-center gap-3 w-full rounded-xl md:rounded-l-xl md:rounded-r-none border border-[#999] bg-[#333] px-4 py-3 focus-within:border-brand focus-within:ring-0">
                                <div className="relative w-6 h-6">
                                    <Image
                                        src="https://flagpedia.net/data/flags/w580/ca.webp"
                                        alt="Canada flag"
                                        fill
                                        className="rounded-full shrink-0"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <input
                                    type="tel"
                                    inputMode="tel"
                                    autoComplete="tel"
                                    autoFocus
                                    value={inputValue}
                                    onChange={handleChange}
                                    placeholder="(204) 555-1234"
                                    className="flex-1 min-w-0 bg-transparent text-gray-100 placeholder:text-gray-400 focus:outline-none"
                                    aria-label="Phone number"
                                    aria-invalid={!!error}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full md:w-auto text-base rounded-xl md:rounded-l-none md:rounded-r-xl bg-brand font-semibold text-[#03320D] px-3 py-3 hover:bg-brand/90 transition-colors whitespace-nowrap"
                            >
                                Join Waitlist
                            </button>
                        </div>

                        {error && (
                            <p className="text-sm text-red-400 mt-2">{error}</p>
                        )}
                    </form>
                </div>

                <PhoneMockup />

                <section className="w-full md:basis-full relative mt-20 md:mt-40" aria-label="faq">
                    <div className="w-full md:max-w-[1190px] mx-auto">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-x-0 top-0 -translate-y-10 mx-auto
              w-[min(900px,100%)] h-[360px] rounded-full bg-brand/10 blur-[220px] -z-10"
                        />
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-50 text-center md:text-left">Frequently Asked Questions</h1>

                        <div className="mt-5 space-y-2">
                            {faq.map((f: FAQItem, idx: number) => (
                                <FAQ
                                    key={idx}
                                    question={f.question}
                                    answer={f.answer}
                                    points={f.points}
                                    isOpen={isOpen === idx}
                                    onToggle={() => setIsOpen(isOpen === idx ? null : idx)}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
