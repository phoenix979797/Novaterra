/**
 * Locales
 */

import { I18n } from "i18n-js";

import English from "@/lib/locales/en";
import German from "@/lib/locales/de";

const Locales = new I18n({
  en: English,
  de: German,
});

Locales.enableFallback = true;

export { Locales };
