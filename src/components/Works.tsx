'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { AnimateIn } from '@/components/AnimateIn'
import backgroundImage from '@/images/background-features.jpg'
import openAlexSourceLibrary from '@/images/screenshots/openalex-source-library.png'
import profZOnboardingChat from '@/images/screenshots/prof-z-onboarding-chat.png'
import profZTopicTitles from '@/images/screenshots/prof-z-topic-titles.png'
import reviewProposalExport from '@/images/screenshots/review-proposal-export.png'

const features = [
  {
    title: 'Step 1',
    description:
      'In RflowZ, start a proposal with Ask Prof Z — choose your language and research type.',
    image: profZOnboardingChat,
    imageAlt: 'Step 1: Start a research proposal with Prof Z onboarding chat',
  },
  {
    title: 'Step 2',
    description:
      'In RflowZ, refine your topic with Ask Prof Z and pick a research title.',
    image: profZTopicTitles,
    imageAlt: 'Step 2: Choose a research topic title with Prof Z',
  },
  {
    title: 'Step 3',
    description:
      'In RflowZ, search OpenAlex, attach Library sources, and ground literature with RAG.',
    image: openAlexSourceLibrary,
    imageAlt: 'Step 3: Find OpenAlex sources in the RflowZ Library',
  },
  {
    title: 'Step 4',
    description:
      'In RflowZ, export a proposal in DOCX or PDF with citation checks (PPTX on higher plans when available).',
    image: reviewProposalExport,
    imageAlt: 'Step 4: Export your finished research proposal from RflowZ',
  },
]

export function Works() {
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
      id="how-it-works"
      aria-label="How RflowZ research proposal writing works"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute right-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
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
              How to write a research proposal with RflowZ
            </h2>
          </AnimateIn>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <TabList className="-mx-4 flex gap-x-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0 lg:col-span-5 lg:block lg:space-y-1 lg:whitespace-normal">
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
                        {feature.title}
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
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-slate-900/75 ring-1 ring-inset ring-white/20 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
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

export default Works
