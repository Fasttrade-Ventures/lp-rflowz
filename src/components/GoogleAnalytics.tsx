'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/Button'
import {
  shouldTrackAnchor,
  track,
  trackAnchorClick,
} from '@/lib/analytics'
import { ANALYTICS_CONSENT_KEY } from '@/lib/consent'
import { siteConfig } from '@/lib/site'

type Consent = 'granted' | 'denied' | 'unknown'

function AnalyticsRuntime({ enabled }: { enabled: boolean }) {
  const pathname = usePathname()

  useEffect(() => {
    if (!enabled) {
      return
    }

    function onClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) {
        return
      }
      const anchor = target.closest('a')
      if (!(anchor instanceof HTMLAnchorElement) || !shouldTrackAnchor(anchor)) {
        return
      }
      trackAnchorClick(anchor)
    }

    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [enabled])

  useEffect(() => {
    if (!enabled) {
      return
    }

    const path = pathname || '/'
    let cancelled = false

    function send() {
      if (cancelled || typeof window.gtag !== 'function') {
        return false
      }
      track('page_view', {
        page_path: path,
        page_title: document.title,
      })
      return true
    }

    if (send()) {
      return
    }

    const interval = window.setInterval(() => {
      if (send()) {
        window.clearInterval(interval)
      }
    }, 100)
    const timeout = window.setTimeout(() => window.clearInterval(interval), 5000)

    return () => {
      cancelled = true
      window.clearInterval(interval)
      window.clearTimeout(timeout)
    }
  }, [enabled, pathname])

  return null
}

export function GoogleAnalytics() {
  const [consent, setConsent] = useState<Consent>('unknown')
  const [ready, setReady] = useState(false)
  const gaId = siteConfig.googleAnalyticsId

  useEffect(() => {
    const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY)
    setConsent(stored === 'granted' || stored === 'denied' ? stored : 'unknown')
    setReady(true)
  }, [])

  function choose(value: 'granted' | 'denied') {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, value)
    window.dispatchEvent(new Event('rflowz-analytics-consent'))
    setConsent(value)
  }

  return (
    <>
      {consent === 'granted' ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', { send_page_view: false });
            `}
          </Script>
          <AnalyticsRuntime enabled />
        </>
      ) : null}

      {ready && consent === 'unknown' ? (
        <div
          role="region"
          aria-labelledby="analytics-consent-title"
          aria-describedby="analytics-consent-desc"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white p-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-lg"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p
                id="analytics-consent-title"
                className="text-sm font-semibold text-slate-900"
              >
                Analytics cookies
              </p>
              <p
                id="analytics-consent-desc"
                className="mt-1 text-sm leading-6 text-slate-600"
              >
                We use Google Analytics only if you accept. It helps us
                understand visits to this marketing site. See{' '}
                <a
                  href="/terms-and-policies"
                  className="font-medium text-blue-700 underline underline-offset-2 hover:text-blue-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Terms &amp; policies
                </a>
                . You can decline and still use the site.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button
                type="button"
                variant="outline"
                color="slate"
                onClick={() => choose('denied')}
              >
                Decline
              </Button>
              <Button type="button" color="blue" onClick={() => choose('granted')}>
                Accept analytics
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
