import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Services from "@/components/Services";
import TrackSection from "@/components/TrackSection";

export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <AboutUs />
      <TrackSection />
    </main>
  );
}
