import AppPreview from "@/components/AppPreview";
import Android from "@/components/icons/Android";
import Apple from "@/components/icons/Apple";
import FireflySparkLogo from "@/components/icons/FireflySparkLogo";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main
      className="min-h-screen 
      bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)]
      p-10"
    >
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-[120px] md:m-[60px] lg:m-[80px] xl:m-[108px]">
        {/* Text column */}
        <div className="relative grow-0 basis-auto max-w-[750px] pt-[120px] mx-auto md:mx-0 sm:mt-0 md:mt-5 lg:mt-20">
          {/* Logo absolutely positioned */}
          <FireflySparkLogo
            className="absolute top-0 left-0 w-[140px] h-[140px]"
          />

          {/* Headline aligned with phone top */}
          <h1 className="text-5xl font-bold text-gray-50 mt-10">
            This page does not exist 
          </h1>

          <div className="mt-10 flex gap-5 items-center">
            <Link
              href="/"
              className="px-5 py-3.5 rounded-xl bg-green-500 font-semibold text-black text-18/24 flex items-center gap-2"
            >
                Go to the home page
            </Link>

          </div>
        </div>

        {/* Phone column untouched */}
        <div className="mx-auto md:mx-0 shrink-0 w-[320px] relative overflow-hidden">
          <AppPreview />
        </div>
      </div>

    </main>
  );
}
