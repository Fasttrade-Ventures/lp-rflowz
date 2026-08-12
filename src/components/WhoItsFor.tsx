'use client'

import { useRef } from 'react'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { gsap, useGSAP } from '@/lib/gsap'

const audiences = [
  {
    title: 'Students',
    description:
      'Undergraduate and postgraduate students writing thesis, dissertation, or grant proposals with guided templates and AI support.',
  },
  {
    title: 'Researchers',
    description:
      'Academic researchers who need structured proposals, grounded literature review, and OpenAlex Library search with RAG.',
  },
  {
    title: 'Supervisors & teams',
    description:
      'Supervisors and research groups preparing consistent, well-formatted proposals ready for DOCX, PDF, or PPTX export.',
  },
]

export function WhoItsFor() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLUListElement>(null)

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

        if (cardsRef.current) {
          gsap.from(Array.from(cardsRef.current.children), {
            opacity: 0,
            y: 40,
            duration: 0.6,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: cardsRef.current,
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
      id="who-its-for"
      aria-labelledby="who-its-for-title"
      className="border-y border-slate-200 bg-white py-20 sm:py-24"
    >
      <Container>
        <div ref={headingRef} className="mx-auto max-w-3xl text-center">
          <h2
            id="who-its-for-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Built for researchers at every stage
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            RflowZ is an AI-powered research proposal platform for students,
            academics, and research teams. Create structured proposals with Ask
            Prof Z, search OpenAlex in your Library, ground literature with RAG,
            and export submission-ready documents.             Explore our{' '}
            <Link
              href="/resources"
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              research proposal resources
            </Link>{' '}
            or start with the{' '}
            <Link
              href="/ai-research-proposal-writer"
              className="font-medium text-blue-600 hover:text-blue-800"
            >
              AI research proposal writer
            </Link>
            .
          </p>
        </div>
        <ul
          ref={cardsRef}
          role="list"
          className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3"
        >
          {audiences.map((audience) => (
            <li
              key={audience.title}
              className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200"
            >
              <h3 className="font-display text-lg text-slate-900">
                {audience.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {audience.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
