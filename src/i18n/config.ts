import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import bn from './locales/bn.json';
import ja from './locales/ja.json';
import ar from './locales/ar.json';
import zh from './locales/zh.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import hi from './locales/hi.json';
import ko from './locales/ko.json';
import pt from './locales/pt.json';
import ru from './locales/ru.json';
import it from './locales/it.json';
import tr from './locales/tr.json';
import vi from './locales/vi.json';
import th from './locales/th.json';
import ur from './locales/ur.json';
import ms from './locales/ms.json';
import nl from './locales/nl.json';
import pl from './locales/pl.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      bn: { translation: bn },
      ja: { translation: ja },
      ar: { translation: ar },
      zh: { translation: zh },
      es: { translation: es },
      fr: { translation: fr },
      de: { translation: de },
      hi: { translation: hi },
      ko: { translation: ko },
      pt: { translation: pt },
      ru: { translation: ru },
      it: { translation: it },
      tr: { translation: tr },
      vi: { translation: vi },
      th: { translation: th },
      ur: { translation: ur },
      ms: { translation: ms },
      nl: { translation: nl },
      pl: { translation: pl },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
