import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import TransformationSection from '@/components/TransformationSection';
import AboutDoctorSection from '@/components/AboutDoctorSection';
import MethodologySection from '@/components/MethodologySection';
import CaseSection from '@/components/CaseSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <TransformationSection />
        <AboutDoctorSection />
        <MethodologySection />
        <CaseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;