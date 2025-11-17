import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceSectionProps {
  language: 'en' | 'hr';
}

interface Experience {
  period: string;
  title: string;
  description: string;
  current?: boolean;
}

export default function ExperienceSection({ language }: ExperienceSectionProps) {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  const content = {
    en: {
      title: 'Professional Experience',
      current: 'Current',
      experiences: [
        {
          period: 'January 2025 - Present',
          title: 'Full-stack Developer',
          description: 'Development and maintenance of JavaScript applications (React, Node.js). Participating in team projects.',
          current: true
        },
        {
          period: 'March 2024 - February 2025',
          title: 'Sales Assistant',
          description: 'Customer communication at A1 store. Selling current offers.'
        },
        {
          period: 'Summer 2023',
          title: 'Receptionist',
          description: 'Hotel reception duties. Administrative tasks and guest communication.'
        },
        {
          period: '2020 - 2023',
          title: 'Cashier',
          description: 'Cashiering and assisting customers.'
        }
      ] as Experience[]
    },
    hr: {
      title: 'Radno Iskustvo',
      current: 'Trenutno',
      experiences: [
        {
          period: 'Siječanj 2025 - Danas',
          title: 'Full-stack Developer',
          description: 'Razvoj i održavanje JavaScript aplikacija (React, Node.js). Sudjelovanje u timskim projektima.',
          current: true
        },
        {
          period: 'Ožujak 2024 - Veljača 2025',
          title: 'Prodavač',
          description: 'Komunikacija s kupcima u A1 trgovini. Prodaja trenutnih ponuda.'
        },
        {
          period: 'Ljeto 2023',
          title: 'Recepcionar',
          description: 'Poslovi hotelske recepcije. Administrativni poslovi i komunikacija s gostima.'
        },
        {
          period: '2020 - 2023',
          title: 'Blagajnik',
          description: 'Rad na blagajni i pomoć kupcima.'
        }
      ] as Experience[]
    }
  };

  const text = content[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-24 px-6 bg-muted/30" data-testid="section-experience">
      <div className="w-full max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-12"
          data-testid="text-experience-title"
        >
          {text.title}
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {text.experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className="hover-elevate cursor-pointer transition-all duration-300"
                onClick={() => setExpandedId(expandedId === index ? null : index)}
                data-testid={`card-experience-${index}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <CardTitle className="text-xl" data-testid={`text-job-title-${index}`}>
                          {exp.title}
                        </CardTitle>
                        {exp.current && (
                          <Badge variant="default" className="text-xs" data-testid="badge-current">
                            {text.current}
                          </Badge>
                        )}
                      </div>
                      <CardDescription data-testid={`text-period-${index}`}>
                        {exp.period}
                      </CardDescription>
                    </div>
                    <button 
                      className="text-muted-foreground hover-elevate p-1 rounded-md"
                      data-testid={`button-expand-${index}`}
                    >
                      {expandedId === index ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </CardHeader>
                
                {expandedId === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent>
                      <p className="text-foreground/80" data-testid={`text-description-${index}`}>
                        {exp.description}
                      </p>
                    </CardContent>
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
