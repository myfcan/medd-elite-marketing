import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ConsequencesSection from '@/components/ConsequencesSection';
import TransformationSection from '@/components/TransformationSection';
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
        <ConsequencesSection />
        <TransformationSection />
        <MethodologySection />
        <CaseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;