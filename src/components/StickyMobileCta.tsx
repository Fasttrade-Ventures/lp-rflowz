'use client'

import { useEffect, useRef, useState } from 'react'

import { Button } from '@/components/Button'
import { ANALYTICS_CONSENT_KEY } from '@/lib/consent'
import { cta } from '@/lib/cta'

export function StickyMobileCta() {
  const barRef = useRef<HTMLDivElement>(null)
  const [obscuresFocus, setObscuresFocus] = useState(false)
  const [consentPending, setConsentPending] = useState(true)

  useEffect(() => {
    function syncConsent() {
      const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY)
      setConsentPending(stored !== 'granted' && stored !== 'denied')
    }

    syncConsent()
    window.addEventListener('rflowz-analytics-consent', syncConsent)

    function onFocusIn(event: FocusEvent) {
      const target = event.target
      const bar = barRef.current
      if (!(target instanceof HTMLElement) || !bar) {
        setObscuresFocus(false)
        return
      }

      if (bar.contains(target)) {
        setObscuresFocus(false)
        return
      }

      const inFooter = Boolean(document.querySelector('footer')?.contains(target))
      const focusRect = target.getBoundingClientRect()
      const barRect = bar.getBoundingClientRect()
      const overlaps =
        focusRect.bottom > barRect.top - 8 && focusRect.top < barRect.bottom

      setObscuresFocus(inFooter || overlaps)
    }

    document.addEventListener('focusin', onFocusIn)
    return () => {
      window.removeEventListener('rflowz-analytics-consent', syncConsent)
      document.removeEventListener('focusin', onFocusIn)
    }
  }, [])

  return (
    <div
      ref={barRef}
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] [@media(max-height:32rem)]:hidden lg:hidden"
      hidden={obscuresFocus || consentPending}
    >
      <div className="pointer-events-auto mx-auto flex max-w-lg items-center gap-3 rounded-2xl bg-slate-900/95 px-3 py-2 shadow-lg ring-1 ring-white/10 backdrop-blur">
        <p className="min-w-0 flex-1 text-xs leading-4 text-slate-200">
          {cta.trustLine}
        </p>
        <Button
          href={cta.registerHref}
          color="blue"
          className="shrink-0 px-3"
          data-cta="sticky"
          data-cta-action="register"
          aria-label={cta.primaryLabel}
        >
          {cta.primaryShort}
        </Button>
      </div>
    </div>
  )
}
