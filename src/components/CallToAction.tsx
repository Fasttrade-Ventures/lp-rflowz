'use client'

import { useRef } from 'react'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Magnetic } from '@/components/motion/Magnetic'
import { cta } from '@/lib/cta'
import { gsap, useGSAP } from '@/lib/gsap'
import { scrollReveal } from '@/lib/reveal'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        if (!contentRef.current) {
          return
        }
        return scrollReveal(
          Array.from(contentRef.current.children),
          contentRef.current,
          { stagger: 0.1 },
        )
      })
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-20 sm:py-32"
    >
      <Image
        className="pointer-events-none absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
        aria-hidden
      />
      <Container className="relative">
        <div ref={contentRef} className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Start a proposal today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-blue-50">
            Create a Free account, open Ask Prof Z, and work through Library,
            RAG, and citation checks. No credit card required.
          </p>
          <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-x-6">
            <Magnetic className="w-full sm:w-auto">
              <Button
                href={cta.registerHref}
                color="white"
                className="w-full sm:w-auto"
                data-cta="final"
                data-cta-action="register"
              >
                {cta.primaryLabel}
              </Button>
            </Magnetic>
            <Button
              href={cta.pricingHref}
              variant="outline"
              color="white"
              className="w-full sm:w-auto"
              data-cta="final"
              data-cta-action="pricing"
            >
              {cta.secondaryLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
