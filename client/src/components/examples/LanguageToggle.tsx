import { useState } from 'react';
import LanguageToggle from '../LanguageToggle';

export default function LanguageToggleExample() {
  const [language, setLanguage] = useState<'en' | 'hr'>('en');

  return (
    <div className="p-8">
      <LanguageToggle language={language} onToggle={setLanguage} />
      <div className="mt-20 text-center">
        <p className="text-lg">Current language: <strong>{language === 'en' ? 'English' : 'Croatian'}</strong></p>
      </div>
    </div>
  );
}
