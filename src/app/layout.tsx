import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  openGraph: {
    title: 'RflowZ',
    images: [
      {
        url: 'https://app.rflowz.com/images/rflowz-og-image.png',
        width: 1200,
        height: 630,
        alt: 'RFlowZ-SS',
      },
    ],
    description:
      'Streamline your proposal writing with smart AI tools and seamless citation management from Mendeley.',
  },
  title: {
    template: 'RflowZ',
    default: 'RflowZ',
  },
  description:
    'Streamline your proposal writing with smart AI tools and seamless citation management from Mendeley.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
