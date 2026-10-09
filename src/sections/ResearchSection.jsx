import { Award, FlaskConical } from 'lucide-react'
import { siteConfig } from '../data/siteConfig.js'
import { SectionHeading } from '../components/SectionHeading.jsx'

export function ResearchSection() {
  return (
    <section className="content-section band-section" id="research" aria-labelledby="research-title">
      <div className="section-shell">
        <SectionHeading number="06" eyebrow="RESEARCH & RECOGNITION" title="Research" id="research-title" />
        <div className="research-grid">
          {siteConfig.research.map((item, index) => {
            const Icon = index === 0 ? FlaskConical : Award
            return <article className="research-item" key={item.title}>
              <span className="research-icon"><Icon size={19} /></span>
              <div><span className="research-status">{item.status}</span><h3>{item.title}</h3><p>{item.detail}</p></div>
            </article>
          })}
        </div>
        <div className="certifications-block"><h3>Certifications</h3><div className="certification-list">{siteConfig.certifications.map((certification) => <span className="certification" key={certification}><Award size={15} />{certification}</span>)}</div></div>
      </div>
    </section>
  )
}