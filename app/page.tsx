import { ContactUsButton } from "@/components/buttons";
import { Header } from "@/components/dispa8ch-ui";
import FaqSection from "./_components/FaqSection";
import FeaturesSection from "./_components/FeaturesSection";
import Footer from "./_components/Footer";
import GetStartedSection from "./_components/GetStartedSection";
import HeroSection from "./_components/HeroSection";
import OffersSection from "./_components/OffersSection";
import OurBlogs from "./_components/OurBlogs";
import TeamSection from "./_components/TeamSection";
import Waitlist from "./_components/Waitlist";

export default function Home() {
  return (
    <section className="relative w-screen min-h-screen">
      <Header />
      <HeroSection />
      <main>
        <FeaturesSection />
        <OffersSection />
        {/* <TeamSection /> */}
        <FaqSection />
        <GetStartedSection />
        <Waitlist />
      </main>
      <ContactUsButton />
      {/* <OurBlogs showHeader /> */}
      <Footer />
    </section>
  );
}
