import Header from "@/components/Header";
import FeaturesSection from "@/components/FeaturesSection";
import OffersSection from "@/components/OffersSection";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import GetStartedSection from "@/components/GetStartedSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className='w-full min-h-fit bg-white'>
        <FeaturesSection />
        <OffersSection />
        <GetStartedSection />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
