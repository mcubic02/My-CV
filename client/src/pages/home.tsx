import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import CVSidebar from '@/components/CVSidebar';
import MobileNav from '@/components/MobileNav';
import LanguageToggle from '@/components/LanguageToggle';
import DownloadButton from '@/components/DownloadButton';

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'hr'>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('cv-language') as 'en' | 'hr' | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageToggle = (lang: 'en' | 'hr') => {
    setLanguage(lang);
    localStorage.setItem('cv-language', lang);
  };

  return (
    <div className="min-h-screen" data-testid="page-home">
      <CVSidebar language={language} />
      <MobileNav language={language} />
      <LanguageToggle language={language} onToggle={handleLanguageToggle} />
      <DownloadButton language={language} />
      
      <main className="lg:ml-64">
        <HeroSection language={language} />
        <SkillsSection language={language} />
        <ExperienceSection language={language} />
        <EducationSection language={language} />
        <ContactSection language={language} />
      </main>
    </div>
  );
}
