import useLanguage from '../hooks/useLanguage'

const LanguageToggle = () => {
  const { locale, content, setLocale } = useLanguage()

  const handleToggleLanguage = () => setLocale(locale === 'es' ? 'en' : 'es')

  const target = locale === 'es' ? 'EN' : 'ES'

  return (
    <button
      type="button"
      onClick={handleToggleLanguage}
      aria-label={content.ui.toggleLanguage}
      className="h-9 rounded-full border border-border bg-card/60 px-3 font-mono text-xs font-medium transition hover:border-accent-text"
    >
      {target}
    </button>
  )
}

export default LanguageToggle
