'use client'

import { ArrowUp } from "lucide-react"

export default function ScrollTop() {
  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })}
      className='fixed flex w-10 h-10 bottom-10 right-5 rounded-full bg-black/30 items-center justify-center'>
      <ArrowUp />
    </button>
  )
}
