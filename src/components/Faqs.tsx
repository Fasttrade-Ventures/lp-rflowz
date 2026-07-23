import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is RflowZ, and how does it help with research proposals?',
      answer:
        'RflowZ is a web application designed to simplify the process of writing research proposals. It offers AI-powered writing assistance, customizable templates, and seamless citation management by integrating with Mendeley, helping you focus more on your research and less on formatting or tedious tasks.',
    },
    {
      question: 'How does the Mendeley citation import work?',
      answer:
        'You can import your references from Mendeley directly into RflowZ with just a few clicks. Simply connect your Mendeley account, and RflowZ will pull in your citations, making it easier to organize and insert them into your proposals.',
    },
  ],
  [
    {
      question: 'Is there a free trial available?',
      answer:
        'Absolutely! All our plans come with a 7-day free trial no credit card required. This allows you to explore the platform and its core features before deciding on a paid plan.',
    },
    {
      question: 'What happens after my free trial ends?',
      answer:
        "Once your free trial ends, you can choose to subscribe to any of our paid plans. If you do not upgrade, your account will revert to a limited free version where you can still access your existing work but won't be able to create new proposals or use premium features.",
    },
  ],
  [
    {
      question: 'How secure is my research data on RflowZ?',
      answer:
        'We take data security seriously. Your research data, proposals, and citations are stored using robust security measures. We never share your information with third parties without your consent, ensuring that your work remains private and protected.',
    },
    {
      question: 'Can I cancel or change my subscription plan at any time?',
      answer:
        'Yes! You can cancel or change your subscription at any time. Simply head to your account settings, and you&apos;ll be able to manage your subscription preferences. If you cancel, your access to premium features will last until the end of your billing cycle.',
    },
  ],
]

export function Faqs() {
  return (
    <section
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
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Got Questions? We&apos;ve Got Answers.
          </h2>
          {/* <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p> */}
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
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
