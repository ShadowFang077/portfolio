import { Activity, BrainCircuit, Layers3, Sparkles } from 'lucide-react'
import { siteConfig } from '../data/siteConfig.js'
import { SectionHeading } from '../components/SectionHeading.jsx'

const highlightIcons = [BrainCircuit, Activity, Layers3, Sparkles]

export function AboutSection() {
  return (
    <section className="content-section section-shell" id="about" aria-labelledby="about-title">
      <SectionHeading number="01" eyebrow="PROFILE" title="About me" id="about-title" />
      <div className="about-layout">
        <p className="about-copy">{siteConfig.intro}</p>
        <div className="highlight-grid">
          {siteConfig.highlights.map((highlight, index) => {
            const Icon = highlightIcons[index]
            return <article className="highlight-item" key={highlight}><span className="highlight-icon"><Icon size={18} /></span><p>{highlight}</p><span className="highlight-number">0{index + 1}</span></article>
          })}
        </div>
      </div>
    </section>
  )
}