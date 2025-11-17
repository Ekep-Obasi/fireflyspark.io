import ArrowRight from "@/components/icons/ArrowRight";
import Link from "next/link";
import Header from "@/components/Header";
import PhoneMockup from "@/components/PhoneMockup";
import FadeIn from "@/components/FadeIn";
import { Linkedin } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex-1 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.05)_25%,transparent_40%)] px-6 py-8 md:px-10 md:py-10">
      <section
        aria-label="about-firefly-spark"
        className="min-h-[calc(100vh-80px)] flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-20">
            {/* Content Section */}
            <div className="flex-1 w-full md:max-w-[600px] lg:max-w-[650px]">
              <FadeIn delay={0}>
                <Header />
              </FadeIn>

              <FadeIn delay={0}>
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-50 mt-12 md:mt-8 text-center md:text-left leading-tight">
                  About Us
                </h1>
              </FadeIn>

              <FadeIn delay={150}>
                <p className="text-base sm:text-base md:text-lg lg:text-xl text-gray-200 font-semibold mt-5 py-5 border-b border-gray-600 text-center md:text-left leading-relaxed">
                  Firefly Spark is Toronto&apos;s members-only app for real,
                  last-minute plans. In Firefly Spark you can run out of time
                  but never fun.
                </p>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="mt-8 sm:mt-10 space-y-2 text-center md:text-left">
                  <p className="text-base sm:text-base md:text-lg lg:text-xl text-gray-200">
                    No quizzes. No swiping. No AI.
                  </p>
                  <p className="text-base sm:text-base md:text-lg lg:text-xl text-green-200 font-medium">
                    No public profiles.
                  </p>
                  <p className="text-base sm:text-base md:text-lg lg:text-xl text-gray-200">
                    Small groups. Public places.
                  </p>
                  <p className="text-base sm:text-base md:text-lg lg:text-xl text-gray-200">
                    Verified people. Plans that start soon.
                  </p>
                  <p className="text-base sm:text-base md:text-lg lg:text-xl text-green-200 font-medium">
                    People who show up.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={450}>
                <Link
                  href="/waitlist"
                  className="inline-flex justify-center items-center gap-1 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-brand font-semibold text-[#03320D] text-base sm:text-base hover:bg-brand/90 transition-colors w-full md:w-auto mt-8 sm:mt-10 cursor-pointer"
                >
                  Secure early access
                  <ArrowRight />
                </Link>
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

      {/* Team Section */}
      <section
        aria-label="meet-our-team"
        className="max-w-7xl mx-auto mt-20 md:mt-32 pb-20"
      >
        <FadeIn delay={0}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-50 text-center mb-12 md:mb-16">
            Meet Our Team
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* Hoon Y. - Co-Founder & CEO */}
          <FadeIn delay={150}>
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-700 bg-[#1E1E1E] hover:border-gray-600 transition-colors">
              <h3 className="text-xl md:text-2xl font-bold text-gray-50 mb-2">
                Hoon Y.
              </h3>
              <p className="text-base md:text-lg text-green-200 font-medium mb-4">
                Co-Founder & CEO
              </p>
              <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                Passionate about digital innovation, human-centered design, and
                real-world connection. Leading Firefly Spark&apos;s mission to
                bring people together through spontaneous, authentic experiences.
              </p>
              <a
                href="https://linkedin.com/in/hoonyang"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 text-gray-200 hover:text-white transition-colors"
                aria-label="Connect with Hoon Y. on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </FadeIn>

          {/* Arrey-Etta - CTO */}
          <FadeIn delay={300}>
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-700 bg-[#1E1E1E] hover:border-gray-600 transition-colors">
              <h3 className="text-xl md:text-2xl font-bold text-gray-50 mb-2">
                Arrey-Etta
              </h3>
              <p className="text-base md:text-lg text-green-200 font-medium mb-4">
                Chief Technology Officer
              </p>
              <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                Software developer and entrepreneur with a passion for building
                innovative solutions. Driving the technical vision and
                development of Firefly Spark&apos;s platform.
              </p>
              <a
                href="https://www.linkedin.com/in/arrey-etta/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 text-gray-200 hover:text-white transition-colors"
                aria-label="Connect with Arrey-Etta on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </FadeIn>

          {/* Jack S. - Senior Software Developer */}
          <FadeIn delay={450}>
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-700 bg-[#1E1E1E] hover:border-gray-600 transition-colors">
              <h3 className="text-xl md:text-2xl font-bold text-gray-50 mb-2">
                Jack S.
              </h3>
              <p className="text-base md:text-lg text-green-200 font-medium mb-4">
                Senior Software Developer
              </p>
              <p className="text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                Experienced developer and infrastructure specialist focused on
                building robust, scalable systems. Ensuring Firefly Spark&apos;s
                platform runs smoothly and efficiently behind the scenes.
              </p>
              <a
                href="https://www.linkedin.com/in/jack-s-5977b8239/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700/50 hover:bg-gray-700 text-gray-200 hover:text-white transition-colors"
                aria-label="Connect with Jack S. on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
