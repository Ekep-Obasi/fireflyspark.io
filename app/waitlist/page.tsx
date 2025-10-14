'use client';

import FAQ from "@/components/FAQ";
import FireflySparkLogo from "@/components/FireflySparkLogo";
import Menu from "@/components/Menu";
import Image from "next/image";
import { useState } from "react";
import { faq } from '@/public/faq/index.js'
import { type FAQProps } from "@/components/FAQ";

export default function WaitlistPage() {
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // handle submit...
    };

    return (
        <main
            className="flex-1 overflow-hidden
      bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)]
      p-5 md:p-10"
        >
            <div className="flex flex-col md:flex-row md:flex-wrap items-start justify-center gap-10 md:gap-[120px] md:m-[60px] lg:m-[80px] xl:m-[108px]">

                <div className="relative grow-0 basis-auto max-w-[750px] w-full pt-[120px] mx-auto md:mx-0 sm:mt-0 md:mt-5 lg:mt-20">
                    <div className="absolute top-0 left-0 w-full flex items-center justify-between">
                        <FireflySparkLogo
                            className=""
                            textClass="sm:hidden"
                            iconClass="w-[50px] h-[50px] md:w-[140px] md:h-[140px] "
                        />
                        <div className="sm:hidden"><Menu /></div>
                    </div>

                    <section className="w-full">
                        <h1 className="text-5xl font-bold text-gray-50">Be the first to know</h1>
                        <p className="mt-4 text-lg text-gray-200 max-w-[650px]">
                            Don&apos;t miss out — join the waitlist to unlock special launch perks...
                        </p>

                        <form
                            onSubmit={onSubmit}
                            className="mt-10 flex flex-col gap-5 w-full max-w-[380px]"
                        >
                            <div className="flex items-center gap-3 w-full rounded-xl border border-[#999] bg-[#333] px-4 py-3.5 focus-within:ring-2 focus-within:ring-brand/70">
                                <Image
                                    src="/flagCA.jpg"
                                    alt="Canada flag"
                                    width={20}
                                    height={20}
                                    className="rounded-full shrink-0"
                                />
                                <input
                                    type="tel"
                                    inputMode="tel"
                                    maxLength={15}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="Enter your phone number"
                                    className="flex-1 min-w-0 bg-transparent text-gray-100 placeholder:text-gray-400 focus:outline-none h-[24px]"
                                    aria-label="Phone number"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-brand font-semibold text-[#03320D] text-[18px] px-5 py-3.5 hover:bg-brand/90 transition-colors"
                            >
                                Join Waitlist
                            </button>
                        </form>
                    </section>
                </div>

                <div className="hidden md:block shrink-0 w-[320px]" aria-hidden />

                <section className="w-full md:basis-full relative mt-20 md:mt-40">
                    <div className="w-full md:max-w-[1190px] mx-auto">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-x-0 top-0 -translate-y-10 mx-auto
              w-[min(900px,100%)] h-[360px] rounded-full bg-brand/10 blur-[220px] -z-10"
                        />
                        <h2 className="text-5xl font-bold text-gray-50">Frequently Asked Questions</h2>

                        <div className="mt-5 space-y-2">
                            {faq.map((f: FAQProps, idx: number) => (
                                <FAQ
                                    key={idx}
                                    question={f.question}
                                    answer={f.answer}
                                    points={f.points}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
