const DONATION_VARIANTS = [
  {
    id: 1,
    name: 'Pledge 300 rub or more',
    description: [
      'If you close your eyes and listen carefully',
      '– when the wind is calm, and the world is quiet',
      "– you'll be able to feel us thanking you for your support.",
    ].join(' '),
    minAmount: 300,
  },
  {
    id: 2,
    name: 'Pledge 400 rub or more',
    description: [
      'An easy-to-download digital copy of INFERNO GIRL RED. Plus:',
      "– Your name in the 'Special Thanks' section.",
    ].join(' '),
    minAmount: 400,
  },
  {
    id: 3,
    name: 'Pledge 1000 rub or more',
    description: [
      'Lorem ipsum dolor sit amet dolor sit amet',
      'This is a lorem ipsum super text, just ryba text',
    ].join(' '),
    minAmount: 1000,
  },
  {
    id: 4,
    name: 'Pledge another sum',
    description: 'Support the project for no reward, just because it speaks to you.',
    minAmount: 1,
  },
];

export default DONATION_VARIANTS;
