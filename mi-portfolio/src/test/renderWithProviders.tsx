import { render } from '@testing-library/react'
import type { ReactElement } from 'react'
import LanguageProvider from '../context/LanguageProvider'
import ThemeProvider from '../context/ThemeProvider'

const renderWithProviders = (ui: ReactElement) =>
  render(
    <LanguageProvider>
      <ThemeProvider>{ui}</ThemeProvider>
    </LanguageProvider>,
  )

export default renderWithProviders
