import { act, render, screen } from '@testing-library/react'
import Reveal from './Reveal'
import Section from './Section'
import { IntersectionObserverMock } from '../test/setup'

describe('Reveal', () => {
  it('starts hidden and becomes visible when intersecting', () => {
    render(
      <Reveal>
        <p>hola</p>
      </Reveal>,
    )
    const wrapper = screen.getByText('hola').parentElement!
    expect(wrapper).toHaveClass('opacity-0')
    act(() => IntersectionObserverMock.instances[0].trigger(true))
    expect(wrapper).toHaveClass('opacity-100')
  })

  it('is visible immediately with prefers-reduced-motion', () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: true,
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }))
    render(
      <Reveal>
        <p>hola</p>
      </Reveal>,
    )
    expect(screen.getByText('hola').parentElement).not.toHaveClass('opacity-0')
  })
})

describe('Section', () => {
  it('exposes a labelled region', () => {
    render(
      <Section id="about" title="Sobre mí">
        <p>x</p>
      </Section>,
    )
    expect(screen.getByRole('region', { name: /Sobre mí/ })).toBeInTheDocument()
  })
})
