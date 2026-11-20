import useLanguage from '../hooks/useLanguage'
import useTheme from '../hooks/useTheme'

const ThemeToggle = () => {
  const { content } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  const handleToggleTheme = () => toggleTheme()

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      aria-label={content.ui.toggleTheme}
      aria-pressed={isDark}
      className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 text-lg transition hover:border-accent-text"
    >
      <span aria-hidden="true">{isDark ? '☾' : '☀'}</span>
    </button>
  )
}

export default ThemeToggle
