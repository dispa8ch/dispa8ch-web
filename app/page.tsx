import Header from "@/components/Header";
import FeaturesSection from "@/components/FeaturesSection";
import OffersSection from "@/components/OffersSection";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import GetStartedSection from "@/components/GetStartedSection";
import DemoVideoSection from "@/components/DemoVideoSection";
import TeamSection from "@/components/TeamSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import ContactUsButton from "@/components/buttons/ContactUsButton";
import OurBlogs from "@/components/OurBlogs";
export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <main>
        {/* <div className='custom-shape-divider-top-1705896470'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'>
            <path
              d='M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z'
              className='shape-fill'></path>
          </svg>
        </div> */}
        <FeaturesSection />
        <OffersSection />
        <DemoVideoSection />
        <TeamSection />
        <FaqSection />
        <GetStartedSection />
        <Waitlist />
      </main>
      <ContactUsButton />
      <OurBlogs />

      <Footer />
    </>
  );
}
