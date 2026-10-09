export function SectionHeading({ number, eyebrow, title, id }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <p className="section-eyebrow">{eyebrow}</p>
        <h2 id={id}>{title}<span>.</span></h2>
      </div>
      <span className="heading-rule" aria-hidden="true" />
    </div>
  )
}