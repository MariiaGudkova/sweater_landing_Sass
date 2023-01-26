import card1 from '../images/cards/card_1.png';
import card2 from '../images/cards/card_2.png';
import card3 from '../images/cards/card_3.png';
import card4 from '../images/cards/card_4.png';

export const cards = [
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
]