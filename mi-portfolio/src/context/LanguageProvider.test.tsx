import { act, renderHook } from '@testing-library/react'
import type { ReactNode } from 'react'
import LanguageProvider from './LanguageProvider'
import useLanguage from '../hooks/useLanguage'
import { getContent } from '../data'

const wrapper = ({ children }: { children: ReactNode }) => (
  <LanguageProvider>{children}</LanguageProvider>
)

describe('LanguageProvider', () => {
  it('defaults to es', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper })
    expect(result.current.locale).toBe('es')
    expect(result.current.content.hero.name).toBe(getContent('es').hero.name)
  })

  it('switches to en, persists and updates html lang', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper })
    act(() => result.current.setLocale('en'))
    expect(result.current.content.nav.about).toBe(getContent('en').nav.about)
    expect(localStorage.getItem('portfolio.locale')).toBe('en')
    expect(document.documentElement.lang).toBe('en')
  })

  it('throws outside the provider', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => renderHook(() => useLanguage())).toThrow()
  })
})
