'use client'

import { useRef } from 'react'

import { gsap, useGSAP } from '@/lib/gsap'
import { motion } from '@/lib/motion'

export function Magnetic({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add(
        '(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
        () => {
          const node = ref.current
          if (!node) {
            return
          }
          const el: HTMLDivElement = node

          const limit = 18

          function onMove(event: MouseEvent) {
            const box = el.getBoundingClientRect()
            const x = gsap.utils.clamp(
              -limit,
              limit,
              (event.clientX - box.left - box.width / 2) * 0.32,
            )
            const y = gsap.utils.clamp(
              -limit,
              limit,
              (event.clientY - box.top - box.height / 2) * 0.32,
            )
            gsap.to(el, {
              x,
              y,
              duration: motion.ui,
              ease: motion.ease,
              overwrite: 'auto',
            })
          }

          function onLeave() {
            gsap.to(el, {
              x: 0,
              y: 0,
              duration: motion.reveal,
              ease: motion.ease,
              overwrite: 'auto',
            })
          }

          el.addEventListener('mousemove', onMove)
          el.addEventListener('mouseleave', onLeave)
          return () => {
            el.removeEventListener('mousemove', onMove)
            el.removeEventListener('mouseleave', onLeave)
            gsap.set(el, { x: 0, y: 0 })
          }
        },
      )
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
