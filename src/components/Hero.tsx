'use client'

import { useRef } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { gsap, useGSAP } from '@/lib/gsap'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const underlineRef = useRef<SVGSVGElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        // Headline words fade up
        tl.from(headlineRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.8,
        })

        // Underline SVG draws in from left
        tl.from(
          underlineRef.current,
          {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: 0.6,
            ease: 'power2.inOut',
          },
          '-=0.4',
        )

        // Tagline fades up
        tl.from(
          taglineRef.current,
          {
            opacity: 0,
            y: 24,
            duration: 0.6,
          },
          '-=0.3',
        )

        // CTA scales up with bounce
        tl.from(
          ctaRef.current,
          {
            opacity: 0,
            scale: 0.85,
            duration: 0.6,
            ease: 'back.out(1.4)',
          },
          '-=0.2',
        )

        // Continuous ambient float on the CTA
        gsap.to(ctaRef.current, {
          y: -12,
          duration: 3,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        })
      })
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef}>
      <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1
        ref={headlineRef}
        className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl"
      >
        Build Research Proposals Effortlessly with
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            ref={underlineRef}
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative"> RflowZ</span>
        </span>{' '}
      </h1>
      <p
        ref={taglineRef}
        className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700"
      >
        Streamline proposal writing with Ask Prof Z, OpenAlex source Library,
        RAG-grounded literature, and citation integrity checks.
      </p>
      <div ref={ctaRef} className="mt-10 flex justify-center gap-x-6">
        <Button href="https://app.rflowz.com/register">
          Start Your Proposal Now
        </Button>
      </div>
      <div className="mt-36 lg:mt-44"></div>
      </Container>
    </div>
  )
}
