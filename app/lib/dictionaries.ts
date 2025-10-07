import 'server-only';

import { Dictionary } from '@/app/lib/definitions';

const dictionaries = {
  en: () => import('@/public/en.json').then((module) => module.default),
  pt: () => import('@/public/pt.json').then((module) => module.default),
};

type Locale = keyof typeof dictionaries;

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
