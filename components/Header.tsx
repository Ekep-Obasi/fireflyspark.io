'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, TextAlignJustify } from 'lucide-react';
import FireflySparkLogo from './FireflySparkLogo';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full text-gray-100">
            <div className="flex items-center justify-between py-3">
                <FireflySparkLogo
                    className=" "
                    // textClass="sm:hidden"
                    iconClass="w-[40px] h-[40px] md:w-[100px] md:h-[100px] "
                />

                <button
                    className="p-2 rounded-md hover:bg-white/10 transition-all ease-in-out focus:outline-none sm:hidden"
                    onClick={() => setOpen(v => !v)}
                    aria-expanded={open}
                    aria-controls="mobile-collapse"
                    aria-label="Toggle navigation"
                >
                    {open
                        ?
                        <X className="w-8 h-8" />
                        :
                        <TextAlignJustify className="w-8 h-8" />
                    }
                </button>
            </div>

            <div
                id="mobile-collapse-menu"
                className={`sm:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out
          ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <nav className="rounded-xlbackdrop-blur py-2 shadow">
                    <Link href="/" className="block py-2 rounded hover:bg-white/10">Home</Link>
                    <Link href="/about" className="block py-2 rounded hover:bg-white/10">About</Link>
                    <Link href="/terms-of-use" className="block py-2 rounded hover:bg-white/10">Terms of Service</Link>
                    <Link href="/privacy-policy" className="block py-2 rounded hover:bg-white/10">Private Policy</Link>
                </nav>
            </div>
        </header>
    );
}
