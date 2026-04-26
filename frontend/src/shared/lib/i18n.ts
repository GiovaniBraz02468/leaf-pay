import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptCommon from "../locales/pt/common.json";
import ptAuth from "../locales/pt/auth.json";
import ptInitial from "../locales/pt/initial.json";
import ptPasswordReset from "../locales/pt/passwordReset.json";

import enCommon from "../locales/en/common.json";
import enAuth from "../locales/en/auth.json";
import enInitial from "../locales/en/initial.json";
import enPasswordReset from "../locales/en/passwordReset.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        auth: enAuth,
        initial: enInitial,
        passwordReset: enPasswordReset,
      },
      pt: {
        common: ptCommon,
        auth: ptAuth,
        initial: ptInitial,
        passwordReset: ptPasswordReset,
      },
    },
    fallbackLng: "en",
    ns: ["common", "auth", "initial", "passwordReset"],
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
