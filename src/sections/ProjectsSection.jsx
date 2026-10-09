import { ArrowUpRight, Github, FolderGit2 } from 'lucide-react'
import { projects } from '../data/projects.js'
import { SectionHeading } from '../components/SectionHeading.jsx'

export function ProjectsSection() {
  return (
    <section className="content-section section-shell" id="projects" aria-labelledby="projects-title">
      <SectionHeading number="05" eyebrow="SELECTED WORK" title="Projects" id="projects-title" />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className={`project-card${project.status === 'Placeholder' ? ' project-placeholder' : ''}`} key={`${project.title}-${index}`}>
            <div className="project-top"><span className="project-icon"><FolderGit2 size={19} /></span><span className="project-index">PROJECT / 0{index + 1}</span></div>
            <span className={`project-status${project.status === 'Placeholder' ? ' is-placeholder' : ''}`}>{project.status}</span>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
            <div className="project-links">
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub <Github size={15} aria-hidden="true" /></a>}
              {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo <ArrowUpRight size={15} aria-hidden="true" /></a>}
              {!project.github && !project.demo && <span className="project-edit-note">EDIT IN SITE CONFIG <ArrowUpRight size={14} /></span>}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}