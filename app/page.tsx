import Android from "@/components/icons/Android";
import Apple from "@/components/icons/Apple";
import Link from "next/link";
import Header from "@/components/Header";
import PhoneMockup from "@/components/PhoneMockup";

export default function HeroPage() {
  return (
    <main
      className="flex-1 overflow-hidden
      bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)]
      pt-4 pb-4 px-6 md:p-10"
    >
      <section aria-label="hero">
        <div className="flex flex-col md:flex-row md:flex-wrap items-start justify-center gap-12 md:gap-[120px] md:m-[60px] lg:m-[80px] xl:m-[108px] py-8 md:py-0">

          <div className="relative grow-0 basis-auto max-w-[750px] w-full mx-auto md:mx-0 mt-4 sm:mt-0 md:mt-5 lg:mt-20">
            <Header />

            <h1 className="text-4xl md:text-5xl font-bold text-gray-50 mt-12 md:mt-6 text-center md:text-left">
              Free right now?
              <br />
              Spontaneity you can count on.
            </h1>

            <p className="mt-6 text-base md:text-lg text-gray-200 max-w-[650px] text-center md:text-left mx-auto md:mx-0">
              Plans that start soon. People who show up.
            </p>

            <div className="mt-12 flex gap-5 items-center justify-center md:justify-start">
              <Link
                href="/waitlist"
                className="px-3 py-3 rounded-xl bg-brand font-semibold text-[#03320D] text-lg flex items-center gap-2"
              >
                <Apple className="w-5 h-5 mb-1" />
                Download
              </Link>

              <Link
                href="/waitlist"
                className="px-3 py-3 rounded-xl border border-gray-200 font-semibold text-gray-200 text-lg flex items-center gap-2"
              >
                <Android className="w-5 h-5 mb-1" />
                Download
              </Link>

            </div>
          </div>

          <PhoneMockup />
        </div>
      </section>
    </main >
  );
}
