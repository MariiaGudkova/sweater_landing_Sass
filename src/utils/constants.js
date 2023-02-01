import card1 from '../images/bestSellersCards/card_1.png';
import card2 from '../images/bestSellersCards/card_2.png';
import card3 from '../images/bestSellersCards/card_3.png';
import card4 from '../images/bestSellersCards/card_4.png';

import linkCard1 from '../images/linkCards/card_1.png';
import linkCard2 from '../images/linkCards/card_2.png';



export const langEn = {
  WOMEN: "Women",
  MEN :"Men",
  OUR_HERITAGE:'OUR HERITAGE',
  CARE: 'CARE',
  COLLECTIONS:'COLLECTIONS',
  RESPONSIBILITY: 'RESPONSIBILITY',
  EN: 'EN',
  RU: 'RU',
  COLLECTION_NUMBER: 'FW22 collection',
  BREND_LOSUNG: "An Endless Pursuit of Nature",
  BREND_HISTORY:  'In 1853 Ole Andreas Devold embarked on his journey, and since then our wool has been formed in the roughest conditions. Today, we build on our tradition of mastering wool. Relying on our dedication to craftmanship, we develop the finest quality from the most robust material. Crafted to withstand storms and to comfort on late summer nights. With profound care for nature, we create knitwear that lasts,that can be passed on – a legacy for times to come.',
  BEST_SELLERS: 'O.A.D. Best Selling knitwear',
  cards : [
    {
      id:1, 
      title: 'Nord', 
      price: '500 EUR', 
      material: ['MADE OF', '100% NORWEGIAN WOOL'], 
      sizes: [{title: "S", availability: false }, {title: "M", availability: true }, {title: "L", availability: true }, {title: "XL", availability: true },],
      image: card1
    }, 
       
    { 
      id:2, 
      title: 'Ole No. 1', 
      price: '820 EUR', 
      material: ['MADE OF', '55% FINE MERINO', '32% KID MOHAIR', '13% SILK'], 
      sizes: [{title: "XS", availability: true }, {title: "S", availability: true },{title: "M", availability: false }, {title: "L", availability: true },], 
      image: card2
    }, 
  
    {
      id:3, 
      title: 'Ole No. 2', 
      price: '820 EUR', 
      material: ['MADE OF', '55% FINE MERINO', '32% KID MOHAIR', '13% SILK'], 
      sizes: [{title: "S", availability: true }, {title: "M", availability: true }, {title: "L", availability: true }, {title: "XL", availability: false }], 
      image: card3
    }, 
  
    {
      id:4, 
      title: 'Blaatrøie No. 4', 
      price: '500 EUR', 
      material: ['MADE OF', '100% NORWEGIAN WOOL', 'CASHMERE LINING IN NECK'], 
      sizes: [{title: "S", availability: true }, {title: "M", availability: true }, {title: "L", availability: false }, {title: "XL", availability: true }], 
      image: card4
    }
  ],
  linksCards :[{image: linkCard1, title: 'Shop Women'}, {image: linkCard2, title: "Shop Men"}],
  PROMO: 'GET 10% OFF ON YOUR NEXT ONLINE ORDER.',
  PROMO_TEXT: 'JOIN OUR NEWSLETTER TO RECEIVE UPDATES ON O.A.D. COLLECTIONS, EVENTS AND NEW ARRIVALS.',
  SIGN_UP: 'SIGN UP',
  PRIVACY_POLICY: 'I ACCEPT THE O.A.D. PRIVACY POLICY.',
  MORE_INFO_TITLE: 'A Legacy of Wool Since 1853',
  MORE_INFO_TEXT: 'USING OUR KNOWLEDGE, ROOTED IN OUR DEVOID HERITAGE, WE CONTINUE THE TRADITION OF MASTERING WOOL.',
  READ_MORE: "READ MORE",
  DEVOLD_OF_NORWAY: 'DEVOLD OF NORWAY',
  STORES_AND_SHOWROOM: 'Stores and Showroom',
  DELIVERY: "Shipping & Delivery",
  TERMS: 'Terms & Conditions',
  PRIVACY: 'Privacy Policy',
  CUSTOMER_SERVICE: 'Customer service',
}



