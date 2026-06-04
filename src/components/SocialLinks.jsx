import { PROFESSIONAL_LINKS, SOCIAL_LINKS } from '../data/socialLinks.js'
import './SocialLinks.css'

export default function SocialLinks({ variant = 'footer' }) {
  return (
    <div className={`social-links social-links--${variant}`}>
      <div className="social-links-group">
        {PROFESSIONAL_LINKS.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        ))}
      </div>
      <div className="social-links-group social-links-group--social">
        {SOCIAL_LINKS.map(({ label, href, handle = '@jeissondav1' }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={handle}>
            {label}
            <span className="social-handle">{handle}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
