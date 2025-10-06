import AppPreview from "@/components/AppPreview";
import Android from "@/components/icons/Android";
import Apple from "@/components/icons/Apple";
import FireflySparkLogo from "@/components/FireflySparkLogo";
import Link from "next/link";

export default function HeroPage() {
  return (
    <main
      className="flex-1 overflow-hidden
      bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)]
      p-5 md:p-10"
    >
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-[120px] md:m-[60px] lg:m-[80px] xl:m-[108px] ">
        <div className="relative grow-0 basis-auto max-w-[750px] pt-[120px] mx-auto md:mx-0 sm:mt-0 md:mt-5 lg:mt-20">
          <div className="absolute top-0 left-0 w-full flex items-center justify-between">
            <FireflySparkLogo
              className=" "
              textClass="sm:hidden"
              iconClass="w-[50px] h-[50px] md:w-[140px] md:h-[140px] -ml-1 md:-ml-4"
            />
            <div className="sm:hidden">
              menu
            </div>
          </div>

          <h1 className="text-5xl font-bold text-gray-50 mt-10">
            Free right now? Spontaneity you can count on.
          </h1>

          <p className="mt-4 text-lg text-gray-200 max-w-[650px]">
            Plans that start soon. People who show up.
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

        <div className="relative mx-auto md:mx-0 shrink-0 w-[320px] overflow-visible">
          <div className="absolute inset-0 flex items-center justify-center sm:hidden">
            <div className="w-[220px] h-[550px] rounded-full bg-green-500/30 blur-3xl " />
          </div>

          <AppPreview className="relative z-10" />
        </div>

      </div>

    </main>
  );
}
