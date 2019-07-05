import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
var enTerriaMap = require("./en.json");
var enTerriaJs = require("terriajs/lib/locale/en.json");
var esTerriaMap = require("./es.json");
var esTerriaJs = require("terriajs/lib/locale/es.json");

i18n.use(LanguageDetector).init({
  resources: {
    en: {
      terriamap: enTerriaMap,
      terriajs: enTerriaJs
    },
    es: {
      terriamap: esTerriaMap,
      terriajs: esTerriaJs
    }
  },
  fallbackLng: "es",
  debug: true,

  ns: ["terriamap", "terriajs"],
  defaultNS: "terriamap",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
