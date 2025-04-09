import { Locale } from '@/app/i18n-config';

type Dictionary = {
  [key: string]: {
    [key: string]: any;
  };
};

// Import all dictionaries
import { featuresTranslations as featuresEN } from './en/features';
import { featuresTranslations as featuresFR } from './fr/features';

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    features: featuresEN
  },
  fr: {
    features: featuresFR
  }
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale] || dictionaries.en;
}; 