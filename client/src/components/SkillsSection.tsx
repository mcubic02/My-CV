import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillsSectionProps {
  language: 'en' | 'hr';
}

export default function SkillsSection({ language }: SkillsSectionProps) {
  const content = {
    en: {
      title: 'Skills & Technologies',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools & Others',
      databases: 'Databases'
    },
    hr: {
      title: 'Vještine i Tehnologije',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Alati i Ostalo',
      databases: 'Baze podataka'
    }
  };

  const text = content[language];

  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React'],
    backend: ['Node.js', 'Express'],
    databases: ['PostgreSQL'],
    tools: ['Git', 'REST API']
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 px-6" data-testid="section-skills">
      <div className="w-full max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-12"
          data-testid="text-skills-title"
        >
          {text.title}
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants}>
            <Card className="hover-elevate h-full" data-testid="card-frontend">
              <CardHeader>
                <CardTitle className="text-xl">{text.frontend}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-sm"
                      data-testid={`badge-skill-${skill.toLowerCase()}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="hover-elevate h-full" data-testid="card-backend">
              <CardHeader>
                <CardTitle className="text-xl">{text.backend}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-sm"
                      data-testid={`badge-skill-${skill.toLowerCase().replace('.', '')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="hover-elevate h-full" data-testid="card-databases">
              <CardHeader>
                <CardTitle className="text-xl">{text.databases}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-sm"
                      data-testid={`badge-skill-${skill.toLowerCase()}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="hover-elevate h-full" data-testid="card-tools">
              <CardHeader>
                <CardTitle className="text-xl">{text.tools}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-sm"
                      data-testid={`badge-skill-${skill.toLowerCase().replace(' ', '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
