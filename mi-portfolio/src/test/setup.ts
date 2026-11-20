import '@testing-library/jest-dom/vitest'
import { afterEach, beforeEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

class IntersectionObserverMock {
  static instances: IntersectionObserverMock[] = []
  callback: IntersectionObserverCallback
  elements = new Set<Element>()

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    IntersectionObserverMock.instances.push(this)
  }

  observe = (el: Element) => {
    this.elements.add(el)
  }
  unobserve = (el: Element) => {
    this.elements.delete(el)
  }
  disconnect = () => {
    this.elements.clear()
  }
  takeRecords = () => []

  trigger(isIntersecting: boolean) {
    const entries = [...this.elements].map(
      (target) => ({ target, isIntersecting }) as IntersectionObserverEntry,
    )
    this.callback(entries, this as unknown as IntersectionObserver)
  }
}

beforeEach(() => {
  IntersectionObserverMock.instances = []
  vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
  window.scrollTo = vi.fn()
})

afterEach(() => {
  cleanup()
  localStorage.clear()
  document.documentElement.className = ''
  document.documentElement.lang = 'es'
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

export { IntersectionObserverMock }
