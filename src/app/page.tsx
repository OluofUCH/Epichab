
import Header from "@/app/components/header";
import HeroSection from "@/app/components/heroSection";
import Aboutus from "@/app/components/about";
import Gell from "@/app/components/bell";
import Vision from "@/app/components/vision";
import Footer from "@/app/components/footer";
import Goals from "@/app/components/goals";
import StatisticsSection from "@/app/components/number";
import Action from "@/app/components/action";
import CommunitiesSection from "@/app/components/community";
import Move from "@/app/components/move";
import PartnersSection from "@/app/components/patner";
import Volunteer from "@/app/components/volunteer";
export default function Home() {
  return (
    <main className="flex w-full  backdrop-blur-2xl min-h-screen flex-col  p-0">
      <Header />
      <HeroSection />
      <Aboutus />
      <Gell />
      <Vision />
      <Goals />
      <StatisticsSection />
  <PartnersSection />
      <CommunitiesSection />
      <Move />
    
      <Volunteer />
      <Footer />
    
    </main>
  );
}