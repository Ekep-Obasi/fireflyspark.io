import { Plus } from 'lucide-react';
import React, { useState } from 'react';

export type FAQProps = {
    question: string;
    answer: string;
    points?: string[];
};

export default function FAQ({ question, answer, points }: FAQProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="py-5 border-b border-gray-500">
            <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                aria-expanded={isOpen}
                className="w-full flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/70 rounded-md"
            >
                <p className="font-semibold text-white">{question}</p>
                <Plus
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'
                        }`}
                />
            </button>

            <div
                className={`grid transition-[grid-template-rows,opacity,margin] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="text-gray-300 leading-relaxed">{answer}</p>

                    {points && points.length > 0 && (
                        <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-300">
                            {points.map((p, idx) => (
                                <li key={idx}>{p}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
