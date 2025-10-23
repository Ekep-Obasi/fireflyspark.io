import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import appPreview from "@/public/app-preview.jpg";

export default function NotFoundPage() {
  return (
    <main
      className="min-h-screen 
      bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)]
      p-10"
    >
      <section aria-label="not-found">
        <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-[120px] md:m-[60px] lg:m-[80px] xl:m-[108px]">
          <div className="relative grow-0 basis-auto max-w-[750px] pt-[120px] mx-auto md:mx-0 sm:mt-0 md:mt-5 lg:mt-20">
            <Header />

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

          <div className="relative mx-auto md:mx-0 shrink-0 w-[320px] overflow-visible">
            <div className="absolute inset-0 flex items-center justify-center sm:hidden z-0">
              <div className="w-[220px] h-[550px] rounded-full bg-green-500/30 blur-3xl " />
            </div>

            <div className="flex items-center justify-center">
              <div className="relative aspect-video w-72 h-150 rounded-[45px] shadow-[0_0_2px_2px_rgba(255,255,255,0.1)] border-8 border-zinc-900">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-zinc-900 rounded-full z-20"></div>
                <div className="relative w-full h-full rounded-[37px] overflow-hidden flex items-center justify-center  bg-zinc-900/10">
                  <Image
                    src={appPreview}
                    alt="App Screenshot Preview"
                    fill
                    priority
                    sizes="(max-width: 768px) 80vw,
           (max-width: 1200px) 50vw,
           25vw"
                    className="object-cover rounded-[37px]"
                    placeholder="blur"
                  />
                </div>
                <div className="absolute left-[-12px] top-20 w-[6px] h-8 bg-zinc-900 rounded-l-md shadow-md"></div>
                <div className="absolute left-[-12px] top-36 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>
                <div className="absolute left-[-12px] top-52 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>
                <div className="absolute right-[-12px] top-36 w-[6px] h-16 bg-zinc-900 rounded-r-md shadow-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
