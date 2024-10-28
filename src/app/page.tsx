import CreateExp from "@/components/CreateExp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LuxurySlider from "@/components/HeroSlider";
import Mapsection from "@/components/Map";
import Navigation from "@/components/Navigation";
import Restaurant from "@/components/Resotrant";
import Tickets from "@/components/Tickets";
import VideoSection from "@/components/VedioSection";

export default function Home() {
  return (
    <div className="mx-w-[1440px] mx-auto">
      <Header />
      <main>
        <LuxurySlider />

        <VideoSection />
        <Tickets />

        <Restaurant />
        <CreateExp />
        <Mapsection />
      </main>
      <Footer />
    </div>
  );
}
