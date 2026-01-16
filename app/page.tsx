import Hero from "@/components/home/Hero";
import ReservationSection from "@/components/home/ReservationSection";
import ServicesSection from "@/components/home/ServicesSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <ReservationSection />
      <ServicesSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}