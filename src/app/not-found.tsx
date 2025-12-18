'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { getTheme } from '@/lib/design-system'
import Magnetic from '@/components/ui/Magnetic'

export default function NotFound() {
  const t = getTheme(false) // Force dark mode/system mode look

  return (
    <div className="min-h-screen bg-[#070B14] flex flex-col items-center justify-center relative overflow-hidden text-center px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-[#070B14]/80" />

      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">

        {/* The Jammed Gears */}
        <div className="relative w-64 h-64 mb-12">
          {/* Working Gear */}
          <motion.div
            className="absolute top-0 right-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="/assets/gear-contact.svg"
              width={100}
              height={100}
              alt=""
              className="opacity-50 invert"
            />
          </motion.div>

          {/* Jammed Gear - Shaking */}
          <motion.div
            className="absolute bottom-4 left-10"
            animate={{
              rotate: [0, 2, -2, 1, 0],
              x: [0, 1, -1, 0]
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            <Image
              src="/assets/gear-contact.svg"
              width={120}
              height={120}
              alt=""
              className="opacity-80 invert text-red-500"
              style={{ filter: 'invert(1) drop-shadow(0 0 10px rgba(220, 38, 38, 0.5))' }}
            />
          </motion.div>
        </div>

        {/* Glitch Tech Text */}
        <h1 className="font-mono text-8xl md:text-9xl font-bold text-white mb-2 tracking-tighter opacity-90">
          <span className="inline-block">4</span>
          <motion.span
            className="inline-block"
            animate={{ opacity: [1, 0.5, 1, 0.8, 1] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
          >0</motion.span>
          <span className="inline-block">4</span>
        </h1>

        <div className="space-y-2 mb-12 font-mono text-sm md:text-base">
          <p className="text-red-400">
            <span className="mr-2">&gt;</span>ERROR: SYSTEM_JAMMED
          </p>
          <p className="text-slate-400">
            <span className="mr-2">&gt;</span>AGENT_CONNECTION_LOST
          </p>
          <p className="text-slate-500">
            <span className="mr-2">&gt;</span>Orchestration failed at sector [PAGE_NOT_FOUND]
          </p>
        </div>

        {/* Magnetic Reboot Button */}
        <Magnetic strength={50}>
          <Link
            href="/"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium text-sm md:text-base overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              INITIATE_SYSTEM_REBOOT
            </span>
            <div className="absolute inset-0 bg-[var(--accent-teal)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>
        </Magnetic>

      </div>
    </div>
  )
}
