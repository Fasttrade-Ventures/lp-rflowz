import { type Metadata } from 'next'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { StructuredData } from '@/components/StructuredData'
import { Testimonials } from '@/components/Testimonials'
import { WhoItsFor } from '@/components/WhoItsFor'
import Works from '@/components/Works'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: siteConfig.tagline,
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <WhoItsFor />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Works />
        <Pricing />
        <Testimonials />
        <Faqs />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
