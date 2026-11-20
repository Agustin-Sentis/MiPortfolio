import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const css = readFileSync(resolve(__dirname, 'index.css'), 'utf-8')

describe('design tokens', () => {
  it('defines the dark palette', () => {
    expect(css).toContain('--bg: #370038')
    expect(css).toContain('--accent: #2567BB')
    expect(css).toContain('--accent-text: #7FAEEF')
  })

  it('defines the light palette base and class-based dark variant', () => {
    expect(css).toContain('--bg: #EAF4F3')
    expect(css).toContain('@custom-variant dark')
  })

  it('exposes tokens to Tailwind', () => {
    expect(css).toContain('--color-bg: var(--bg)')
    expect(css).toContain('--font-display')
  })
})
