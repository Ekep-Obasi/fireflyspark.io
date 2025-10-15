'use client';

import FAQ from "@/components/FAQ";
import Header from "@/components/Header";
import Image from "next/image";
import { useState } from "react";
import { faq } from '@/public/faq/index.js'
import { type FAQProps } from "@/components/FAQ";
import { AsYouType, parsePhoneNumberFromString } from 'libphonenumber-js/min';

export default function WaitlistPage() {
    const [inputValue, setInputValue] = useState<string>('');
    const [error, setError] = useState<string>('');

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

        // const e164 = parsed.number;
        // Submit to your API…
        setInputValue('');
    };

    return (
        <main
            className="flex-1 overflow-hidden
      bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)]
      p-5 md:p-10"
        >
            <div className="flex flex-col md:flex-row md:flex-wrap items-start justify-center gap-10 md:gap-[120px] md:m-[60px] lg:m-[80px] xl:m-[108px]">

                <div className="relative grow-0 basis-auto max-w-[750px] w-full mx-auto md:mx-0 sm:mt-0 md:mt-5 lg:mt-20">
                    <Header />

                    <section className="w-full" aria-label="waitlist">
                        <h1 className="text-5xl font-bold text-gray-50">
                            Be the first to know
                        </h1>
                        <p className="mt-4 text-lg text-gray-200 max-w-[650px]">
                            Don&apos;t miss out — join the waitlist to unlock special launch perks...
                        </p>

                        <form onSubmit={onSubmit} className="mt-10 flex flex-col gap-5 w-full max-w-[380px]">
                            <div className="flex items-center gap-3 w-full rounded-xl border border-[#999] bg-[#333] px-4 py-3.5 focus-within:ring-2 focus-within:ring-brand/70">
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
                                    value={inputValue}
                                    onChange={handleChange}
                                    placeholder="(204) 555-1234"
                                    className="flex-1 min-w-0 bg-transparent text-gray-100 placeholder:text-gray-400 focus:outline-none h-[24px]"
                                    aria-label="Phone number"
                                    aria-invalid={!!error}
                                />
                            </div>

                            {error && (
                                <p className="text-sm text-red-400">{error}</p>
                            )}

                            <button
                                type="submit"
                                className="w-full text-md rounded-xl bg-brand font-semibold text-[#03320D] text-[18px] px-5 py-3.5 hover:bg-brand/90 transition-colors"
                            >
                                Join Waitlist
                            </button>
                        </form>
                    </section>
                </div>

                <div className="hidden md:block shrink-0 w-[320px]" aria-hidden />

                <section className="w-full md:basis-full relative mt-20 md:mt-40" aria-label="faq">
                    <div className="w-full md:max-w-[1190px] mx-auto">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-x-0 top-0 -translate-y-10 mx-auto
              w-[min(900px,100%)] h-[360px] rounded-full bg-brand/10 blur-[220px] -z-10"
                        />
                        <h1 className="text-4xl font-bold text-gray-50">Frequently Asked Questions</h1>

                        <div className="mt-5 space-y-2">
                            {faq.map((f: FAQProps, idx: number) => (
                                <FAQ key={idx} question={f.question} answer={f.answer} points={f.points} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
