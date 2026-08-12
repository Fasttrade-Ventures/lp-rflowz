'use client'

import { useRef } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { gsap, useGSAP } from '@/lib/gsap'
import { faqColumns } from '@/lib/faqs'
import backgroundImage from '@/images/background-faqs.jpg'

export function Faqs() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const columnsRef = useRef<HTMLUListElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        })

        if (columnsRef.current) {
          gsap.from(Array.from(columnsRef.current.children), {
            opacity: 0,
            x: -20,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: columnsRef.current,
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
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div ref={headingRef} className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Got Questions? We&apos;ve Got Answers.
          </h2>
        </div>
        <ul
          ref={columnsRef}
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqColumns.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq) => (
                  <li key={faq.question}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
