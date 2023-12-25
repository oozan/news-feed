import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import lang_en from './locales/en.json';
import lang_fi from './locales/fi.json';

export type AvailableLanguages = keyof typeof languageResources;

const defaultNS = 'translation';
export const languageResources = {
  en: {
    translation: lang_en,
  },
  fi: {
    translation: lang_fi,
  },
};

// i18n configuration
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  ns: [defaultNS],
  resources: languageResources,
  defaultNS,
  debug: false,
  // cache: {
  //   enabled: true
  // },
  interpolation: {
    escapeValue: false,
  },
});

type I18nType = {
  t: (key: string, options?: { [key: string]: string | number }) => string;
};

export const I18n = i18n as I18nType;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: typeof languageResources['en'];
  }
}
