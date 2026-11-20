import { act, renderHook } from '@testing-library/react'
import type { ReactNode } from 'react'
import ThemeProvider from './ThemeProvider'
import useTheme from '../hooks/useTheme'

const wrapper = ({ children }: { children: ReactNode }) => (
  <ThemeProvider>{children}</ThemeProvider>
)

describe('ThemeProvider', () => {
  it('defaults to dark and sets the html class', () => {
    const { result } = renderHook(() => useTheme(), { wrapper })
    expect(result.current.theme).toBe('dark')
    expect(document.documentElement).toHaveClass('dark')
  })

  it('toggles to light, persists and removes the class', () => {
    const { result } = renderHook(() => useTheme(), { wrapper })
    act(() => result.current.toggleTheme())
    expect(result.current.theme).toBe('light')
    expect(localStorage.getItem('portfolio.theme')).toBe('light')
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('falls back to dark with a corrupt stored value', () => {
    localStorage.setItem('portfolio.theme', 'banana')
    const { result } = renderHook(() => useTheme(), { wrapper })
    expect(result.current.theme).toBe('dark')
  })
})
