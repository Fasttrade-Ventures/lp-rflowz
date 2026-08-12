'use client'

import { useRef } from 'react'
import { gsap, useGSAP, ScrollTrigger } from '@/lib/gsap'

type Direction = 'up' | 'left' | 'right'

interface AnimateInProps {
  children: React.ReactNode
  delay?: number
  direction?: Direction
  className?: string
  stagger?: number
  as?: keyof JSX.IntrinsicElements
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  left: { x: -30, y: 0 },
  right: { x: 30, y: 0 },
}

export function AnimateIn({
  children,
  delay = 0,
  direction = 'up',
  className,
  stagger = 0,
  as: Tag = 'div',
}: AnimateInProps) {
  const containerRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const offset = directionOffset[direction]
        const target = stagger
          ? containerRef.current?.children
          : containerRef.current

        if (!target) return

        gsap.from(target, {
          opacity: 0,
          x: offset.x,
          y: offset.y,
          duration: 0.7,
          delay,
          ease: 'power3.out',
          stagger,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      })
    },
    { scope: containerRef, dependencies: [direction, delay, stagger] },
  )

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={containerRef} className={className}>
      {children}
    </Tag>
  )
}

export { ScrollTrigger }
