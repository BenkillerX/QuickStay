import HeroSection from '../../components/landing/HeroSection'
import PopularDestinations from '../../components/landing/PopularDestinations'
import VerifiedHomes from '../../components/landing/VerifiedHomes'
import WhyUs from '../../components/landing/WhyUs'
import ListOnQuickStay from '../../components/landing/ListOnQuickStay'
import CTA from '../../components/landing/CTA'

const LandingPage = () => {
  return (
    <>
      <HeroSection/>
      <PopularDestinations/>
      <VerifiedHomes/>
      <WhyUs/>
      <ListOnQuickStay/>
      <CTA/>
    </>
  )
}

export default LandingPage