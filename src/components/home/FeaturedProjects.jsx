import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { FEATURED_PROJECT_KEYS, HOME_COPY, PROJECTS } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const featured = FEATURED_PROJECT_KEYS.map((key) => PROJECTS.find((p) => p.title === key)).filter(
  Boolean
)

export default function FeaturedProjects() {
  return (
    <section className="section-block" id="proyectos-destacados">
      <AnimateIn className="section-block__head">
        <p className="section-eyebrow">Portafolio</p>
        <h2 className="section-title">Casos recientes</h2>
        <p className="section-sub">{HOME_COPY.projects.sub}</p>
      </AnimateIn>

      <AnimateIn delay={0.08}>
        <div className="featured-swiper-wrap">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 6500, disableOnInteraction: true }}
            breakpoints={{
              640: { slidesPerView: 1.08, spaceBetween: 20 },
              900: { slidesPerView: 2, spaceBetween: 20 },
            }}
            className="featured-swiper"
          >
            {featured.map((p) => (
              <SwiperSlide key={p.title} className="featured-swiper__slide">
                <article className={`glass-card featured-card featured-card--${p.category}`}>
                  <div className="featured-card__main">
                    <span className="featured-card__period">{p.period}</span>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </div>
                  <footer className="featured-card__footer">
                    <div className="tag-row featured-card__tags">
                      {p.tags.slice(0, 4).map((t) => (
                        <span key={t} className="tag-pill">
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="featured-card__link"
                      >
                        Visitar sitio
                        <span className="featured-card__link-arrow" aria-hidden="true">
                          →
                        </span>
                      </a>
                    ) : (
                      <span className="featured-card__no-link">Sin enlace público</span>
                    )}
                  </footer>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="section-cta">
          <Link to="/proyectos" className="btn btn--primary">
            Catálogo completo
          </Link>
        </div>
      </AnimateIn>
    </section>
  )
}
