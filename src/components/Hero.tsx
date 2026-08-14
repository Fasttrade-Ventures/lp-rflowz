'use client'

import { useRef } from 'react'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Magnetic } from '@/components/motion/Magnetic'
import { cta } from '@/lib/cta'
import { gsap, useGSAP } from '@/lib/gsap'
import { motion } from '@/lib/motion'
import profZOnboardingChat from '@/images/screenshots/prof-z-onboarding-chat.png'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const underlineRef = useRef<SVGSVGElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const trustRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const shotRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const targets = [
          labelRef.current,
          headlineRef.current,
          taglineRef.current,
          trustRef.current,
          ctaRef.current,
          shotRef.current,
        ]

        const tl = gsap.timeline({
          defaults: { ease: motion.ease, clearProps: 'transform,opacity' },
        })

        tl.from(labelRef.current, {
          opacity: 0,
          y: 12,
          duration: motion.ui,
        })
        tl.from(
          headlineRef.current,
          { opacity: 0, y: 18, duration: motion.reveal },
          '-=0.15',
        )
        tl.from(
          underlineRef.current,
          {
            scaleX: 0,
            transformOrigin: 'left center',
            duration: motion.ui,
            ease: 'power2.inOut',
            clearProps: 'transform',
          },
          '-=0.35',
        )
        tl.from(
          taglineRef.current,
          { opacity: 0, y: 12, duration: motion.ui },
          '-=0.2',
        )
        tl.from(
          trustRef.current,
          { opacity: 0, y: 8, duration: motion.fast },
          '-=0.2',
        )
        tl.from(
          ctaRef.current,
          { opacity: 0, y: 10, duration: motion.ui },
          '-=0.15',
        )
        tl.from(
          shotRef.current,
          { opacity: 0, y: 16, duration: motion.reveal },
          '-=0.1',
        )
        tl.eventCallback('onComplete', () => {
          gsap.set(targets, { clearProps: 'transform,opacity' })
        })
      })
    },
    { scope: containerRef },
  )

  return (
    <div ref={containerRef}>
      <Container className="pb-12 pt-8 text-center sm:pb-16 sm:pt-16 lg:pt-28">
        <p
          ref={labelRef}
          className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-800"
        >
          AI research proposal workspace
        </p>
        <h1
          ref={headlineRef}
          className="mx-auto mt-5 max-w-4xl font-display text-[clamp(1.75rem,6.5vw,4.5rem)] font-medium leading-[1.15] tracking-tight text-slate-900"
        >
          Write a grounded research proposal with{' '}
          <span className="relative text-blue-800 sm:whitespace-nowrap">
            <svg
              ref={underlineRef}
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute left-0 top-[calc(100%-0.12em)] h-[0.35em] w-full fill-blue-400"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative">Ask Prof Z</span>
          </span>
        </h1>
        <p
          ref={taglineRef}
          className="mx-auto mt-6 max-w-2xl text-base tracking-tight text-slate-700 sm:text-lg"
        >
          RflowZ helps students and researchers search OpenAlex in the Source
          Library, ground drafts with RAG, run citation checks, and export to
          DOCX, PDF, or PPTX.
        </p>
        <p
          ref={trustRef}
          className="mx-auto mt-4 text-sm font-medium tracking-tight text-slate-600"
        >
          {cta.trustLine}
        </p>
        <div
          ref={ctaRef}
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-x-6"
        >
          <Magnetic className="w-full sm:w-auto">
            <Button
              href={cta.registerHref}
              color="blue"
              className="w-full sm:w-auto"
              data-cta="hero"
              data-cta-action="register"
            >
              {cta.primaryLabel}
            </Button>
          </Magnetic>
          <Button
            href={cta.pricingHref}
            variant="outline"
            color="slate"
            className="w-full sm:w-auto"
            data-cta="hero"
            data-cta-action="pricing"
          >
            {cta.secondaryLabel}
          </Button>
        </div>
        <div
          ref={shotRef}
          className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl bg-slate-100 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/10"
        >
          <Image
            src={profZOnboardingChat}
            alt="RflowZ Ask Prof Z onboarding chat to start a research proposal"
            quality={100}
            unoptimized
            className="w-full"
            sizes="(min-width: 1024px) 64rem, 100vw"
            priority
          />
        </div>
      </Container>
    </div>
  )
}
