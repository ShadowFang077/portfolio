import { BriefcaseBusiness } from 'lucide-react'
import { siteConfig } from '../data/siteConfig.js'
import { SectionHeading } from '../components/SectionHeading.jsx'

export function ExperienceSection() {
  return (
    <section className="content-section band-section" id="experience" aria-labelledby="experience-title">
      <div className="section-shell">
        <SectionHeading number="04" eyebrow="FIELD EXPERIENCE" title="Experience" id="experience-title" />
        <div className="timeline experience-timeline">
          {siteConfig.experience.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.organization}`}>
              <span className="timeline-marker"><BriefcaseBusiness size={16} /></span>
              <div className="timeline-content experience-card">
                <div className="timeline-title-row"><div><h3>{item.role}</h3><p className="organization">{item.organization}</p></div>{item.period && <span className="timeline-date">{item.period}</span>}</div>
                <ul className="experience-list">{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                {item.note && <p className="confidential-note"><span className="confidential-marker" />{item.note}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}