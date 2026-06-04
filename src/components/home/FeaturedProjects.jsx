import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { FEATURED_PROJECT_KEYS, PROJECTS } from '../../data/site.js'
import AnimateIn from '../AnimateIn.jsx'
import Section from '../Section.jsx'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const featured = FEATURED_PROJECT_KEYS.map((key) => PROJECTS.find((p) => p.title === key)).filter(
  Boolean
)

export default function FeaturedProjects() {
  return (
    <Section
      id="proyectos-destacados"
      index="08"
      eyebrow="Portafolio"
      title="Proyectos que hablan por sí solos"
      subtitle="Una muestra de producto digital, editorial y educación. Explora el catálogo completo."
      variant="alt"
    >
      <AnimateIn delay={0.05}>
        <div className="featured-swiper-wrap">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: true }}
            breakpoints={{
              640: { slidesPerView: 1.15 },
              900: { slidesPerView: 2 },
              1200: { slidesPerView: 2.2 },
            }}
            className="featured-swiper"
          >
            {featured.map((p) => (
              <SwiperSlide key={p.title}>
                <article className={`featured-card featured-card--${p.category}`}>
                  <span className="featured-card__period">{p.period}</span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="tag-row">
                    {p.tags.slice(0, 4).map((t) => (
                      <span key={t} className="tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="featured-card__link">
                      Visitar →
                    </a>
                  )}
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="home-section__cta">
          <Link to="/proyectos" className="btn btn--primary">
            Ver todos los proyectos
          </Link>
        </div>
      </AnimateIn>
    </Section>
  )
}
