import AppPreview from "@/components/AppPreview";
import Android from "@/components/icons/Android";
import Apple from "@/components/icons/Apple";
import FireflySparkLogo from "@/components/icons/FireflySparkLogo";
import Link from "next/link";

export default function HeroPage() {
  return (
    <main
      className="min-h-screen 
      bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)]
      p-5 md:p-10"
    >
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-[120px] md:m-[60px] lg:m-[80px] xl:m-[108px] space-y-24 md:space-y-0">
        <div className="relative grow-0 basis-auto max-w-[750px] pt-[120px] mx-auto md:mx-0 sm:mt-0 md:mt-5 lg:mt-20">
          <FireflySparkLogo
            className="absolute top-0 left-0 w-[75px] h-[75px] md:w-[140px] md:h-[140px] -ml-3 md:-ml-4 -mt-5 md:-mt-0"
          />

          <h1 className="text-5xl font-bold text-gray-50 mt-10">
            Where spontaneity, culture, and good vibes come together.
          </h1>

          <p className="mt-4 text-lg text-gray-200 max-w-[650px]">
            Find your people, create moments that feel real, and build genuine human
            connections, one spark at a time.
          </p>

          <div className="mt-10 flex gap-5 items-center justify-center md:justify-normal">
            <Link
              href="#"
              className="px-5 py-3.5 rounded-xl bg-green-500 font-semibold text-black text-18/24 flex items-center gap-2"
            >
              <Apple className="w-5 h-5 mb-1" />
              Download
            </Link>

            <Link
              href="#"
              className="px-5 py-3 rounded-xl border border-gray-200 font-semibold text-gray-200 text-18/24 flex items-center gap-2"
            >
              <Android className="w-5 h-5 mb-1" />
              Download
            </Link>

          </div>
        </div>

        <div className="relative mx-auto md:mx-0 shrink-0 w-[320px] overflow-visible sm:mt-10 md:mt-0">
          <div className="absolute inset-0 flex items-center justify-center sm:hidden">
            <div className="w-[220px] h-[550px] rounded-full bg-green-500/30 blur-3xl " />
          </div>

          <AppPreview className="relative z-10 mb-10" />
        </div>



      </div>

    </main>
  );
}
