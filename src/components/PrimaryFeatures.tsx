'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { AnimateIn } from '@/components/AnimateIn'
import backgroundImage from '@/images/background-features.jpg'
import askProfZProblemStatement from '@/images/screenshots/ask-prof-z-problem-statement.png'
import openAlexSourceLibrary from '@/images/screenshots/openalex-source-library.png'
import askProfZMethodology from '@/images/screenshots/ask-prof-z-methodology.png'
import citationIntegrity from '@/images/screenshots/citation-integrity.png'

const features = [
  {
    title: 'Ask Prof Z',
    shortTitle: 'Ask Prof Z',
    description:
      'Draft and refine proposal sections with Ask Prof Z — AI writing tailored to your research topic.',
    image: askProfZProblemStatement,
    imageAlt: 'RflowZ Ask Prof Z drafting a research proposal problem statement',
  },
  {
    title: 'OpenAlex Source Library',
    shortTitle: 'OpenAlex',
    description:
      'Search OpenAlex and policy/media sources, attach them to your proposal, and keep citations organized in one Library.',
    image: openAlexSourceLibrary,
    imageAlt: 'RflowZ OpenAlex source Library for research proposal citations',
  },
  {
    title: 'Methodology with Ask Prof Z',
    shortTitle: 'Methodology',
    description:
      'Fill design, sampling, and analysis drafts, then generate a full methodology narrative aligned with your philosophy.',
    image: askProfZMethodology,
    imageAlt: 'RflowZ Ask Prof Z generating a research methodology narrative',
  },
  {
    title: 'Citation Integrity',
    shortTitle: 'Citations',
    description:
      'Verify references before export so unresolved or mismatched citations do not slip into your proposal.',
    image: citationIntegrity,
    imageAlt: 'RflowZ citation integrity checks for academic proposals',
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Core RflowZ features for research proposal writing"
      className="relative overflow-hidden bg-blue-600 pb-20 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <AnimateIn>
            <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
              AI tools for research proposal writing
            </h2>
          </AnimateIn>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <TabList className="flex flex-wrap justify-center gap-2 lg:col-span-5 lg:block lg:space-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <Tab
                      key={feature.title}
                      className={clsx(
                        'group relative shrink-0 rounded-full px-4 py-2 text-left whitespace-nowrap focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:block lg:w-full lg:whitespace-normal lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <span
                        className={clsx(
                          'font-display text-lg',
                          selectedIndex === featureIndex
                            ? 'text-blue-800 lg:text-white'
                            : 'text-white',
                        )}
                      >
                        <span className="lg:hidden">{feature.shortTitle}</span>
                        <span className="hidden lg:inline">{feature.title}</span>
                      </span>
                      <span
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-50 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </span>
                    </Tab>
                  ))}
                </TabList>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="lg:hidden">
                      <p className="mx-auto max-w-2xl text-center text-base text-white">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-full overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt={feature.imageAlt}
                        priority
                        quality={100}
                        unoptimized
                        sizes="(min-width: 1024px) 67.8125rem, 100vw"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
