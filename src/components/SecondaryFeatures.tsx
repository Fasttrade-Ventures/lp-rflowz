'use client'

import { useEffect, useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { AnimateIn } from '@/components/AnimateIn'
import askProfZProblemStatement from '@/images/screenshots/ask-prof-z-problem-statement.png'
import askProfZResearchQuestions from '@/images/screenshots/ask-prof-z-research-questions.png'
import openAlexSourceLibrary from '@/images/screenshots/openalex-source-library.png'
import reviewProposalExport from '@/images/screenshots/review-proposal-export.png'

type Feature = {
  name: string
  summary: string
  description: string
  image: ImageProps['src']
  imageAlt: string
}

const features: Array<Feature> = [
  {
    name: 'OpenAlex Source Library',
    summary: 'Search and attach sources in one Library.',
    description:
      'Search OpenAlex and add policy or media sources, then attach them to your proposal so citations stay organized.',
    image: openAlexSourceLibrary,
    imageAlt: 'RflowZ OpenAlex source Library for research proposal citations',
  },
  {
    name: 'Export to DOCX, PDF, or PPTX',
    summary: 'Review and export when you are ready.',
    description:
      'Review the full proposal, then export. Free plan exports are watermarked DOCX/PDF. PPTX is on higher plans when they launch.',
    image: reviewProposalExport,
    imageAlt: 'RflowZ Review Proposal export to DOCX, PDF, and PPTX',
  },
  {
    name: 'Problem Statement with Ask Prof Z',
    summary: 'Draft the problem your research will address.',
    description:
      'Work through the problem statement with Ask Prof Z so the gap, context, and significance stay aligned with your sources.',
    image: askProfZProblemStatement,
    imageAlt: 'RflowZ Ask Prof Z drafting a research proposal problem statement',
  },
  {
    name: 'Research Questions with Ask Prof Z',
    summary: 'Shape questions and objectives together.',
    description:
      'Generate and refine research questions and objectives in the same workspace as your literature and methodology drafts.',
    image: askProfZResearchQuestions,
    imageAlt: 'RflowZ Ask Prof Z drafting research questions and objectives',
  },
]

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6">
      {features.map((feature) => (
        <div key={feature.summary}>
          <div className="mx-auto max-w-2xl">
            <h3 className="mt-2 font-display text-xl text-blue-600">
              {feature.name}
            </h3>
            <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
          </div>
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative w-full overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="h-auto w-full"
                src={feature.image}
                alt={feature.imageAlt}
                quality={100}
                unoptimized
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <TabGroup className="mt-20">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-4 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Tab
                key={feature.summary}
                className={clsx(
                  'relative rounded-lg p-1 text-left focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
                  featureIndex !== selectedIndex &&
                    'opacity-75 hover:opacity-100',
                )}
              >
                <span
                  className={clsx(
                    'mt-2 block font-display text-xl',
                    featureIndex === selectedIndex
                      ? 'text-blue-600'
                      : 'text-slate-600',
                  )}
                >
                  {feature.name}
                </span>
                <span className="mt-4 block text-sm text-slate-600">
                  {feature.description}
                </span>
              </Tab>
            ))}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <TabPanel
                  static
                  key={feature.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{
                    transform: `translateX(-${selectedIndex * 100}%)`,
                  }}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      alt={feature.imageAlt}
                      quality={100}
                      unoptimized
                      sizes="52.75rem"
                    />
                  </div>
                </TabPanel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  )
}

export function SecondaryFeatures() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const sync = () => setIsDesktop(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  return (
    <section
      id="secondary-features"
      aria-label="Additional RflowZ features for research proposals"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <AnimateIn>
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Streamline your research proposal writing process.
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Ask Prof Z, OpenAlex Library search, RAG grounding, and export
              tools help you finish stronger research proposals faster.
            </p>
          </AnimateIn>
        </div>
        {isDesktop ? <FeaturesDesktop /> : <FeaturesMobile />}
      </Container>
    </section>
  )
}
