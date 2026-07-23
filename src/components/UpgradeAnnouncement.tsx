'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { siteConfig } from '@/lib/site'

const BANNER_STORAGE_KEY = 'rflowz-upgrade-banner-dismissed'

const upgradeHighlights = [
  {
    title: 'Faster performance',
    description: 'Work on proposals without interruption.',
  },
  {
    title: 'Smarter AI tools',
    description: 'Move from idea to submission more efficiently.',
  },
  {
    title: 'Better for every plan',
    description: 'Including our Free plan to get started.',
  },
]

export function isAppRflowzUrl(href: string | undefined): boolean {
  if (!href || typeof href !== 'string') return false
  try {
    const url = new URL(href, siteConfig.url)
    return url.hostname === 'app.rflowz.com'
  } catch {
    return href.includes('app.rflowz.com')
  }
}

type UpgradeAnnouncementContextValue = {
  openForUrl: (href: string) => void
}

const UpgradeAnnouncementContext =
  createContext<UpgradeAnnouncementContextValue | null>(null)

export function useUpgradeAnnouncement() {
  const context = useContext(UpgradeAnnouncementContext)
  if (!context) {
    throw new Error(
      'useUpgradeAnnouncement must be used within UpgradeAnnouncementProvider',
    )
  }
  return context
}

function UpgradeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      />
    </svg>
  )
}

function HighlightCards() {
  return (
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {upgradeHighlights.map((item) => (
        <li
          key={item.title}
          className="rounded-2xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200/80"
        >
          <p className="text-sm font-semibold text-slate-900">{item.title}</p>
          <p className="mt-1 text-sm leading-5 text-slate-600">
            {item.description}
          </p>
        </li>
      ))}
    </ul>
  )
}

function MaintenanceAnnouncementContent() {
  return (
    <div className="space-y-5">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-amber-950">
        <p className="text-base font-semibold">
          app.rflowz.com is temporarily not working
        </p>
        <p className="mt-1 text-sm leading-6">
          Login and sign up are unavailable while we migrate the system. Please
          check back soon.
        </p>
      </div>

      <p className="text-sm leading-6 text-slate-600">
        We&apos;re upgrading RflowZ for students, academics, and research teams.
        You can keep browsing this site for plans and FAQs in the meantime.
      </p>

      <HighlightCards />
    </div>
  )
}

function StandardAnnouncementContent() {
  return (
    <div className="space-y-5">
      <p className="text-sm leading-6 text-slate-600">
        RflowZ is going through an important platform upgrade designed to deliver
        a faster, more reliable, and more powerful research proposal
        experience.
      </p>

      <HighlightCards />

      <p className="text-sm leading-6 text-slate-500">
        When you continue, we&apos;ll take you to the RflowZ app so you can sign
        in or create your account.
      </p>
    </div>
  )
}

export function UpgradeAnnouncementProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [pendingUrl, setPendingUrl] = useState<string | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const isHomepage = pathname === '/'

  useEffect(() => {
    if (!isHomepage) {
      setShowBanner(false)
      return
    }

    const dismissed = sessionStorage.getItem(BANNER_STORAGE_KEY)
    if (!dismissed) {
      setShowBanner(true)
    }
  }, [isHomepage])

  const openForUrl = useCallback((href: string) => {
    setPendingUrl(href)
  }, [])

  const closeModal = useCallback(() => {
    setPendingUrl(null)
  }, [])

  const continueToApp = useCallback(() => {
    if (!pendingUrl || siteConfig.appMaintenanceMode) return
    window.location.href = pendingUrl
  }, [pendingUrl])

  const dismissBanner = useCallback(() => {
    sessionStorage.setItem(BANNER_STORAGE_KEY, 'true')
    setShowBanner(false)
  }, [])

  const value = useMemo(() => ({ openForUrl }), [openForUrl])

  return (
    <UpgradeAnnouncementContext.Provider value={value}>
      {showBanner ? (
        <div className="relative z-[60] border-b border-blue-200 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="mx-auto flex max-w-7xl items-start gap-4 px-4 py-4 sm:items-center sm:px-6 lg:px-8">
            <UpgradeIcon className="mt-0.5 h-6 w-6 flex-none text-blue-100 sm:mt-0" />
            <div className="flex-1">
              <p className="font-display text-sm font-semibold text-white sm:text-base">
                {siteConfig.appMaintenanceMode
                  ? 'app.rflowz.com is temporarily not working'
                  : "We're upgrading RflowZ to serve you better"}
              </p>
              <p className="mt-1 text-sm leading-6 text-blue-100">
                {siteConfig.appMaintenanceMode
                  ? "We're migrating the system. Login and sign up are unavailable for now — please check back soon."
                  : "We're investing in faster performance, smarter AI tools, and a smoother research workflow."}
              </p>
            </div>
            <button
              type="button"
              onClick={dismissBanner}
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/10"
            >
              Dismiss
            </button>
          </div>
        </div>
      ) : null}

      {children}

      <Dialog
        open={pendingUrl !== null}
        onClose={closeModal}
        className="relative z-[70]"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-slate-900/70 transition data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <DialogPanel
              transition
              className={clsx(
                'relative w-full rounded-3xl bg-white p-6 shadow-2xl ring-1 ring-slate-900/10 sm:p-8',
                'max-w-[min(100%,56rem)]',
                'transition data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in',
              )}
            >
              <div className="flex items-start gap-4 border-b border-slate-100 pb-5">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <UpgradeIcon className="h-6 w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <DialogTitle className="font-display text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                    We&apos;re upgrading to serve you better
                  </DialogTitle>
                  <p className="mt-1 text-sm font-medium text-blue-600">
                    {siteConfig.appMaintenanceMode
                      ? 'The RflowZ app is temporarily unavailable'
                      : 'A better RflowZ experience is on the way'}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                {siteConfig.appMaintenanceMode ? (
                  <MaintenanceAnnouncementContent />
                ) : (
                  <StandardAnnouncementContent />
                )}
              </div>

              <div className="mt-6 flex justify-end border-t border-slate-100 pt-5">
                {siteConfig.appMaintenanceMode ? (
                  <button
                    type="button"
                    onClick={closeModal}
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                  >
                    Okay, got it
                  </button>
                ) : (
                  <div className="flex w-full flex-col-reverse gap-3 sm:w-auto sm:flex-row">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50"
                    >
                      Stay on homepage
                    </button>
                    <button
                      type="button"
                      onClick={continueToApp}
                      className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
                    >
                      Continue to RflowZ app
                    </button>
                  </div>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </UpgradeAnnouncementContext.Provider>
  )
}
