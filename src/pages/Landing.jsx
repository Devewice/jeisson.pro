import HeroBanner from '../components/home/HeroBanner.jsx'
import TechMarquee from '../components/home/TechMarquee.jsx'
import ExploreNav from '../components/home/ExploreNav.jsx'
import HomeStats from '../components/home/HomeStats.jsx'
import AboutTeaser from '../components/home/AboutTeaser.jsx'
import ServicesPreview from '../components/home/ServicesPreview.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import CapabilitiesStrip from '../components/home/CapabilitiesStrip.jsx'
import WhyBuildSection from '../components/home/WhyBuildSection.jsx'
import ProcessSection from '../components/home/ProcessSection.jsx'
import CtaBand from '../components/home/CtaBand.jsx'
import '../styles/home.css'

export default function Landing() {
  return (
    <div className="home-page">
      <HeroBanner />
      <TechMarquee />
      <div className="home-page__body">
        <ExploreNav />
        <HomeStats />
        <AboutTeaser />
        <ServicesPreview />
        <FeaturedProjects />
        <WhyBuildSection />
        <CapabilitiesStrip />
        <ProcessSection />
        <CtaBand />
      </div>
    </div>
  )
}
