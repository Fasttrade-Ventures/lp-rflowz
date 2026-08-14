'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { ScrollTrigger } from '@/lib/gsap'

function scrollToHash() {
  const id = decodeURIComponent(window.location.hash.replace(/^#/, ''))
  if (!id) {
    return
  }

  const el = document.getElementById(id)
  if (!(el instanceof HTMLElement)) {
    return
  }

  const html = document.documentElement
  const previousBehavior = html.style.scrollBehavior
  html.style.scrollBehavior = 'auto'

  const header = document.querySelector('header')
  const offset =
    header instanceof HTMLElement ? header.getBoundingClientRect().height + 8 : 96
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo(0, Math.max(0, top))

  html.style.scrollBehavior = previousBehavior
  window.dispatchEvent(new Event('rflowz-hash-scroll'))
  ScrollTrigger.refresh()

  if (id === 'main-content') {
    el.focus({ preventScroll: true })
  }
}

export function HashScroll() {
  const pathname = usePathname()

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const target = event.target
      if (!(target instanceof Element)) {
        return
      }

      const anchor = target.closest('a')
      if (!(anchor instanceof HTMLAnchorElement)) {
        return
      }
      if (anchor.target && anchor.target !== '_self') {
        return
      }

      let url: URL
      try {
        url = new URL(anchor.href)
      } catch {
        return
      }

      if (url.origin !== window.location.origin || !url.hash) {
        return
      }
      if (url.pathname !== window.location.pathname) {
        return
      }

      event.preventDefault()
      if (window.location.hash !== url.hash) {
        window.history.pushState(null, '', `${url.pathname}${url.search}${url.hash}`)
      }
      scrollToHash()
    }

    function onHashChange() {
      scrollToHash()
    }

    function onPopState() {
      scrollToHash()
    }

    document.addEventListener('click', onClick, true)
    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('popstate', onPopState)

    const frame = window.requestAnimationFrame(() => scrollToHash())
    const retry = window.setTimeout(() => scrollToHash(), 400)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(retry)
      document.removeEventListener('click', onClick, true)
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('popstate', onPopState)
    }
  }, [pathname])

  return null
}
