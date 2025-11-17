import { useState } from 'react';
import { Menu, X, Home, Code, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavProps {
  language: 'en' | 'hr';
}

export default function MobileNav({ language }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xl" data-testid="text-mobile-name">Marija Ćubić</h1>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-menu-toggle"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="lg:hidden fixed inset-0 bg-background z-40 pt-20"
            data-testid="nav-mobile-menu"
          >
            <nav className="px-6 py-8">
              <div className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon;
                  
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className="w-full flex items-center gap-3 px-4 py-4 rounded-md hover-elevate text-left"
                      data-testid={`nav-mobile-item-${section.id}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium text-lg">{section.label}</span>
                    </button>
                  );
                })}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
