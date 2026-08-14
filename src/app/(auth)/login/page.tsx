import { redirect } from 'next/navigation'

import { siteConfig } from '@/lib/site'

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function Login() {
  redirect(`${siteConfig.appUrl}/login`)
}
