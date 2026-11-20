import { act, renderHook } from '@testing-library/react'
import useLocalStorage from './useLocalStorage'

type Mode = 'a' | 'b'
const isMode = (v: string): v is Mode => v === 'a' || v === 'b'

describe('useLocalStorage', () => {
  it('reads a valid stored value', () => {
    localStorage.setItem('k', 'b')
    const { result } = renderHook(() => useLocalStorage<Mode>('k', 'a', isMode))
    expect(result.current[0]).toBe('b')
  })

  it('falls back to initial when the stored value is corrupt', () => {
    localStorage.setItem('k', 'banana')
    const { result } = renderHook(() => useLocalStorage<Mode>('k', 'a', isMode))
    expect(result.current[0]).toBe('a')
  })

  it('does not break when localStorage throws', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('denied')
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('denied')
    })
    const { result } = renderHook(() => useLocalStorage<Mode>('k', 'a', isMode))
    expect(result.current[0]).toBe('a')
    act(() => result.current[1]('b'))
    expect(result.current[0]).toBe('b')
  })

  it('persists new values', () => {
    const { result } = renderHook(() => useLocalStorage<Mode>('k', 'a', isMode))
    act(() => result.current[1]('b'))
    expect(localStorage.getItem('k')).toBe('b')
  })
})
