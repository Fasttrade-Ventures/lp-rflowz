import React from 'react'
import { type Metadata } from 'next'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms and Policies',
  description: `Read the terms, privacy policies, and subscription details for ${siteConfig.name} research proposal software.`,
  alternates: {
    canonical: '/terms-and-policies',
  },
}

export default function TermsAndPolicies() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {siteConfig.name} Terms and Policies
          </h1>
          <div className="mt-10 space-y-8 text-base leading-7 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                1. Introduction
              </h2>
              <p className="mt-4">
                Welcome to {siteConfig.name} ({siteConfig.legalName})! These Terms
                and Policies govern the use of the {siteConfig.name} platform and
                outline your rights and responsibilities as a user. By accessing
                or using the platform, you agree to comply with these terms.
                Please read them carefully.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                2. User Eligibility
              </h2>
              <p className="mt-4">
                {siteConfig.name} is intended for use by researchers, students, academic
                institutions, and professionals engaged in research activities.
                Users must be at least 18 years old or have permission from a
                guardian or institution to use the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                3. Account Registration
              </h2>
              <ul className="mt-4 list-disc pl-5">
                <li>
                  Users must provide accurate and complete information during
                  the registration process.
                </li>
                <li>
                  Each account is for personal or institutional use only and
                  must not be shared with unauthorized users.
                </li>
                <li>
                  Users are responsible for maintaining the confidentiality of
                  their account credentials.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                4. Subscription and Pricing Plans
              </h2>
              <p className="mt-4">
                {siteConfig.name} offers various subscription plans to cater to
                different user needs. Pricing details are as follows:
              </p>
              <ul className="mt-4 list-disc pl-5">
                <li>Free Plan: $0/month (auto-assigned on registration)</li>
                <li>
                  Starter Plan: $3.99/month or $3.29/month (billed annually)
                </li>
                <li>
                  Standard Plan: $5.99/month or $4.99/month (billed annually)
                </li>
                <li>
                  Professional Plan: $9.99/month or $7.99/month (billed
                  annually)
                </li>
              </ul>
              <p className="mt-4">Features of each plan:</p>
              <h3 className="mt-4 text-xl font-semibold">Free Plan</h3>
              <ul className="mt-2 list-disc pl-5">
                <li>Up to 2 proposal generations per month</li>
                <li>Limited AI writing assistance</li>
                <li>Watermarked DOCX and PDF export</li>
                <li>1 basic template</li>
              </ul>
              <h3 className="mt-4 text-xl font-semibold">Starter Plan</h3>
              <ul className="mt-2 list-disc pl-5">
                <li>Access to basic proposal templates</li>
                <li>AI-guided research questions formulation</li>
                <li>Up to 10 proposal generations per month</li>
                <li>Email support</li>
                <li>Help center access</li>
              </ul>
              <h3 className="mt-4 text-xl font-semibold">Standard Plan</h3>
              <ul className="mt-2 list-disc pl-5">
                <li>Access to all proposal templates</li>
                <li>AI-driven support for literature review structuring</li>
                <li>Up to 30 proposal generations per month</li>
                <li>PowerPoint (PPTX) export</li>
                <li>Email support</li>
                <li>Priority help center access</li>
                <li>Priority proposal generation queue</li>
              </ul>
              <h3 className="mt-4 text-xl font-semibold">Professional Plan</h3>
              <ul className="mt-2 list-disc pl-5">
                <li>Unlimited proposal generations per month</li>
                <li>
                  Advanced AI-guided proposal structure and referencing tools
                </li>
                <li>PowerPoint (PPTX) export</li>
                <li>Premium email and chat support</li>
                <li>Dedicated support for research methodologies</li>
                <li>Professional-grade proposal formatting tools</li>
              </ul>
              <p className="mt-4">
                All payments are non-refundable except as required by law. Paid
                plans include a 5-day free trial. Users can choose between
                monthly and annual billing cycles, with annual billing offering
                a discount.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                5. License and Access
              </h2>
              <p className="mt-4">
                {siteConfig.name} grants users a limited, non-exclusive,
                non-transferable license to use the platform according to their
                chosen plan. The license is subject to compliance with these
                terms and is intended solely for research and educational
                purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                6. Prohibited Activities
              </h2>
              <p className="mt-4">Users agree not to:</p>
              <ul className="mt-4 list-disc pl-5">
                <li>
                  Use the platform for unlawful purposes or in violation of
                  applicable regulations.
                </li>
                <li>
                  Misuse, reverse-engineer, or distribute any part of the
                  software without written permission.
                </li>
                <li>
                  Upload or distribute any content that infringes on
                  intellectual property rights or is harmful, offensive, or
                  misleading.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                7. Data Privacy and Security
              </h2>
              <ul className="mt-4 list-disc pl-5">
                <li>
                  {siteConfig.name} values your privacy and takes reasonable steps to
                  protect your personal data.
                </li>
                <li>
                  The platform may collect data necessary to provide services,
                  such as usage statistics and feedback.
                </li>
                <li>
                  User data will not be shared with third parties without
                  explicit consent, except as required by law.
                </li>
              </ul>
              <p className="mt-4">
                For more details, please review our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                8. No Fake Citations Policy
              </h2>
              <p className="mt-4">
                {siteConfig.name} is committed to maintaining the integrity of academic
                research. By integrating directly with Mendeley, we ensure that
                all citations and references are genuine and traceable. Users
                must not manually alter citations to misrepresent sources or
                create fake references.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                9. Limitation of Liability
              </h2>
              <p className="mt-4">
                {siteConfig.name} and its affiliates are not liable for any indirect,
                incidental, or consequential damages arising from the use of the
                platform. Users agree to use the platform at their own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                10. Intellectual Property
              </h2>
              <p className="mt-4">
                All content, features, and functionality of the {siteConfig.name}
                platform are owned by Dr. Zack Zairul and its affiliates. Users
                must not copy, modify, or distribute any part of the platform
                without express written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                11. Cancellation and Termination
              </h2>
              <ul className="mt-4 list-disc pl-5">
                <li>
                  Users may cancel their subscription at any time. Access to the
                  platform will be revoked at the end of the current billing
                  cycle.
                </li>
                <li>
                  {siteConfig.name} reserves the right to terminate accounts for
                  violation of these terms without prior notice.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                12. Amendments to Terms
              </h2>
              <p className="mt-4">
                {siteConfig.name} may update these Terms and Policies periodically.
                Users will be notified of significant changes via email or
                platform announcements. Continued use of the platform after such
                changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">
                13. Contact Information
              </h2>
              <p className="mt-4">
                For any questions or concerns regarding these terms, please
                contact our support team at{' '}
                <a
                  href="mailto:support@rflowz.com"
                  className="text-blue-600 hover:underline"
                >
                  support@rflowz.com
                </a>
                .
              </p>
            </section>

            <p className="mt-8 italic">
              By using {siteConfig.name}, you acknowledge that you have read,
              understood, and agree to these Terms and Policies.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
