import { gsap } from '@/lib/gsap'
import { motion } from '@/lib/motion'

type RevealTarget = Element | Element[] | HTMLCollection | NodeListOf<Element>

function toElements(target: RevealTarget): Element[] {
  return gsap.utils.toArray(target)
}

function isDue(el: Element) {
  const rect = el.getBoundingClientRect()
  return rect.top < window.innerHeight * 0.92 || rect.bottom <= 0
}

export function scrollReveal(
  target: RevealTarget | undefined | null,
  trigger: Element | null,
  extras?: { stagger?: number; delay?: number },
): (() => void) | undefined {
  if (!target || !trigger || typeof window === 'undefined') {
    return
  }

  const elements = toElements(target)
  if (!elements.length) {
    return
  }

  const observed = new Set<Element>([trigger, ...elements])
  gsap.set(elements, { opacity: 0, y: 16 })

  let played = false
  let io: IntersectionObserver | undefined

  function restore() {
    gsap.set(elements, { clearProps: 'opacity,visibility,transform' })
  }

  function play() {
    if (played) {
      return
    }
    played = true
    io?.disconnect()
    window.removeEventListener('scroll', check)
    window.removeEventListener('resize', check)
    window.removeEventListener('rflowz-hash-scroll', check)
    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: motion.reveal,
      delay: extras?.delay ?? 0,
      stagger: extras?.stagger,
      ease: motion.ease,
      overwrite: 'auto',
      onComplete: restore,
    })
  }

  function check() {
    if ([...observed].some(isDue)) {
      play()
    }
  }

  io = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        play()
      }
    },
    { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0 },
  )
  observed.forEach((el) => io?.observe(el))

  window.addEventListener('scroll', check, { passive: true })
  window.addEventListener('resize', check)
  window.addEventListener('rflowz-hash-scroll', check)
  check()

  return () => {
    io?.disconnect()
    window.removeEventListener('scroll', check)
    window.removeEventListener('resize', check)
    window.removeEventListener('rflowz-hash-scroll', check)
    if (!played) {
      restore()
    }
  }
}
