

import { useTranslation } from "react-i18next";
import en from "../public/locales/en/translation.json";
import fr from "../public/locales/fr/translation.json";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};



i18n.use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next).init({
    resources:resources,
})

export function trans(key) {
  const { t} = useTranslation();
  return t(key);
}

export const changeLanguage = (language) => {
i18n.changeLanguage(language);;
};

export const getLanguage = () => {
  return i18n.language;
};

export default i18n;
