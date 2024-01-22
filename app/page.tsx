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

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <main className='w-full min-h-fit bg-white'>
        <FeaturesSection />
        <OffersSection />
        <DemoVideoSection />
        <TeamSection />
        <FaqSection />
        <GetStartedSection />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
