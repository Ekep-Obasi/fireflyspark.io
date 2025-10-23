"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, TextAlignJustify } from "lucide-react";
import FireflySparkLogo from "./FireflySparkLogo";

export default function Header() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/waitlist", label: "Waitlist" },
    { href: "/terms-of-use", label: "Terms of Service" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ];

  return (
    <header className="w-full text-gray-100">
      <div className="flex items-center justify-between py-3 md:py-4">
        <FireflySparkLogo
          className=" "
          // textClass="sm:hidden"
          iconClass="w-12 h-12 md:w-[100px] md:h-[100px]"
        />

        <button
          className="p-2.5 rounded-lg hover:bg-white/10 active:bg-white/20 transition-all ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/70 sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-collapse"
          aria-label="Toggle navigation"
        >
          {open ? (
            <X className="w-7 h-7" />
          ) : (
            <TextAlignJustify className="w-7 h-7" />
          )}
        </button>
      </div>

      <div
        id="mobile-collapse-menu"
        className={`sm:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out
          ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
         <nav className="rounded-lg backdrop-blur py-3 mb-4 shadow">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                pathname === link.href
                  ? "text-white bg-white/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
