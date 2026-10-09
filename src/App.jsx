import { useEffect, useState } from 'react'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, ShieldCheck } from 'lucide-react'
import { siteConfig } from './data/siteConfig.js'
import { Navbar } from './components/Navbar.jsx'
import { HeroSection } from './sections/HeroSection.jsx'
import { AboutSection } from './sections/AboutSection.jsx'
import { EducationSection } from './sections/EducationSection.jsx'
import { SkillsSection } from './sections/SkillsSection.jsx'
import { ExperienceSection } from './sections/ExperienceSection.jsx'
import { ProjectsSection } from './sections/ProjectsSection.jsx'
import { ResearchSection } from './sections/ResearchSection.jsx'
import { ContactSection } from './sections/ContactSection.jsx'

export function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <ContactSection />
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <a className="footer-mark" href="#home" aria-label={`${siteConfig.name}, back to top`}><ShieldCheck size={18} /> SSM<span>.</span></a>
          <p>Cyber Security <span className="footer-dot">/</span> Digital Forensics</p>
          <div className="footer-socials">
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={17} /></a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            <a href={`mailto:${siteConfig.email}`} aria-label="Email"><Mail size={17} /></a>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} {siteConfig.name}</p>
      </footer>
      <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUpRight size={17} /></a>
    </>
  )
}