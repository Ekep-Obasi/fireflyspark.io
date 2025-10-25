import Android from "@/components/icons/Android";
import Apple from "@/components/icons/Apple";
import Link from "next/link";
import Header from "@/components/Header";
import PhoneMockup from "@/components/PhoneMockup";
import FadeIn from "@/components/FadeIn";

export default function HeroPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)] px-6 py-8 md:px-10 md:py-10">
      <section aria-label="hero" className="min-h-[calc(100vh-280px)] flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-20">
            {/* Content Section */}
            <div className="flex-1 w-full md:max-w-[600px] lg:max-w-[650px]">
              <FadeIn delay={0}>
                <Header />
              </FadeIn>
              
              <FadeIn delay={0}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-50 mt-12 md:mt-8 md:text-left leading-tight">
                  Free right now?
                  <br />
                  Spontaneity you can count on.
                </h1>
              </FadeIn>
              
              <FadeIn delay={150}>
                <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 md:text-left leading-relaxed">
                  Plans that start soon. People who show up.
                </p>
              </FadeIn>
              
              <FadeIn delay={300}>
                <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-center md:justify-start">
                  <Link
                    href="/waitlist"
                    className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-brand font-semibold text-[#03320D] text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    <Apple className="w-4 h-4 sm:w-5 sm:h-5 mb-1" />
                    App Store
                  </Link>
                  
                  <Link
                    href="/waitlist"
                    className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-200 font-semibold text-gray-200 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-200 hover:text-[#03320D] transition-colors"
                  >
                    <Android className="w-4 h-4 sm:w-5 sm:h-5 mb-1" />
                    Google Play
                  </Link>
                </div>
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