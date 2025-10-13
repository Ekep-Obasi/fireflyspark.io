import FireflySparkLogo from "@/components/icons/FireflySparkLogo";
import ArrowRight from "@/components/icons/ArrowRight";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="relative bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)]">

            <div className="p-5 md:p-10 max-w-[1400px] mx-auto">

                <div className="flex flex-col items-start gap-10 md:gap-[120px] md:m-[60px] lg:m-[80px] xl:m-[108px]">

                    <div className="w-full flex items-center justify-between">
                        <FireflySparkLogo
                            className=""
                            textClass="sm:hidden"
                            iconClass="w-[50px] h-[50px] md:w-[140px] md:h-[140px] -ml-1 md:-ml-4"
                        />
                        <div className="sm:hidden">menu</div>
                    </div>

                    <section className="mt-5">
                        <h1 className="text-5xl font-bold text-gray-50">About Us</h1>

                        <p className="text-lg text-gray-200 font-semibold mt-5 py-5 border-b border-gray-500">
                            A member-only, privacy-first for spontaneous small meetups
                        </p>

                        <div className="mt-10 space-y-1.5">
                            <p className="text-lg text-gray-200">No feed. No swiping. No DMs.</p>
                            <p className="text-lg text-green-200">No public profiles.</p>
                            <p className="text-lg text-gray-200">Small groups. Public places.</p>
                            <p className="text-lg text-gray-200">Verified people. Plans that start soon.</p>
                            <p className="text-lg text-green-200">People who show up.</p>
                        </div>

                        <Link
                            href="/waitlist"
                            className="inline-flex justify-center items-center gap-1 px-5 py-3.5 rounded-xl bg-brand font-semibold text-[#03320D] text-[18px] hover:bg-brand/90 transition-colors
                            
                            w-full md:w-auto mt-70 md:mt-10"
                        >
                            Be the first to know
                            <ArrowRight />
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}
