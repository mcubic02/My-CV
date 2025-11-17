import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface LanguageToggleProps {
  language: 'en' | 'hr';
  onToggle: (lang: 'en' | 'hr') => void;
}

export default function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 left-6 lg:bottom-6 lg:right-6 lg:left-auto z-50 bg-card/95 backdrop-blur-sm rounded-full border border-card-border p-1 shadow-sm"
      data-testid="container-language-toggle"
    >
      <div className="flex gap-1">
        <Button
          size="sm"
          variant={language === 'hr' ? 'default' : 'ghost'}
          onClick={() => onToggle('hr')}
          className="rounded-full px-4 no-default-active-elevate"
          data-testid="button-language-hr"
        >
          HR
        </Button>
        <Button
          size="sm"
          variant={language === 'en' ? 'default' : 'ghost'}
          onClick={() => onToggle('en')}
          className="rounded-full px-4 no-default-active-elevate"
          data-testid="button-language-en"
        >
          EN
        </Button>
      </div>
    </motion.div>
  );
}
