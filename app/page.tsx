import Header from "@/components/Header";
import FeaturesSection from "@/components/FeaturesSection";
import OffersSection from "@/components/OffersSection";

/**
 * Red background hero section;
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full min-h-fit bg-white px-6 lg:px-16">
        <FeaturesSection />
        <OffersSection />
      </main>
    </>
  );
}
