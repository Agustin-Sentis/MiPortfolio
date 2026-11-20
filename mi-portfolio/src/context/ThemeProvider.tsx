import { useEffect, type ReactNode } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import ThemeContext, { type Theme } from './ThemeContext'

interface Props {
  children: ReactNode
}

const isTheme = (value: string): value is Theme =>
  value === 'dark' || value === 'light'

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useLocalStorage<Theme>(
    'portfolio.theme',
    'dark',
    isTheme,
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
