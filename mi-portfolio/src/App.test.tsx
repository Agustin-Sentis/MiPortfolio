import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import renderWithProviders from './test/renderWithProviders'
import { getContent } from './data'

describe('App', () => {
  it('renders one main landmark and one h1', () => {
    renderWithProviders(<App />)
    expect(screen.getAllByRole('main')).toHaveLength(1)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('renders the sections that have content', () => {
    renderWithProviders(<App />)
    for (const name of ['Sobre mí', 'Proyectos', 'Skills', 'Educación', 'Contacto']) {
      expect(screen.getByRole('region', { name: new RegExp(name) })).toBeInTheDocument()
    }
  })

  it('syncs the document title and description with the language', async () => {
    const user = userEvent.setup()
    document.head.insertAdjacentHTML('beforeend', '<meta name="description" content="">')
    renderWithProviders(<App />)
    expect(document.title).toBe(getContent('es').meta.title)
    await act(() => user.click(screen.getByRole('button', { name: 'Cambiar idioma' })))
    expect(document.title).toBe(getContent('en').meta.title)
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      getContent('en').meta.description,
    )
  })
})
