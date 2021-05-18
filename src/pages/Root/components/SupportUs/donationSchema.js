import * as yup from 'yup';

const schema = yup.object().shape({
  comicId:
    yup
      .string()
      .nullable()
      .required('Пожалуйста, выберете комикс.'),
  donationVariantId:
    yup
      .string()
      .nullable()
      .required('Пожалуйста, выберете вариант пожертвования.'),
  donationAmount:
    yup
      .string()
      .matches(/^[0-9]*$/, 'Пожалуйста, вводите только числа.')
      .nullable()
      .required('Пожалуйста, введите объем пожертвования.'),

  userEmail:
    yup
      .string()
      .email('Введенный e-mail некоректен.')
      .required('Пожалуйста, введите e-mail.'),
});

export default schema;
