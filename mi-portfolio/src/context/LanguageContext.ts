import { createContext } from 'react'
import type { Content, Locale } from '../types/content'

export interface LanguageContextValue {
  locale: Locale
  content: Content
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export default LanguageContext
