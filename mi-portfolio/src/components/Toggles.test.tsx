import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import renderWithProviders from '../test/renderWithProviders'

describe('toggles', () => {
  it('theme toggle switches the html class', async () => {
    const user = userEvent.setup()
    renderWithProviders(<ThemeToggle />)
    expect(document.documentElement).toHaveClass('dark')
    await user.click(screen.getByRole('button', { name: 'Cambiar tema' }))
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('language toggle switches locale and labels', async () => {
    const user = userEvent.setup()
    renderWithProviders(<LanguageToggle />)
    await user.click(screen.getByRole('button', { name: 'Cambiar idioma' }))
    expect(document.documentElement.lang).toBe('en')
    expect(screen.getByRole('button', { name: 'Change language' })).toHaveTextContent('ES')
  })
})
