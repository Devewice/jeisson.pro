import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function FeaturedSwiper({ featured }) {
  return (
    <>
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
    </>
  )
}
