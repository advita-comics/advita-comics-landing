const DONATION_VARIANTS = [
  {
    id: 1,
    name: '500 рублей и более',
    description: 'Элементы персонализации героя: пол и имя.',
    minAmount: 500,
  },
  {
    id: 2,
    name: '600 рублей и более',
    description: 'Элементы персонализации героя: пол, имя, цвет волос.',
    minAmount: 600,
  },
  {
    id: 3,
    name: '700 рублей и более',
    description: 'Элементы персонализации героя: пол, имя, цвет волос, основной цвет одежды.',
    minAmount: 700,
  },
  {
    id: 4,
    name: 'Другая сумма (не менее 10 рублей)',
    description: 'Нет элементов персонализации героя.',
    minAmount: 10,
  },
];

export default DONATION_VARIANTS;
