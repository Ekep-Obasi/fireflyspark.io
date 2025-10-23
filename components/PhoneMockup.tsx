import Image from "next/image";
import appPreview from "@/public/app-preview.jpg";

export default function PhoneMockup() {
  return (
    <div className="w-full flex justify-center">
      <div className="relative shrink-0 w-[320px] overflow-visible py-8 md:py-0 md:block">
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
  );
}
