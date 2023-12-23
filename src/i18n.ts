import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en-US",
  })
  .catch((err) => console.error(err));

export default i18n;
