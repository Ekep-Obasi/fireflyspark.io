import Link from "next/link"
import Mailbox from "./icons/Mailbox"
import Insta from "./icons/Insta"

export default function Footer() {
    return (
        <footer
            className="md:fixed bottom-0 left-0 w-full 
             flex flex-col md:flex-row items-center justify-between 
             border-t border-gray-500 
             text-xs md:text-sm text-gray-300 
             p-3 md:p-4 
             space-y-2 md:space-y-0"
            style={{ backgroundColor: "var(--background)" }}
        >
            {/* Left: Copyright */}
            <Link className="flex-1 text-center md:text-left truncate" href='/'>
                Copyright © 2025 Firefly Spark
            </Link>

            {/* Middle: Links */}
            <div className="flex-1 text-center truncate">
                <Link href="/private-policy" className="hover:text-white">
                    Privacy Policy
                </Link>{" "}
                |{" "}
                <Link href="/terms-of-use" className="hover:text-white">
                    Terms of Use
                </Link>
            </div>

            {/* Right: Icons */}
            <div className="flex-1 text-center md:text-right">
                <div className="inline-flex items-center gap-3">
                    <a href="mailto:hello@fireflyspark.io">
                        <Mailbox className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                    </a>
                    <a href="https://www.instagram.com/firefly.spark/?igsh=MWRuMzh4d2w5cXQ0ZQ%3D%3D">
                        <Insta className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
