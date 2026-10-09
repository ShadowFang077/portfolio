import { Braces, Code2, Cpu, Database, Fingerprint, Network } from 'lucide-react'
import { siteConfig } from '../data/siteConfig.js'
import { SectionHeading } from '../components/SectionHeading.jsx'

const skillIcons = [Code2, Braces, Network, Fingerprint, Cpu, Database]

export function SkillsSection() {
  return (
    <section className="content-section section-shell" id="skills" aria-labelledby="skills-title">
      <SectionHeading number="03" eyebrow="TECHNICAL TOOLKIT" title="Skills" id="skills-title" />
      <div className="skills-grid">
        {siteConfig.skills.map((group, index) => {
          const Icon = skillIcons[index]
          return <article className="skill-group" key={group.group}>
            <div className="skill-heading"><span className="skill-icon"><Icon size={17} /></span><h3>{group.group}</h3><span className="skill-count">{String(group.items.length).padStart(2, '0')}</span></div>
            <ul className="skill-tags">{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          </article>
        })}
      </div>
    </section>
  )
}