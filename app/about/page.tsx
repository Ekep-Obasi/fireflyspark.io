import ArrowRight from "@/components/icons/ArrowRight";
import Link from "next/link";
import Header from "@/components/Header";
import PhoneMockup from "@/components/PhoneMockup";
import FadeIn from "@/components/FadeIn";

export default function AboutPage() {
  return (
    <main
      className="flex-1 overflow-hidden
            bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)]
            pb-4 px-5 md:p-10"
    >
      <div className="flex flex-col md:flex-row md:flex-wrap md:items-start items-center justify-center gap-10 md:gap-[120px] m-0 md:m-[60px] lg:m-[80px] xl:m-[108px] py-3 md:py-0">
        <div className="relative grow-0 basis-auto max-w-[750px] w-full mx-auto md:mx-0 sm:mt-0 md:mt-5 lg:mt-20">
          <FadeIn delay={0}>
            <Header />
          </FadeIn>

          <section aria-label="about-firefly-spark">
            <FadeIn delay={0}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-50 mt-16 md:mt-4 text-center md:text-left">
                About Us
              </h1>
            </FadeIn>

            <p className="text-base md:text-lg text-gray-200 font-semibold mt-5 py-5 border-b border-gray-600 text-center md:text-left">
              Firefly Spark is Toronto&apos;s members-only app for real,
              last-minute plans. In Firefly Spark you can run out of time but
              never fun
            </p>

            <div className="mt-10 space-y-2 text-center md:text-left">
              <p className="text-base md:text-lg text-gray-200">
                No quizzes. No swiping. No AI.
              </p>
              <p className="text-base md:text-lg text-green-200 font-medium">
                No public profiles.
              </p>
              <p className="text-base md:text-lg text-gray-200">
                Small groups. Public places.
              </p>
              <p className="text-base md:text-lg text-gray-200">
                Verified people. Plans that start soon.
              </p>
              <p className="text-base md:text-lg text-green-200 font-medium">
                People who show up.
              </p>
            </div>

            <FadeIn delay={150}>
              <Link
                href="/waitlist"
                className="inline-flex justify-center items-center gap-1 px-3 py-3 rounded-xl bg-brand font-semibold text-[#03320D] text-base hover:bg-brand/90 transition-colors w-full md:w-auto mt-10 cursor-pointer"
              >
                Be the first to know
                <ArrowRight />
              </Link>
            </FadeIn>
          </section>
        </div>

        <FadeIn delay={300}>
          <PhoneMockup />
        </FadeIn>
      </div>
    </main>
  );
}
