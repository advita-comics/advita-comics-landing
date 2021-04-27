import * as yup from 'yup';

const schema = yup.object().shape({
  comicId:
    yup
      .string()
      .nullable()
      .required('Select comic to support please.'),
  donationVariantId:
    yup
      .string()
      .nullable()
      .required('Select donation variant please.'),
  donationAmount:
    yup
      .string()
      .matches(/^[0-9]*$/, 'Only numbers are accesible')
      .nullable()
      .required('Enter donation amount please'),
});

export default schema;
