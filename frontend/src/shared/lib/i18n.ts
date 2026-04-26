import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptCommon from "../locales/pt/common.json";
import ptAuth from "../locales/pt/auth.json";
import ptMovimentations from "../locales/pt/movimentations.json";
import ptInitial from "../locales/pt/initial.json";
import ptLogin from "../locales/pt/login.json";

import enCommon from "../locales/en/common.json";
import enAuth from "../locales/en/auth.json";
import enMovimentations from "../locales/en/movimentations.json";
import enInitial from "../locales/en/initial.json";
import enLogin from "../locales/en/login.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        auth: enAuth,
        movimentations: enMovimentations,
        initial: enInitial,
        login: enLogin,
      },
      pt: {
        common: ptCommon,
        auth: ptAuth,
        movimentations: ptMovimentations,
        initial: ptInitial,
        login: ptLogin,
      },
    },
    fallbackLng: "en",
    ns: ["common", "auth", "movimentations", "initial", "login"],
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
