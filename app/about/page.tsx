import ArrowRight from "@/components/icons/ArrowRight";
import Link from "next/link";
import Header from "@/components/Header";
import PhoneMockup from "@/components/PhoneMockup";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)] px-6 py-8 md:px-10 md:py-10">
      <section aria-label="about-firefly-spark" className="min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-20">
            {/* Content Section */}
            <div className="flex-1 w-full md:max-w-[600px] lg:max-w-[650px]">
              <FadeIn delay={0}>
                <Header />
              </FadeIn>
              
              <FadeIn delay={0}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-50 mt-12 md:mt-8 text-center md:text-left leading-tight">
                  About Us
                </h1>
              </FadeIn>
              
              <FadeIn delay={150}>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-semibold mt-5 py-5 border-b border-gray-600 text-center md:text-left leading-relaxed">
                  Firefly Spark is Toronto&apos;s members-only app for real,
                  last-minute plans. In Firefly Spark you can run out of time but
                  never fun.
                </p>
              </FadeIn>
              
              <FadeIn delay={300}>
                <div className="mt-8 sm:mt-10 space-y-2 text-center md:text-left">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
                    No quizzes. No swiping. No AI.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-200 font-medium">
                    No public profiles.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
                    Small groups. Public places.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
                    Verified people. Plans that start soon.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-green-200 font-medium">
                    People who show up.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn delay={450}>
                <Link
                  href="/waitlist"
                  className="inline-flex justify-center items-center gap-1 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-brand font-semibold text-[#03320D] text-sm sm:text-base hover:bg-brand/90 transition-colors w-full md:w-auto mt-8 sm:mt-10 cursor-pointer"
                >
                  Secure early access
                  <ArrowRight />
                </Link>
              </FadeIn>
            </div>
            
            {/* Phone Mockup Section */}
            <div className="flex-shrink-0">
              <FadeIn delay={400}>
                <PhoneMockup />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}