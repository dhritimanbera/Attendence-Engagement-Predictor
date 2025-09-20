import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ChallengeSection from '@/components/ChallengeSection';
import SolutionSection from '@/components/SolutionSection';
import DashboardSection from '@/components/DashboardSection';
import SDGSection from '@/components/SDGSection';
import Footer from '@/components/Footer';
import LoginModal from '@/components/LoginModal';

const Index = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-background">
        <Header onLoginClick={() => setIsLoginModalOpen(true)} />
        <HeroSection />
        <ChallengeSection />
        <SolutionSection />
        <DashboardSection />
        <SDGSection />
        <Footer />
      </div>
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Index;
