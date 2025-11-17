import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

interface DownloadButtonProps {
  language: 'en' | 'hr';
}

export default function DownloadButton({ language }: DownloadButtonProps) {
  const content = {
    en: 'Download CV',
    hr: 'Preuzmi CV'
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/attached_assets/CV - Marija Ćubić_1763404946988.pdf';
    link.download = 'Marija_Cubic_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-8 right-8 z-50"
      data-testid="container-download-button"
    >
      <Button
        size="lg"
        onClick={handleDownload}
        className="shadow-lg gap-2 rounded-full"
        data-testid="button-download-cv"
      >
        <Download className="w-4 h-4" />
        {content[language]}
      </Button>
    </motion.div>
  );
}
