import DemoVideoSection from "./_components/DemoVideoSection";
import FaqSection from "./_components/FaqSection";
import FeaturesSection from "./_components/FeaturesSection";
import Footer from "./_components/Footer";
import GetStartedSection from "./_components/GetStartedSection";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import OffersSection from "./_components/OffersSection";
import OurBlogs from "./_components/OurBlogs";
import TeamSection from "./_components/TeamSection";
import Waitlist from "./_components/Waitlist";
import { ContactUsButton } from "@/components/buttons";

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
        </div>*/ }

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
