import AIGeneratorSection from '../components/home/aigenerator';
import AiTestSection from '../components/home/aitest';
import HeroSection from '../components/home/hero';
import ScanningSection from '../components/home/scan';
import Footer from '../components/ui/footer';
import Navbar from '../components/ui/navbar';

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AiTestSection />
      <ScanningSection />
      <AIGeneratorSection />
      <Footer />
    </>
  );
};

export default Homepage;
