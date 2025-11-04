import 'server-only';

import { Dictionary } from '@/app/lib/definitions';

const dictionaries = {
  en: () => import('@/public/lang/en.json').then((module) => module.default),
  pt: () => import('@/public/lang/pt.json').then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const loader = (dictionaries as unknown as Record<string, () => Promise<Dictionary>>)[locale] ?? dictionaries.en;
  return loader();
};
