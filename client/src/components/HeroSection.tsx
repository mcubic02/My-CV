import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface HeroSectionProps {
  language: 'en' | 'hr';
}

export default function HeroSection({ language }: HeroSectionProps) {
  const content = {
    en: {
      greeting: 'Hello, I\'m',
      role: 'Full-stack Developer',
      location: 'Split, Croatia',
      description: 'Passionate about building modern web applications with React, Node.js, and PostgreSQL. Currently focused on creating seamless user experiences and scalable backend solutions.'
    },
    hr: {
      greeting: 'Pozdrav, ja sam',
      role: 'Full-stack Developer',
      location: 'Split, Hrvatska',
      description: 'Strastvena u razvoju modernih web aplikacija s React, Node.js i PostgreSQL. Trenutno fokusirana na stvaranje besprijekornih korisničkih iskustava i skalabilnih backend rješenja.'
    }
  };

  const text = content[language];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-16 px-6" data-testid="section-hero">
      <div className="w-full max-w-6xl">
        <div className="grid padding-top-6 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-lg mb-2" data-testid="text-greeting">{text.greeting}</p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-3" data-testid="text-name">
              Marija Ćubić
            </h1>
            <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-4" data-testid="text-role">
              {text.role}
            </h2>
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <MapPin className="w-4 h-4" />
              <span data-testid="text-location">{text.location}</span>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed" data-testid="text-description">
              {text.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center">
              <div className="space-y-4 text-center">
                <div className="text-6xl font-bold text-primary" data-testid="text-tech-react">
                  React.js
                </div>
                <div className="text-4xl font-semibold text-chart-2" data-testid="text-tech-node">
                  Node.js
                </div>
                <div className="text-4xl font-semibold text-chart-1" data-testid="text-tech-postgres">
                  PostgreSQL
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
