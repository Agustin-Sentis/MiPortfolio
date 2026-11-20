import { act, render, renderHook } from '@testing-library/react'
import useActiveSection from './useActiveSection'
import { IntersectionObserverMock } from '../test/setup'

describe('useActiveSection', () => {
  it('returns null when there are no matching sections', () => {
    const ids = ['nope']
    const { result } = renderHook(() => useActiveSection(ids))
    expect(result.current).toBeNull()
  })

  it('returns the intersecting section id', () => {
    render(
      <>
        <div id="a" />
        <div id="b" />
      </>,
    )
    const ids = ['a', 'b']
    const { result } = renderHook(() => useActiveSection(ids))
    act(() => IntersectionObserverMock.instances[0].trigger(true))
    expect(result.current).toBe('a')
  })
})
