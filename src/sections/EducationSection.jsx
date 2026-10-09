import { GraduationCap } from 'lucide-react'
import { siteConfig } from '../data/siteConfig.js'
import { SectionHeading } from '../components/SectionHeading.jsx'

export function EducationSection() {
  return (
    <section className="content-section band-section" id="education" aria-labelledby="education-title">
      <div className="section-shell">
        <SectionHeading number="02" eyebrow="ACADEMIC BACKGROUND" title="Education" id="education-title" />
        <div className="timeline education-timeline">
          {siteConfig.education.map((item) => (
            <article className="timeline-item" key={item.degree}>
              <span className="timeline-marker"><GraduationCap size={17} /></span>
              <div className="timeline-content">
                <div className="timeline-title-row"><h3>{item.degree}</h3><span className="timeline-date">{item.years}</span></div>
                <p>{item.institution}</p>
                <span className="score-badge">{item.score}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}