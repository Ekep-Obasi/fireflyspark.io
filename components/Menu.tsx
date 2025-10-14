'use client';

import React, { useState } from 'react';
import { Logs, TextAlignJustify } from 'lucide-react';
import Link from 'next/link';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-md
                   hover:bg-white/5 focus:outline-none "
        aria-expanded={isOpen}
        aria-label="Open menu"
      >
        <span className="relative block leading-none">
          <TextAlignJustify
            className={`block transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 scale-90 rotate-90' : 'opacity-100 scale-100 rotate-0'
              }`}
          />
          <Logs
            className={`block absolute inset-0 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-90 -rotate-90'
              }`}
          />
        </span>
      </button>

      <div
        className={`absolute right-0 mt-2 w-40 rounded-xl bg-[#222]/50 text-gray-100 shadow-lg
              grid transition-all duration-300 ease-in-out
              ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">

          <nav className="p-2 flex flex-col items-end">
            <Link className="block rounded-md px-3 py-2 hover:bg-white/5" href="/">
              Home
            </Link>
            <Link className="block rounded-md px-3 py-2 hover:bg-white/5" href="/about">
              About
            </Link>
            <Link className="block rounded-md px-3 py-2 hover:bg-white/5" href="/terms-of-use">
              Terms
            </Link>
            <Link className="block rounded-md px-3 py-2 hover:bg-white/5" href="/private-policy">
              Private Policy
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}
