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
  userName:
    yup
      .string()
      .required('Пожалуйста, введите ваше имя.'),
  userEmail:
    yup
      .string()
      .email('Введенный e-mail некоректен.')
      .required('Пожалуйста, введите e-mail.'),

  characterName: yup.string().when('donationVariantId', {
    is: (value) => [1, 2, 3].includes(Number(value)),
    then:
      yup
        .string()
        .max(10, 'Имя персонажа не может превышать 10 символов.')
        .required('Пожалуйста, введите имя вашего персонажа.'),
    otherwise: yup.string().default('').notRequired(),
  }),

  characterGender: yup.string().when('donationVariantId', {
    is: (value) => [1, 2, 3].includes(Number(value)),
    then:
      yup
        .string()
        .nullable()
        .required('Пожалуйста, выберите пол вашего персонажа.'),
    otherwise: yup.string().default('').notRequired(),
  }),

  previewName: yup.string().when('donationVariantId', {
    is: (value) => [3].includes(Number(value)),
    then:
      yup
        .string()
        .max(10, 'Название на вывесках не может превышать 10 символов.')
        .required('Пожалуйста, введите название на вывесках.'),
    otherwise: yup.string().default('').notRequired(),
  }),

  costumeColor: yup.string().when('donationVariantId', {
    is: (value) => [2, 3].includes(Number(value)),
    then:
      yup
        .string()
        .nullable()
        .required('Пожалуйста, выберите цвет костюма.'),
    otherwise: yup.string().default('').notRequired(),
  }),
});

export default schema;
