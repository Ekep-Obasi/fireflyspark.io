'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { X, TextAlignJustify } from 'lucide-react';
import FireflySparkLogo from './FireflySparkLogo';

export default function Header() {
    const [open, setOpen] = useState(false);

    const pathname = usePathname()

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/terms-of-use', label: 'Terms of Service' },
        { href: '/privacy-policy', label: 'Privacy Policy' },
    ]

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
                <nav className="rounded-xlbackdrop-blur py-3 shadow">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`block py-2 rounded hover:bg-white/10 ${pathname === link.href ? 'font-bold text-white' : 'text-gray-300'
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <hr className='text-gray-500' />
            </div>
        </header>
    );
}
