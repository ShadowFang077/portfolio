import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, MapPin } from 'lucide-react'
import { siteConfig } from '../data/siteConfig.js'

function useRotatingRole(roles) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(roles[0])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return undefined
    let roleIndex = 0
    let characterCount = roles[0].length
    let deleting = true
    let timeout

    const tick = () => {
      const role = roles[roleIndex]
      characterCount += deleting ? -1 : 1
      setText(role.slice(0, characterCount))
      if (characterCount <= 0) {
        deleting = false
        roleIndex = (roleIndex + 1) % roles.length
        setIndex(roleIndex)
      } else if (characterCount >= roles[roleIndex].length) {
        deleting = true
        timeout = window.setTimeout(tick, 1700)
        return
      }
      timeout = window.setTimeout(tick, deleting ? 38 : 72)
    }

    timeout = window.setTimeout(tick, 1700)
    return () => window.clearTimeout(timeout)
  }, [roles])

  return { text, index }
}

export function HeroSection() {
  const { text, index } = useRotatingRole(siteConfig.roles)
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`

  return (
    <section className="hero section-shell" id="home" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> CYBER SECURITY <span className="eyebrow-slash">/</span> DIGITAL FORENSICS</p>
          <h1 id="hero-title">Siva Shankar<br /><span className="name-accent">Malladi</span></h1>
          <p className="hero-role" aria-label={siteConfig.roles[index]}><span className="terminal-prompt">&gt;</span> {text}<span className="typing-caret" aria-hidden="true" /></p>
          <p className="hero-summary">{siteConfig.tagline}</p>
          <p className="hero-location"><MapPin size={15} aria-hidden="true" /> {siteConfig.location}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={resumeUrl} download><Download size={16} /> Download Resume</a>
            <a className="button button-outline" href="#contact">Contact Me <ArrowDown size={15} /></a>
          </div>
          <div className="hero-socials" aria-label="Social profiles">
            <span className="social-label">FIND ME ON</span>
            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)"><Github size={18} /></a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)"><Linkedin size={18} /></a>
          </div>
        </div>
        <div className="hero-console" aria-label="Introduction terminal">
          <div className="console-bar"><span className="console-led" /><span>session://profile</span><span className="console-code">[01]</span></div>
          <div className="console-body">
            <p><span className="console-muted">$</span> whoami</p>
            <p className="console-output">{siteConfig.name}</p>
            <p><span className="console-muted">$</span> focus --areas</p>
            <div className="console-tags"><span>network analysis</span><span>vulnerability assessment</span><span>digital evidence</span></div>
            <p className="console-location"><span className="console-muted">$</span> location</p>
            <p className="console-output">{siteConfig.location}</p>
            <p className="console-ready"><span className="status-dot" /> open to entry-level opportunities<span className="console-cursor" /></p>
          </div>
          <div className="console-footer"><span>PROFILE: PUBLIC</span><span>ENCRYPTION: ACTIVE</span></div>
          <span className="console-index">0x01</span>
        </div>
      </div>
      <a className="hero-scroll" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
      <a className="hero-corner-link" href="#projects">VIEW SELECTED WORK <ArrowUpRight size={13} /></a>
    </section>
  )
}