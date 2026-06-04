import HeroBanner from '../components/home/HeroBanner.jsx'
import TechMarquee from '../components/home/TechMarquee.jsx'
import AnchorCase from '../components/AnchorCase.jsx'
import AudienceChips from '../components/home/AudienceChips.jsx'
import AboutWhySection from '../components/home/AboutWhySection.jsx'
import ServicesPreview from '../components/home/ServicesPreview.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import ProcessSection from '../components/home/ProcessSection.jsx'
import CtaMid from '../components/home/CtaMid.jsx'
import HomeFaq from '../components/home/HomeFaq.jsx'
import CtaBand from '../components/home/CtaBand.jsx'
import '../styles/home.css'

export default function Landing() {
  return (
    <div className="home-page">
      <HeroBanner />
      <TechMarquee />
      <div className="home-page__body">
        <AnchorCase />
        <AudienceChips />
        <AboutWhySection />
        <ServicesPreview />
        <FeaturedProjects />
        <ProcessSection />
        <CtaMid />
        <HomeFaq />
        <CtaBand />
      </div>
    </div>
  )
}
