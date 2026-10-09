import { useState } from 'react'
import { ArrowUpRight, Check, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { siteConfig } from '../data/siteConfig.js'
import { SectionHeading } from '../components/SectionHeading.jsx'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const openMail = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = encodeURIComponent(formData.get('subject'))
    const body = encodeURIComponent(`From: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\n${formData.get('message')}`)
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <section className="content-section section-shell contact-section" id="contact" aria-labelledby="contact-title">
      <SectionHeading number="07" eyebrow="GET IN TOUCH" title="Contact" id="contact-title" />
      <div className="contact-layout">
        <div className="contact-info">
          <p className="contact-lead">Have an opportunity or a security problem to solve? Send a note.</p>
          <a className="contact-link" href={`mailto:${siteConfig.email}`}><span className="contact-icon"><Mail size={18} /></span><span><small>EMAIL</small>{siteConfig.email}</span><ArrowUpRight size={15} /></a>
          <a className="contact-link" href={`tel:${siteConfig.phone.replaceAll(' ', '')}`}><span className="contact-icon"><Phone size={18} /></span><span><small>PHONE</small>{siteConfig.phone}</span><ArrowUpRight size={15} /></a>
          <div className="contact-link contact-location"><span className="contact-icon"><MapPin size={18} /></span><span><small>LOCATION</small>{siteConfig.location}</span></div>
          <div className="contact-socials"><a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer"><Github size={17} /> GitHub</a><a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={17} /> LinkedIn</a></div>
        </div>
        <form className="contact-form" onSubmit={openMail}>
          <div className="form-title"><span>MESSAGE / 01</span><span className="form-led" /></div>
          <label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" required />
          <label htmlFor="contact-email">Email</label><input id="contact-email" type="email" name="email" autoComplete="email" required />
          <label htmlFor="contact-subject">Subject</label><input id="contact-subject" name="subject" required />
          <label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="4" required />
          <button className="button button-primary form-submit" type="submit">{submitted ? <><Check size={16} /> Email draft opened</> : <>Open email draft <Send size={15} /></>}</button>
          <p className="form-hint">Your email app will open with the message ready to send.</p>
        </form>
      </div>
    </section>
  )
}