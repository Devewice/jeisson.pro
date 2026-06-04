import PageHero from '../components/PageHero.jsx'
import { ABOUT, SITE } from '../data/site.js'

export default function About() {
  return (
    <div className="page-content">
      <PageHero eyebrow="Sobre mí" title={SITE.name} subtitle={SITE.tagline} />
      <div className="prose">
        {ABOUT.intro.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      <div className="stat-grid">
        {ABOUT.highlights.map(({ label, detail }) => (
          <div key={label} className="stat-card">
            <strong>{label}</strong>
            <span>{detail}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
