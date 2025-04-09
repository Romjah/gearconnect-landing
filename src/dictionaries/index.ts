import { Locale } from '@/app/i18n-config';

// Define proper types to match the actual structure of translations
interface FeatureSection {
  title: string;
  description: string;
  features?: string[];
  ctaText?: string;
}

interface FeaturesTranslation {
  hero: {
    title: string;
    description: string;
  };
  events: FeatureSection & { features: string[]; ctaText: string };
  jobs: FeatureSection & { features: string[]; ctaText: string };
  feed: FeatureSection & { features: string[]; ctaText: string };
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

interface ContactTranslation {
  hero: {
    title: string;
    description: string;
  };
  form: {
    title: string;
    description: string;
    submitButtonText: string;
  };
  info: {
    title: string;
    description: string;
    email: {
      title: string;
      address: string;
      description: string;
    };
    phone: {
      title: string;
      number: string;
      description: string;
    };
    address: {
      title: string;
      line1: string;
      line2: string;
    };
    hours: {
      title: string;
      line1: string;
      line2: string;
    };
    social: {
      title: string;
    };
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
    ctaText: string;
    ctaButtonText: string;
  };
}

interface DownloadTranslation {
  hero: {
    title: string;
    description: string;
  };
  iosApp: {
    title: string;
    description: string;
    buttonText: string;
  };
  androidApp: {
    title: string;
    description: string;
    buttonText: string;
  };
  qrCode: {
    title: string;
    description: string;
  };
  testimonials: {
    title: string;
    items: Array<{
      initial: string;
      name: string;
      role: string;
      text: string;
    }>;
  };
  help: {
    title: string;
    description: string;
    buttonText: string;
  };
}

interface Dictionary {
  features: FeaturesTranslation;
  contact: ContactTranslation;
  download: DownloadTranslation;
}

// Import all dictionaries
import { featuresTranslations as featuresEN } from './en/features';
import { featuresTranslations as featuresFR } from './fr/features';
import { contactTranslations as contactFR } from './fr/contact';
import { downloadTranslations as downloadFR } from './fr/download';

// Create English versions for contact and download (using French for now as placeholders)
const contactEN = contactFR;
const downloadEN = downloadFR;

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    features: featuresEN,
    contact: contactEN,
    download: downloadEN
  },
  fr: {
    features: featuresFR,
    contact: contactFR,
    download: downloadFR
  }
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale] || dictionaries.en;
}; 