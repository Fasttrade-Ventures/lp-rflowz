import { type Metadata } from 'next'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HomeExperience } from '@/components/motion/HomeExperience'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { StickyMobileCta } from '@/components/StickyMobileCta'
import { StructuredData } from '@/components/StructuredData'
import { Testimonials } from '@/components/Testimonials'
import { WhoItsFor } from '@/components/WhoItsFor'
import Works from '@/components/Works'
import { buildPageMetadata, seoPages } from '@/lib/seo-pages'

export const metadata: Metadata = buildPageMetadata(seoPages.home)

export default function Home() {
  return (
    <>
      <StructuredData />
      <HomeExperience />
      <Header cinematic />
      <main
        id="main-content"
        tabIndex={-1}
        className="pb-[calc(5.5rem+env(safe-area-inset-bottom))] lg:pb-0 outline-none"
      >
        <Hero />
        <WhoItsFor />
        <Works />
        <SecondaryFeatures />
        <PrimaryFeatures />
        <Testimonials />
        <Pricing />
        <Faqs />
        <CallToAction />
      </main>
      <Footer finale />
      <StickyMobileCta />
    </>
  )
}
