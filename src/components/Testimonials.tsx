'use client'

import { useRef } from 'react'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { gsap, useGSAP } from '@/lib/gsap'
import { scrollReveal } from '@/lib/reveal'
import { siteConfig } from '@/lib/site'

const researcherNeeds = [
  {
    content:
      'Cut the time from topic to a structured draft — without starting from a blank page or a generic chatbot.',
    audience: 'Graduate researchers',
  },
  {
    content:
      'Keep literature, citations, and RAG writing in one Library so references stay tied to sources you chose.',
    audience: 'PhD candidates',
  },
  {
    content:
      'Give students a section-by-section workflow through to DOCX, PDF, or PPTX — with citation checks before export.',
    audience: 'Supervisors',
  },
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLUListElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const cleanups = [
          scrollReveal(headingRef.current, headingRef.current),
          cardsRef.current
            ? scrollReveal(Array.from(cardsRef.current.children), cardsRef.current, {
                stagger: 0.1,
              })
            : undefined,
        ]
        return () => cleanups.forEach((fn) => fn?.())
      })
    },
    { scope: sectionRef },
  )

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      aria-label="What researchers need from a proposal workspace"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div ref={headingRef} className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            What researchers need
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Outcomes the product is built for — not customer testimonials.
          </p>
          <p className="mt-4 text-sm text-slate-600">
            Built with{' '}
            <Link
              href="/about"
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              {siteConfig.founder.name}, {siteConfig.founder.credentials}
            </Link>
            {' · '}
            <a
              href={siteConfig.sameAs[1]}
              className="text-blue-600 hover:text-blue-800"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <ul
          ref={cardsRef}
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {researcherNeeds.map((item) => (
            <li key={item.audience}>
              <figure className="relative h-full rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900">
                    {item.content}
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 border-t border-slate-100 pt-6">
                  <div className="font-display text-base text-slate-900">
                    {item.audience}
                  </div>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
