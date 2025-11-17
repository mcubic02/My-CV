import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap } from 'lucide-react';

interface EducationSectionProps {
  language: 'en' | 'hr';
}

export default function EducationSection({ language }: EducationSectionProps) {
  const content = {
    en: {
      title: 'Education',
      current: 'Current',
      education: [
        {
          period: '2023 - Present',
          institution: 'FESB',
          degree: 'Master\'s Degree in Computer Science',
          major: 'Currently pursuing',
          current: true
        },
        {
          period: '2020 - 2023',
          institution: 'FESB',
          degree: 'Bachelor\'s Degree in Computer Science',
          major: 'Computer Science Engineer'
        },
        {
          period: '2016 - 2020',
          institution: 'Dr. Mate Ujević High School',
          degree: 'High School Diploma',
          major: 'Imotski'
        }
      ],
      courses: 'React & Express Course',
      coursesDescription: 'Completed courses organized by Digitalna Dalmacija, each lasting 4 months.'
    },
    hr: {
      title: 'Obrazovanje',
      current: 'Trenutno',
      education: [
        {
          period: '2023 - Danas',
          institution: 'FESB',
          degree: 'Diplomski studij računarstva',
          major: 'Trenutno studiram',
          current: true
        },
        {
          period: '2020 - 2023',
          institution: 'FESB',
          degree: 'Preddiplomski studij računarstva',
          major: 'Inženjer računarstva'
        },
        {
          period: '2016 - 2020',
          institution: 'Gimnazija Dr. Mate Ujević',
          degree: 'Srednjoškolsko obrazovanje',
          major: 'Imotski'
        }
      ],
      courses: 'Tečaj React & Express',
      coursesDescription: 'Završeni tečajevi organizirani od strane Digitalna Dalmacija, svaki u trajanju od 4 mjeseca.'
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="py-24 px-6" data-testid="section-education">
      <div className="w-full max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-12"
          data-testid="text-education-title"
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
          {text.education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="hover-elevate" data-testid={`card-education-${index}`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-md">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <CardTitle className="text-xl" data-testid={`text-institution-${index}`}>
                          {edu.institution}
                        </CardTitle>
                        {edu.current && (
                          <Badge variant="default" className="text-xs" data-testid="badge-current-education">
                            {text.current}
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-base mb-2" data-testid={`text-degree-${index}`}>
                        {edu.degree}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground" data-testid={`text-major-${index}`}>
                        {edu.major} • {edu.period}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}

          <motion.div variants={itemVariants}>
            <Card className="hover-elevate bg-primary/5" data-testid="card-courses">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1" data-testid="text-courses-title">
                      {text.courses}
                    </CardTitle>
                    <p className="text-sm text-foreground/80" data-testid="text-courses-description">
                      {text.coursesDescription}
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