export const langRu = {
  WOMEN: "Женщины",
  MEN :"Мужчины",
  OUR_HERITAGE: "НАШЕ НАСЛЕДИЕ",
  CARE: "ЗАБОТА",
  COLLECTIONS:"КОЛЛЕКЦИИ",
  RESPONSIBILITY:'ОТВЕТСТВЕННОСТЬ',
  EN: 'EN',
  RU: 'RU',
  COLLECTION_NUMBER: 'FW22 коллекция',
  BREND_LOSUNG: "Бесконечная погоня за природой",
  BREND_HISTORY: 'В 1853 году Оле Андреас Девольд отправился в свое путешествие, и с тех пор наша шерсть формировалась в самых суровых условиях. Сегодня мы развиваем нашу традицию овладения шерстью. Полагаясь на нашу преданность мастерству, мы разрабатываем изделия высочайшего качества из самого прочного материала. Созданный для того, чтобы противостоять штормам и чувствовать себя комфортно поздними летними ночами. С глубокой заботой о природе мы создаем долговечный трикотаж, который можно передавать по наследству на долгие времена.',
  BEST_SELLERS: 'O.A.D. Самый продаваемый трикотаж',
  cards : [
    {
      id:1, 
      title: 'Nord', 
      price: '500 EUR', 
      material: ['СДЕЛАНО ИЗ', '100% НОРВЕЖСКОЙ ШЕРСТИ'], 
      sizes: [{title: "S", availability: false }, {title: "M", availability: true }, {title: "L", availability: true }, {title: "XL", availability: true },],
      image: card1
    }, 
       
    { 
      id:2, 
      title: 'Ole No. 1', 
      price: '820 EUR', 
      material: ['СДЕЛАНО ИЗ', '55% ТОНКОГО МЕРИНОСА', '32% ДЕТСКОГО МОХЕРА', '13% ШЕЛКА'], 
      sizes: [{title: "XS", availability: true }, {title: "S", availability: true },{title: "M", availability: false }, {title: "L", availability: true },], 
      image: card2
    }, 
  
    {
      id:3, 
      title: 'Ole No. 2', 
      price: '820 EUR', 
      material: ['СДЕЛАНО ИЗ', '55% ТОНКОГО МЕРИНОСА', '32% ДЕТСКОГО МОХЕРА', '13% ШЕЛКА'], 
      sizes: [{title: "S", availability: true }, {title: "M", availability: true }, {title: "L", availability: true }, {title: "XL", availability: false }], 
      image: card3
    }, 
  
    {
      id:4, 
      title: 'Blaatrøie No. 4', 
      price: '500 EUR', 
      material: ['СДЕЛАНО ИЗ', '100% НОРВЕЖСКОЙ ШЕРСТИ', 'КАШЕМИРОВАЯ ПОДКЛАДКА НА ШЕЕ'], 
      sizes: [{title: "S", availability: true }, {title: "M", availability: true }, {title: "L", availability: false }, {title: "XL", availability: true }], 
      image: card4
    }
  ],
  linksCards :[{image: linkCard1, title: 'Магазин для женщин'}, {image: linkCard2, title: "Магазин для мужчин"}],
  PROMO: 'ПОЛУЧИТЕ СКИДКУ 10% НА СВОЙ СЛЕДУЮЩИЙ ОНЛАЙН-ЗАКАЗ.',
  PROMO_TEXT:'ПРИСОЕДИНЯЙТЕСЬ К НАШЕЙ РАССЫЛКЕ НОВОСТЕЙ, ЧТОБЫ ПОЛУЧАТЬ ОБНОВЛЕНИЯ О КОЛЛЕКЦИЯХ O.A.D., СОБЫТИЯХ И НОВЫХ ПОСТУПЛЕНИЯХ.',
  SIGN_UP: 'ЗАРЕГИСТРИРОВАТЬСЯ',
  PRIVACY_POLICY: 'Я ПРИНИМАЮ ПОЛИТИКУ КОНФИДЕНЦИАЛЬНОСТИ O.A.D.',
  MORE_INFO_TITLE: 'Наследие Шерсти с 1853 года',
  MORE_INFO_TEXT: 'ИСПОЛЬЗУЯ НАШИ ЗНАНИЯ, УХОДЯЩИЕ КОРНЯМИ В НАШЕ БОГАТОЕ НАСЛЕДИЕ, МЫ ПРОДОЛЖАЕМ ТРАДИЦИЮ ОВЛАДЕНИЯ ШЕРСТЬЮ.',
  READ_MORE: "УЗНАТЬ БОЛЬШЕ",
  DEVOLD_OF_NORWAY: 'DEVOLD ИЗ НОРВЕГИИ',
  STORES_AND_SHOWROOM: 'Магазины и шоурум',
  DELIVERY: "Отгрузка и доставка",
  RETURNS: 'Возвраты и обмены',
  TERMS: 'Правила и условия',
  PRIVACY: 'Политика конфиденциальности',
  CUSTOMER_SERVICE: 'Обслуживание клиентов',
}