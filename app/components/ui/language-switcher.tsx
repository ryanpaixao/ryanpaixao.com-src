'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Languages } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

interface LanguageSwitcherProps {
  currentLang: string;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps ) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLang: string) => {
    // Replaces the current locale in the pathname with the new one
    const newPathname = pathname.replace(/^\/[^\/]+/, `/${newLang}`);
    
    router.push(newPathname);
  };

  return (
    <div className='flex items-center gap-2'>
      <Languages className='h-4 w-4' />
      <Toggle
        pressed={currentLang === 'pt'}
        onPressedChange={(pressed) => switchLanguage(pressed ? 'pt' : 'en')}
        aria-label='Switch language'
        variant='outline'
      >
        {currentLang === 'pt' ? 'PT' : 'EN'}
      </Toggle>
    </div>
  );
}
