'use client'

import { useRef } from 'react'

import { gsap, useGSAP, ScrollTrigger } from '@/lib/gsap'
import { scrollReveal } from '@/lib/reveal'

type Direction = 'up' | 'left' | 'right'

interface AnimateInProps {
  children: React.ReactNode
  delay?: number
  direction?: Direction
  className?: string
  stagger?: number
  as?: keyof JSX.IntrinsicElements
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
        const target = stagger
          ? containerRef.current?.children
          : containerRef.current

        if (!target || !containerRef.current) return

        return scrollReveal(target, containerRef.current, { delay, stagger })
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
