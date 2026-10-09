import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'

const navItems = [
  ['about', 'About'],
  ['education', 'Education'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['research', 'Research'],
  ['contact', 'Contact'],
]

export function Navbar({ theme, onToggleTheme }) {
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="topbar">
      <nav className="nav-wrap" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Siva Shankar Malladi, home">
          <span className="brand-icon">S<span>.</span></span>
          <span className="brand-name">SIVA SHANKAR <b>MALLADI</b></span>
        </a>
        <div className={`nav-links${menuOpen ? ' is-open' : ''}`} id="navigation-links">
          {navItems.map(([id, label]) => (
            <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={closeMenu} aria-current={active === id ? 'location' : undefined}>{label}</a>
          ))}
        </div>
        <div className="nav-actions">
          <button className="icon-button theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="icon-button menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="navigation-links" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  )
}