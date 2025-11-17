import { motion } from 'framer-motion';
import { Home, Code, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CVSidebarProps {
  language: 'en' | 'hr';
}

export default function CVSidebar({ language }: CVSidebarProps) {
  const [activeSection, setActiveSection] = useState('home');

  const content = {
    en: {
      sections: [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'skills', label: 'Skills', icon: Code },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'education', label: 'Education', icon: GraduationCap },
        { id: 'contact', label: 'Contact', icon: Mail }
      ]
    },
    hr: {
      sections: [
        { id: 'home', label: 'Početna', icon: Home },
        { id: 'skills', label: 'Vještine', icon: Code },
        { id: 'experience', label: 'Iskustvo', icon: Briefcase },
        { id: 'education', label: 'Obrazovanje', icon: GraduationCap },
        { id: 'contact', label: 'Kontakt', icon: Mail }
      ]
    }
  };

  const sections = content[language].sections;

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex-col justify-center p-8 z-50"
      data-testid="nav-sidebar"
    >
      <div className="space-y-2">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all hover-elevate ${
                isActive ? 'bg-sidebar-accent text-sidebar-accent-foreground' : 'text-sidebar-foreground'
              }`}
              data-testid={`nav-item-${section.id}`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{section.label}</span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
}
