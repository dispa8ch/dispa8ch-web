import DemoVideoSection from "@/components/DemoVideoSection";
import FaqSection from "@/components/FaqSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import GetStartedSection from "@/components/GetStartedSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MobileNav from "@/components/MobileNav";
import OffersSection from "@/components/OffersSection";
import TeamSection from "@/components/TeamSection";
import Waitlist from "@/components/Waitlist";
import ContactUsButton from "@/components/buttons/ContactUsButton";

export default function Home() {
  return (
    <>
      <Header />
      <MobileNav />
      <HeroSection />
      <main className='w-full min-h-fit bg-white'>
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
      <Footer />
    </>
  );
}
