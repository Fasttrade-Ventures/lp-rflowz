'use client'

import Link from 'next/link'

import {
  isAppRflowzUrl,
  useUpgradeAnnouncement,
} from '@/components/UpgradeAnnouncement'

export function FooterNavLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  const { openForUrl } = useUpgradeAnnouncement()

  if (isAppRflowzUrl(href)) {
    return (
      <button
        type="button"
        onClick={() => openForUrl(href)}
        className={className}
      >
        {children}
      </button>
    )
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
