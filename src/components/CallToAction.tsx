'use client'

import { useRef } from 'react'
import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { gsap, useGSAP } from '@/lib/gsap'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        if (contentRef.current) {
          gsap.from(Array.from(contentRef.current.children), {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.15,
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
              once: true,
            },
          })
        }
      })
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div ref={contentRef} className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <Button
            href="https://app.rflowz.com/register"
            color="white"
            className="mt-10"
          >
            Get started for free
          </Button>
        </div>
      </Container>
    </section>
  )
}
