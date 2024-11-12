import { createI18n } from "vue-i18n";

const messages = {
  tm: {
    routes: {
      title1: 'Baş sahypa',
      title2: 'Brendler',
      title3: 'Habarlaşmak',
      title4: 'Täzelikler',
      title5: 'Gözleg...',
      title6: 'Netijeler',
      title7: 'Biz barada'
    },
    banners: {
      free: {
        title: 'Mugt eltip bermek',
        desc: 'Ähli sargytlarda mugt eltip bermek'
      },
      guarantee: {
        title: 'Garantiýa',
        desc: '12 aýlyk garantiýa'
      },
      prices: {
        title: 'Iň gowy bahalar',
        desc: 'Iň arzan bahalar'
      },
      online: {
        title: 'Onlaýn goldaw 24/7',
        desc: '24 sagat onlaýn goldaw'
      },
    },
    titles: {
      cat: 'Kategoriýa boýunça gözleg',
      offer: 'Siziň üçin iň gowy teklipler',
      explore: 'Häzirki wagtda öwreniň',
      brand: 'Biziň öňdebaryjy brendlerimiz',
      like: 'Bulary hem halap bilersiňiz',
      news: 'Täze harytlar'
    },
    footer: {
      desc: 'Saz we ses enjamlary, yşyklandyryş enjamlary dükany.',
      privacy: 'Ähli hukuklary goralan',
      company: 'Kompaniýa'
    },
    product: {
      brand: 'Brend',
      model: 'Model',
      year: 'Ýyl',
      madeIn: 'Ýeri',
      category: 'Kategoriýa',
      desc: 'Beýleki maglumat'
    },
    contact: {
      fullname: 'Doly ady',
      phone: 'Telefon belgisi',
      message: 'Habar',
      send: 'Ugrat'
    }    
  },
  ru: {    
    routes: {
      title1: 'Главная',
      title2: 'Бренды',
      title3: 'Контакты',
      title4: 'Новости',
      title5: 'Поиск...',
      title6: 'Результаты',
      title7: 'О нас'
    },
    banners: {
      free: {
        title: 'Бесплатная доставка',
        desc: 'Бесплатная доставка на все заказы'
      },
      guarantee: {
        title: 'Гарантия',
        desc: '12 месяцев гарантии'
      },
      prices: {
        title: 'Лучшие цены',
        desc: 'Самые дешевые цены'
      },
      online: {
        title: 'Онлайн поддержка 24/7',
        desc: 'Круглосуточная онлайн поддержка'
      },
    },
    titles: {
      cat: 'Просмотр по категориям',
      offer: 'Лучшие предложения для вас',
      explore: 'Изучить сейчас',
      brand: 'Наши лучшие бренды',
      like: 'Вам также может понравиться',
      news: 'Новые товары'
    },
    footer: {
      desc: 'Магазин музыкальных инструментов и звукового, сетового оборудования.',
      privacy: 'Все права защищены',
      company: 'Компания'
    },
    product: {
      brand: 'Бренд',
      model: 'Модель',
      year: 'Год',
      madeIn: 'Произведено в',
      category: 'Категория',
      desc: 'Описание'
    },
    contact: {
      fullname: 'Полное имя',
      phone: 'Номер телефона',
      message: 'Сообщение',
      send: 'Отправить'
    }    
  },
  en: {
    routes: {
      title1: 'Home',
      title2: 'Brands',
      title3: 'Contact us',
      title4: 'News',
      title5: 'Search...',
      title6: 'Results',
      title7: 'About us'
    },
    banners: {
      free: {
        title: 'Free Delivery',
        desc: 'Free delivery on all orders'
      },
      guarantee: {
        title: 'Guarantee',
        desc: '12 months guarantee'
      },
      prices: {
        title: 'The best prices',
        desc: 'The cheapest prices'
      },
      online: {
        title: 'Online support 24/7',
        desc: '24 hours online support'
      },
    },
    titles: {
      cat: 'Browse by category',
      offer: 'The best offers for you',
      explore: 'Explore Now',
      brand: 'Our top brands',
      like: 'You may also like',
      news: 'New products'
    },
    footer: {
      desc: 'A store for musical instruments, sound, and lighting equipment.',
      privacy: 'All Rights Reserved',
      company: 'Company',
    },
    product: {
      brand: 'Brand',
      model: 'Model',
      year: 'Year',
      madeIn: 'Made in',
      category: 'Category',
      desc: 'Description',
    },
    contact: {
      fullname: 'Full name',
      phone: 'Phone number',
      message: 'Message',
      send: 'Send'
    }
  },
};

export const i18n = createI18n({
  locale: "ru",
  fallbackLocale: "ru",
  messages,
});