import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import am from './locales/am/translation.json';
import ru from './locales/ru/translation.json';
import { AppLanguage, DEFAULT_LANGUAGE } from './shared/preferences/constants';
import { resolveStoredLanguage } from './shared/preferences/clientPreferences';

export {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  isSupportedLanguage,
  type AppLanguage,
} from './shared/preferences/constants';

export const defaultNS = 'translation';
export const resources = {
  en: { translation: en },
  am: { translation: am },
  ru: { translation: ru },
} as const;

export const getInitialLanguage = (): AppLanguage => {
  return resolveStoredLanguage();
};

i18n.use(initReactI18next).init({
  resources,
  defaultNS,
  lng: getInitialLanguage(),
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
  debug: false,
});

export default i18n;
