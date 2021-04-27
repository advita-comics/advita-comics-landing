import {
  string,
  exact,
  number,
} from 'prop-types';

const DonationVariantType = exact({
  id: number,
  name: string,
  description: string,
  minAmount: number,
});

export {
  DonationVariantType,
};

export default {
  DonationVariantType,
};
