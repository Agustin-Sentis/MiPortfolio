import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from './Navbar'
import renderWithProviders from '../test/renderWithProviders'
import { IntersectionObserverMock } from '../test/setup'

describe('Navbar', () => {
  it('renders anchor links with translated labels and a skip link', () => {
    renderWithProviders(<Navbar />)
    expect(screen.getByRole('link', { name: 'Sobre mí' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Contacto' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'Saltar al contenido' })).toHaveAttribute('href', '#main')
  })

  it('marks the active section with aria-current', () => {
    document.body.insertAdjacentHTML('beforeend', '<div id="about"></div>')
    renderWithProviders(<Navbar />)
    act(() => IntersectionObserverMock.instances[0].trigger(true))
    expect(screen.getByRole('link', { name: 'Sobre mí' })).toHaveAttribute('aria-current', 'true')
    document.getElementById('about')?.remove()
  })

  it('toggles the mobile menu and closes it on link click', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Navbar />)
    const button = screen.getByRole('button', { name: 'Abrir menú' })
    expect(button).toHaveAttribute('aria-expanded', 'false')
    await user.click(button)
    expect(screen.getByRole('button', { name: 'Cerrar menú' })).toHaveAttribute('aria-expanded', 'true')
    await user.click(screen.getByRole('link', { name: 'Skills' }))
    expect(screen.getByRole('button', { name: 'Abrir menú' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('keeps the menu open when the language changes', async () => {
    const user = userEvent.setup()
    renderWithProviders(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Abrir menú' }))
    await user.click(screen.getByRole('button', { name: 'Cambiar idioma' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
  })

  it('hides links to sections without content', () => {
    renderWithProviders(<Navbar />)
    expect(screen.getByRole('link', { name: 'Proyectos' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Experiencia' })).not.toBeInTheDocument()
  })
})
