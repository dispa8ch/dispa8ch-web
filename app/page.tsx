import Header from "@/components/Header";
import FeaturesSection from "@/components/FeaturesSection";
import OffersSection from "@/components/OffersSection";
import Waitlist from "@/components/Waitlist";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full min-h-fit bg-white">
        <FeaturesSection />
        <OffersSection />
        <Waitlist />
      </main>
    </>
  );
}
