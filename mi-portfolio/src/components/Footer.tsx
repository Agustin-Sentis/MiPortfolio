import useLanguage from '../hooks/useLanguage'

const Footer = () => {
  const { content } = useLanguage()

  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 text-center text-sm text-muted">
      © {year} {content.hero.name}. {content.footer.rights}
    </footer>
  )
}

export default Footer
