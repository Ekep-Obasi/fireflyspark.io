export default function Page() {
  return (
    <main className="min-h-screen 
    bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)]
    p-10">
      <div className="flex items-start gap-8">
        {/* Text column */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold">This should be Clash Display</h1>
          <p className="mt-4 text-lg">This should be Poppins (body default).</p>
          <h2 className="mt-8 text-3xl font-semibold">
            H2 is also Poppins unless you style it otherwise.
          </h2>
        </div>

        {/* Phone column */}
        <div
          className="
          m-10
      shrink-0
      w-[22vw]           /* ~a bit under 1/4 of screen */
      md:w-[20vw]        /* slightly smaller on wider screens */
      lg:w-[18vw]        /* ~1/5 on large screens */
      max-w-[360px]      /* don't exceed typical phone width */
      min-w-[220px]      /* don't get too tiny */
      aspect-[9/19.5]    /* phone-like ratio (≈ 19.5:9) */
      bg-black rounded-3xl
      border border-black/20 shadow-xl
      relative overflow-hidden
    "
        >
          {/* Optional screen inset / bezel */}
          <div className="absolute inset-1 rounded-2xl bg-white" />
          {/* Optional notch */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-8px)] w-20 h-3 bg-black/80 rounded-b-xl" />
        </div>
      </div>

    </main >
  );
}
