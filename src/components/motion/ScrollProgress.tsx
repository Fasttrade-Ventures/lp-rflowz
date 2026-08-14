'use client'

import { useRef } from 'react'

import { gsap, useGSAP, ScrollTrigger } from '@/lib/gsap'

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const bar = barRef.current
      if (!bar) {
        return
      }

      gsap.set(bar, { scaleX: 0, transformOrigin: 'left center' })

      const trigger = ScrollTrigger.create({
        start: 0,
        end: 'max',
        onUpdate: (self) => {
          gsap.set(bar, { scaleX: self.progress })
        },
      })

      return () => trigger.kill()
    })
  }, { scope: barRef })

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[46] h-0.5 bg-transparent"
      aria-hidden="true"
    >
      <div ref={barRef} className="h-full origin-left scale-x-0 bg-blue-700" />
    </div>
  )
}
