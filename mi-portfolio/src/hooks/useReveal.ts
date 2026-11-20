import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const useReveal = <T extends HTMLElement>() => {
  const [visible, setVisible] = useState<boolean>(prefersReducedMotion)
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (visible || !el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  return { ref, visible }
}

export default useReveal
