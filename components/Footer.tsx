import Link from "next/link";
import Mailbox from "./icons/Mailbox";
import Insta from "./icons/Insta";
import FadeIn from "./FadeIn";

export default function Footer() {
  return (
    <FadeIn delay={500}>
      <footer
        className="mt-auto w-full border-t border-gray-600 text-sm text-gray-300 p-5 md:p-6"
        style={{ backgroundColor: "var(--background)" }}
      >
        {/* Mobile layout */}
        <div className="flex flex-col md:hidden space-y-4">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <Link href="/" className="text-gray-300">
              © 2025 Firefly Spark
            </Link>
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@fireflyspark.io"
                aria-label="Email Firefly Spark"
              >
                <Mailbox className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/firefly.spark/?igsh=MWRuMzh4d2w5cXQ0ZQ%3D%3D"
                aria-label="Follow us on Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Insta className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex items-center justify-between">
          <Link href="/" className="text-gray-300">
            Copyright © 2025 Firefly Spark
          </Link>

          <div className="flex items-center gap-3">
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              href="/terms-of-use"
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@fireflyspark.io"
              aria-label="Email Firefly Spark"
            >
              <Mailbox className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/firefly.spark/?igsh=MWRuMzh4d2w5cXQ0ZQ%3D%3D"
              aria-label="Follow us on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Insta className="w-6 h-6 text-gray-300 hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </FadeIn>
  );
}
