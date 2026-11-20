import { useEffect, type ReactNode } from 'react'
import type { Locale } from '../types/content'
import { getContent } from '../data'
import useLocalStorage from '../hooks/useLocalStorage'
import LanguageContext from './LanguageContext'

interface Props {
  children: ReactNode
}

const isLocale = (value: string): value is Locale =>
  value === 'es' || value === 'en'

const LanguageProvider = ({ children }: Props) => {
  const [locale, setLocale] = useLocalStorage<Locale>(
    'portfolio.locale',
    'es',
    isLocale,
  )

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const content = getContent(locale)

  return (
    <LanguageContext.Provider value={{ locale, content, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider
