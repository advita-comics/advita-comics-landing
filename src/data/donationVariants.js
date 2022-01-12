import formatCurrency from 'helpers/formatters/formatCurrency';

const formatOptions = {
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
};

const DONATION_VARIANTS = [
  {
    id: 1,
    name: `${formatCurrency({ amount: 500, currency: 'rub', formatOptions })} и более`,
    description: 'Элементы персонализации героя: пол и имя.',
    minAmount: 500,
  },
  {
    id: 2,
    name: `${formatCurrency({ amount: 600, currency: 'rub', formatOptions })} и более`,
    description: 'Элементы персонализации героя: пол, имя, цвет волос.',
    minAmount: 600,
  },
  {
    id: 3,
    name: `${formatCurrency({ amount: 700, currency: 'rub', formatOptions })} и более`,
    description: 'Элементы персонализации героя: пол, имя, цвет волос, основной цвет одежды.',
    minAmount: 700,
  },
  {
    id: 4,
    name: `Другая сумма (не менее ${formatCurrency({ amount: 10, currency: 'rub', formatOptions })})`,
    description: 'Нет элементов персонализации героя.',
    minAmount: 10,
  },
];

export default DONATION_VARIANTS;
