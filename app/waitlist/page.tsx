'use client';

import FAQ from "@/components/icons/FAQ";
import FireflySparkLogo from "@/components/icons/FireflySparkLogo";
import Image from "next/image";
import { useState } from "react";
import AppPreview from "@/components/AppPreview";

export default function WhitelistPage() {
    const [phoneNumber, setPhoneNumber] = useState<number>();

    return (
        <main className="relative bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)]">
            <div className="p-5 md:p-10 max-w-[1400px] mx-auto">
                <div className="flex-col md:flex-row items-start gap-10 md:gap-[120px] md:m-[60px] lg:m-[80px] xl:m-[108px]">

                    <div className="w-full flex items-center justify-between">
                        <FireflySparkLogo
                            className=""
                            textClass="sm:hidden"
                            iconClass="w-[50px] h-[50px] md:w-[140px] md:h-[140px] -ml-1 md:-ml-4"
                        />
                        <div className="sm:hidden">menu</div>
                    </div>

                    <section className="mt-10 md:mt-20">
                        <h1 className="text-5xl font-bold text-gray-50">
                            Be the first to know
                        </h1>
                        <p className="text-lg text-gray-200 my-5 py-5">
                            Don't miss out — join the waitlist to unlock special launch perks...
                        </p>

                        <form className="flex flex-col gap-5 w-full max-w-[380px]">
                            <div className="flex items-center gap-3 w-full rounded-xl border border-[#999] bg-[#333]
                              px-4 py-3.5 focus-within:ring-2 focus-within:ring-brand/70">
                                <Image
                                    src="/flagCA.jpg"
                                    alt="Canada flag"
                                    width={20}
                                    height={20}
                                    className="rounded-full shrink-0"
                                />

                                <input
                                    type="tel"
                                    maxLength={11}
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(Number(e.target.value))}
                                    placeholder="Enter your phone number"
                                    className="flex-1 min-w-0 bg-transparent text-gray-100 placeholder:text-gray-400
                             focus:outline-none h-[24px]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-xl bg-brand font-semibold text-[#03320D] text-[18px]
                           px-5 py-3.5 hover:bg-brand/90 transition-colors"
                            >
                                Join Waitlist
                            </button>
                        </form>
                    </section>

                    <section className="relative mt-20 md:mt-40">
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-x-0 top-0 -translate-y-10 mx-auto
               w-[min(640px,90%)] h-[320px] rounded-full bg-brand/10 blur-[200px]
               -z-10"
                        />

                        <h1 className="text-5xl font-bold text-gray-50">Frequently Asked Questions</h1>

                        <div className="mt-5">
                            <FAQ
                                question="When will I hear back?"
                                answer="You'll receive an email once we begin inviting early users!"
                            />
                        </div>
                    </section>

                </div>
            </div>
        </main>
    );
}
