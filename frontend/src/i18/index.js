import { createI18n } from "vue-i18n";

const messages = {
  tm: {
    routes: {
      title1: 'Baş sahypa',
      title2: 'Brendler',
      title3: 'Habarlaşmak',
      title4: 'Täzelikler'
    }
  },
  ru: {
    routes: {
      title1: 'Главная',
      title2: 'Бренды',
      title3: 'Контакты',
      title4: 'Новости'
    }
  },
  en: {
    routes: {
      title1: 'Home',
      title2: 'Brands',
      title3: 'Contact us',
      title4: 'News'
    }
  },
};

export const i18n = createI18n({
  locale: "ru",
  fallbackLocale: "ru",
  messages,
});