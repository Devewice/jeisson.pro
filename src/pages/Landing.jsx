import HeroBanner from '../components/home/HeroBanner.jsx'
import TechMarquee from '../components/home/TechMarquee.jsx'
import HomeStats from '../components/home/HomeStats.jsx'
import AboutTeaser from '../components/home/AboutTeaser.jsx'
import ServicesPreview from '../components/home/ServicesPreview.jsx'
import StackBento from '../components/home/StackBento.jsx'
import CapabilityChart from '../components/home/CapabilityChart.jsx'
import DeliveryMetrics from '../components/home/DeliveryMetrics.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import ProcessSection from '../components/home/ProcessSection.jsx'
import CtaBand from '../components/home/CtaBand.jsx'
import SocialLinks from '../components/SocialLinks.jsx'
import '../styles/home.css'

export default function Landing() {
  return (
    <div className="home-page">
      <HeroBanner />
      <TechMarquee />
      <div id="contenido" className="home-page__body home-page__body--wide">
        <HomeStats />
        <AboutTeaser />
        <ServicesPreview />
        <StackBento />
        <CapabilityChart />
        <DeliveryMetrics />
        <FeaturedProjects />
        <ProcessSection />
        <CtaBand />
        <section className="home-section home-section--social">
          <SocialLinks variant="footer" />
        </section>
      </div>
    </div>
  )
}
