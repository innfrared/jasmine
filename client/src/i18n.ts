import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import am from './locales/am/translation.json';
import ru from './locales/ru/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    am: { translation: am },
    ru: { translation: ru },
  },
  lng: 'en',
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
  debug: false,
});

export default i18n;
