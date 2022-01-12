const isNumber = (value) => !Number.isNaN(Number(value));

function formatCurrency(params) {
  const {
    amount,
    currency,
    formatOptions = {},
  } = params;

  if (!isNumber(amount) || !currency) return null;

  let locale = 'en-US';
  let currencyShortName = 'USD';

  if (currency === 'rub') {
    locale = 'ru-RU';
    currencyShortName = 'RUB';
  }

  const options = {
    style: 'currency',
    currency: currencyShortName,
    ...formatOptions,
  };

  const formatted = new Intl.NumberFormat(locale, options).format(amount);

  return formatted;
}

export default formatCurrency;
