import { Plus } from 'lucide-react'
import React, { useState } from 'react'

type FAQProps = {
    question: string,
    answer: string
}

export default function FAQ({ question, answer }: FAQProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className='py-5 border-b border-gray-500'>
            <div className='flex justify-between items-center'>
                <p>{question}</p>
                <Plus onClick={() => setIsOpen(!isOpen)} />
            </div>

            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
                    }`}
            >
                <p className="overflow-hidden text-gray-300 leading-relaxed">
                    {answer}
                </p>
            </div>
        </div>
    )
}
