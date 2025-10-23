import Android from "@/components/icons/Android";
import Apple from "@/components/icons/Apple";
import Link from "next/link";
import Header from "@/components/Header";
import PhoneMockup from "@/components/PhoneMockup";
import FadeIn from "@/components/FadeIn";

export default function HeroPage() {
  return (
    <main
      className="flex-1 overflow-hidden
      bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)]
      pb-4 px-6 md:p-10"
    >
      <section aria-label="hero">
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-start items-center justify-center gap-12 md:gap-[120px] m-0 md:m-[60px] lg:m-[80px] xl:m-[108px] py-3 md:py-0">
          <div className="relative grow-0 basis-auto max-w-[750px] w-full mx-auto md:mx-0 mt-4 sm:mt-0 md:mt-5 lg:mt-20">
            <FadeIn delay={0}>
              <Header />
            </FadeIn>

            <FadeIn delay={0}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-50 mt-16 md:mt-4 text-center md:text-left">
                Free right now?
                <br />
                Spontaneity you can count on.
              </h1>
            </FadeIn>

            <FadeIn delay={150}>
              <p className="mt-6 text-base md:text-lg text-gray-200 max-w-[650px] text-center md:text-left mx-auto md:mx-0">
                Plans that start soon. People who show up.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch sm:items-center justify-center md:justify-start w-8/9 mx-auto md:mx-0 md:w-auto md:max-w-none">
                <FadeIn delay={0}>
                  <Link
                    href="/waitlist"
                    className="px-5 py-3 rounded-xl bg-brand font-semibold text-[#03320D] text-base flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
                  >
                    <Apple className="w-5 h-5 mb-1" />
                    App Store
                  </Link>
                </FadeIn>

                <FadeIn delay={100}>
                  <Link
                    href="/waitlist"
                    className="px-5 py-3 rounded-xl border border-gray-200 font-semibold text-gray-200 text-base flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-200 hover:text-[#03320D] transition-colors"
                  >
                    <Android className="w-5 h-5 mb-1" />
                    Google Play
                  </Link>
                </FadeIn>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={400}>
            <PhoneMockup />
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
