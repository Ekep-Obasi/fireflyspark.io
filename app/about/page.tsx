import ArrowRight from "@/components/icons/ArrowRight";
import Link from "next/link";
import Header from "@/components/Header";

export default function AboutPage() {
    return (
        <main
            className="flex-1 overflow-hidden
      bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)]
      p-5 md:p-10"
        >
            <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-[120px] md:m-[60px] lg:m-[80px] xl:m-[108px]">

                <div className="relative grow-0 basis-auto max-w-[750px] w-full mx-auto md:mx-0 sm:mt-0 md:mt-5 lg:mt-20">
                    <Header />

                    <section aria-label="about-firefly-spark">
                        <h1 className="text-5xl font-bold text-gray-50">About Us</h1>

                        <p className="text-lg text-gray-200 font-semibold mt-5 py-5 border-b border-gray-500">
                            A members-only club for spontaneous meetups
                        </p>

                        <div className="mt-10 space-y-1.5">
                            <p className="text-lg text-gray-200">No quizzes. No swiping. No AI.</p>
                            <p className="text-lg text-green-200">No public profiles.</p>
                            <p className="text-lg text-gray-200">Small groups. Public places.</p>
                            <p className="text-lg text-gray-200">Verified people. Plans that start soon.</p>
                            <p className="text-lg text-green-200">People who show up.</p>
                        </div>

                        <Link
                            href="/waitlist"
                            className="inline-flex justify-center items-center gap-1  px-5 py-2 md:px-5 md:py-3.5 rounded-xl bg-brand font-semibold text-[#03320D] text-[18px] hover:bg-brand/90 transition-colors
              w-full md:w-auto md:mt-10 mt-50"
                        >
                            Be the first to know
                            <ArrowRight />
                        </Link>
                    </section>
                </div>

                <div className="hidden md:block shrink-0 w-[320px]" aria-hidden />
            </div>
        </main>
    );
}
