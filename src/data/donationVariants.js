const DONATION_VARIANTS = [
  {
    id: 1,
    name: '300 рублей или более',
    description: [
      '300 RUB and more If you close your eyes and listen carefully',
      '– when the wind is calm, and the world is quiet',
      "– you'll be able to feel us thanking you for your support.",
    ].join(' '),
    minAmount: 300,
  },
  {
    id: 2,
    name: '400 рублей или более',
    description: [
      '400 RUB and more An easy-to-download digital copy of INFERNO GIRL RED. Plus:',
      "– Your name in the 'Special Thanks' section.",
    ].join(' '),
    minAmount: 400,
  },
  {
    id: 3,
    name: '1000 рублей или более',
    description: [
      '1000 RUB and more Lorem ipsum dolor sit amet dolor sit amet',
      'This is a lorem ipsum super text, just ryba text',
    ].join(' '),
    minAmount: 1000,
  },
  {
    id: 4,
    name: 'Другую сумма',
    description: 'Other sum Support the project for no reward, just because it speaks to you.',
    minAmount: 1,
  },
];

export default DONATION_VARIANTS;
