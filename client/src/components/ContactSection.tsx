import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactSectionProps {
  language: 'en' | 'hr';
}

export default function ContactSection({ language }: ContactSectionProps) {
  const content = {
    en: {
      title: 'Get in Touch',
      subtitle: 'Feel free to reach out for opportunities or just to say hello!',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      languages: 'Languages',
      languagesList: 'Croatian (Native), English (Fluent)'
    },
    hr: {
      title: 'Kontaktirajte me',
      subtitle: 'Slobodno se javite za prilike ili samo da se pozdravimo!',
      email: 'Email',
      phone: 'Telefon',
      location: 'Lokacija',
      languages: 'Jezici',
      languagesList: 'Hrvatski (Maternji), Engleski (Tečno)'
    }
  };

  const text = content[language];

  return (
    <section id="contact" className="py-24 px-6 bg-muted/30" data-testid="section-contact">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-semibold mb-3" data-testid="text-contact-title">
            {text.title}
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-contact-subtitle">
            {text.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="hover-elevate" data-testid="card-contact">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <a 
                  href="mailto:marijacubic73@gmail.com"
                  className="flex items-start gap-4 hover-elevate p-4 rounded-md transition-all"
                  data-testid="link-email"
                >
                  <div className="bg-primary/10 p-3 rounded-md">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{text.email}</p>
                    <p className="text-sm text-muted-foreground">marijacubic73@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="tel:+385957268615"
                  className="flex items-start gap-4 hover-elevate p-4 rounded-md transition-all"
                  data-testid="link-phone"
                >
                  <div className="bg-primary/10 p-3 rounded-md">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">{text.phone}</p>
                    <p className="text-sm text-muted-foreground">+385 95 726 8615</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium mb-1" data-testid="text-location-label">{text.location}</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-location-value">
                      {language === 'en' ? 'Split, Croatia' : 'Split, Hrvatska'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium mb-1" data-testid="text-languages-label">{text.languages}</p>
                    <p className="text-sm text-muted-foreground" data-testid="text-languages-value">
                      {text.languagesList}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
