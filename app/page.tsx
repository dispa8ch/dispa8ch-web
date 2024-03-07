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
