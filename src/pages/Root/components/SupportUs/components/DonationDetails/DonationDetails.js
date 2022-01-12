/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useWatch } from 'react-hook-form';
import TextInput from 'components/ui/TextInput';
import CheckboxInput from 'components/ui/CheckboxInput';
import NativeSelect from 'components/ui/NativeSelect';
import RadioInput from 'components/ui/RadioInput';
import DONATION_VARIANTS from 'data/donationVariants';
import { EMAIL_REGEX } from 'helpers/validation/regex';
import formatCurrency from 'helpers/formatters/formatCurrency';
import styles from '../../style.module.css';

function findDonationVariant(id) {
  return DONATION_VARIANTS.find((variant) => variant.id === Number(id));
}

function DonationDetails(props) {
  const {
    formContext,
  } = props;

  const {
    register,
    setValue,
    control,
    formState: { errors },
  } = formContext;

  const [
    donationDirectionIdValue,
    donationVariantIdValue,
    donationAmountValue,
  ] = useWatch({
    control,
    name: ['donationDirectionId', 'donationVariantId', 'donationAmount'],
  });

  const selectedDonationVariant = findDonationVariant(donationVariantIdValue);

  let allowedCharacterFields;

  switch (Number(donationVariantIdValue)) {
    case 1:
      allowedCharacterFields = ['characterName', 'characterGender'];
      break;
    case 2:
      allowedCharacterFields = ['characterName', 'characterGender', 'hairColor'];
      break;
    case 3:
      allowedCharacterFields = ['characterName', 'characterGender', 'hairColor', 'costumeColor'];
      break;
    case 4:
      allowedCharacterFields = [];
      break;
    default:
      allowedCharacterFields = [];
      break;
  }

  function handleDonationAmountBlur(event) {
    const { value } = event.target;

    const sortedDonationVariants = DONATION_VARIANTS.slice().sort((a, b) => (
      b.minAmount - a.minAmount
    ));

    const newDonationVariant = sortedDonationVariants.find((variant) => (
      value >= variant.minAmount
    ));

    if (newDonationVariant) {
      setValue('donationVariantId', String(newDonationVariant.id), {
        shouldValidate: true,
      });
    }
  }

  const isComicsDonate = donationDirectionIdValue
    && Number(donationDirectionIdValue) !== 4
    && donationVariantIdValue
    && Number(donationVariantIdValue) !== 4;

  function isHeroFieldAllowed(fieldName) {
    return isComicsDonate && allowedCharacterFields.includes(fieldName);
  }

  return (
    <div
      className={classNames(styles.box, styles.donationDetailsBox)}
    >
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          {isComicsDonate ? (
            '3. Пожалуйста, укажите детали персонализации вашего персонажа:'
          ) : (
            '3. Пожалуйста, укажите детали пожертвования:'
          )}
        </legend>

        {isComicsDonate && selectedDonationVariant && (
          <p className={styles.donationVariantDesc}>
            {selectedDonationVariant.description}
          </p>
        )}

        <div className={styles.donationDetailsColumns}>
          <TextInput
            {...register('donationAmount', {
              required: 'Поле "Сумма пожертвования" является обязательным.',
              min: {
                value: 10,
                message: 'Поле "Сумма пожертвования" не может быть меньше "10"',
              },
              onBlur: handleDonationAmountBlur,
            })}
            htmlType="number"
            inputMode="decimal"
            id="donation-details-donation-amount"
            label={(
              <>
                Сумма пожертвования:
                {selectedDonationVariant && (
                  <span className={styles.donationDetailsLabelDesc}>
                    Можно указать сумму более
                    {' '}
                    {formatCurrency({
                      amount: selectedDonationVariant.minAmount,
                      currency: 'rub',
                      formatOptions: {
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0,
                      },
                    })}
                  </span>
                )}
              </>
            )}
            min="10"
            errorMessage={errors.donationAmount?.message}
            containerClassName={styles.donationDetailsItem}
          />

          <TextInput
            {...register('userEmail', {
              required: 'Поле "e-mail" является обязательным.',
              pattern: {
                value: EMAIL_REGEX,
                message: 'Введенный e-mail некоректен.',
              },
            })}
            htmlType="email"
            autoComplete="email"
            id="donation-details-user-email"
            label={(
              <>
                Укажите email:
                {isComicsDonate && (
                  <span className={styles.donationDetailsLabelDesc}>
                    по окончании сборов на этот email будет направлен комикс.
                  </span>
                )}
              </>
            )}
            errorMessage={errors.userEmail?.message}
            containerClassName={styles.donationDetailsItem}
          />

          {
            isHeroFieldAllowed('characterName') && (
              <TextInput
                {...register('characterName', {
                  required: 'Поле "Имя персонажа" является обязательным.',
                  maxLength: {
                    value: 25,
                    message: 'Поле "Имя персонажа" не может содержать более 25 символов.',
                  },
                })}
                id="donation-details-character-name"
                label={(
                  <>
                    Имя вашего персонажа (до 25 символов):
                    <span className={styles.donationDetailsLabelDesc}>
                      укажи как будут называть в комиксе твоего персонажа.
                    </span>
                  </>
                )}
                errorMessage={errors.characterName?.message}
                containerClassName={styles.donationDetailsItem}
              />
            )
          }

          {
            isHeroFieldAllowed('characterGender') && (
              <fieldset
                className={classNames(
                  styles.fieldset,
                  styles.donationDetailsCharacterGender,
                  styles.donationDetailsItem,
                )}
              >
                <legend className={styles.legend}>
                  Пол вашего персонажа:
                </legend>

                <ul className={styles.radioList}>
                  <RadioInput
                    {...register('characterGender', {
                      required: 'Поле "Пол персонажа" является обязательным.',
                    })}
                    value="0"
                    id="donation-details-character-gender-0"
                    label="Мужской"
                    containerComponent="li"
                    containerClassName={styles.radioListOption}
                  />

                  <RadioInput
                    {...register('characterGender', {
                      required: 'Поле "Пол персонажа" является обязательным.',
                    })}
                    value="1"
                    id="donation-details-character-gender-1"
                    label="Женский"
                    containerComponent="li"
                    containerClassName={styles.radioListOption}
                  />
                </ul>

                {errors.characterGender?.message && (
                  <aside className={styles.fieldsetErrorMessage}>
                    {errors.characterGender?.message}
                  </aside>
                )}
              </fieldset>
            )
          }

          {
            isHeroFieldAllowed('costumeColor') && (
              <NativeSelect
                {...register('costumeColor', {
                  required: 'Поле "Цвет костюма" является обязательным.',
                })}
                label="Цвет костюма вашего персонажа:"
                id="donation-details-character-costume-color"
                errorMessage={errors.costumeColor?.message}
                containerClassName={styles.donationDetailsItem}
              >
                <NativeSelect.Option value="" disabled>
                  -- Выберите цвет--
                </NativeSelect.Option>
                <NativeSelect.Option value="red">Красный</NativeSelect.Option>
                <NativeSelect.Option value="blue">Синий</NativeSelect.Option>
                <NativeSelect.Option value="green">Зеленый</NativeSelect.Option>
                <NativeSelect.Option value="black">Черный</NativeSelect.Option>
                <NativeSelect.Option value="brown">Коричневый</NativeSelect.Option>
                <NativeSelect.Option value="yellow">Желтый</NativeSelect.Option>
              </NativeSelect>
            )
          }

          {
            isHeroFieldAllowed('hairColor') && (
              <NativeSelect
                {...register('hairColor', {
                  required: 'Поле "Цвет волос" является обязательным.',
                })}
                label="Цвет волос вашего персонажа:"
                id="donation-details-character-hair-color"
                errorMessage={errors.hairColor?.message}
                containerClassName={styles.donationDetailsItem}
              >
                <NativeSelect.Option value="" disabled>
                  -- Выберите цвет--
                </NativeSelect.Option>
                <NativeSelect.Option value="red">Красный</NativeSelect.Option>
                <NativeSelect.Option value="blue">Синий</NativeSelect.Option>
                <NativeSelect.Option value="green">Зеленый</NativeSelect.Option>
                <NativeSelect.Option value="black">Черный</NativeSelect.Option>
                <NativeSelect.Option value="brown">Коричневый</NativeSelect.Option>
                <NativeSelect.Option value="yellow">Желтый</NativeSelect.Option>
              </NativeSelect>
            )
          }
        </div>

        <div className={styles.donationDetailsFooter}>
          <CheckboxInput
            {...register('isSubscribedToGetReport')}
            id="donation-details-is-subscribed-to-get-report"
            label={(
              <>
                Получить отчет о потраченных средствах
                <span className={styles.donationDetailsLabelDesc}>
                  все деньги направляются в Благотворительный фонд Адвита и
                  отчет от фонда будет направлен на указанный выше email.
                </span>
              </>
            )}
            containerClassName={styles.donationDetailsFooterItem}
            iconClassName={styles.checkboxIconClassName}
          />

          <CheckboxInput
            {...register('isSubscribedToTrackProgress')}
            id="donation-details-is-subscribed-to-track-progress"
            label={(
              <>
                Отслеживать прогресс проекта
                <span className={styles.donationDetailsLabelDesc}>
                  если хотите отслеживать актуальную информацию и новости о ходе проекта.
                </span>
              </>
            )}
            containerClassName={styles.donationDetailsFooterItem}
            iconClassName={styles.checkboxIconClassName}
          />

          <CheckboxInput
            {...register('areRegularPaymentsEnabled')}
            id="donation-details-reg-payments"
            label={(
              <>
                Помогать ежемесячно
                <span className={styles.donationDetailsLabelDesc}>
                  {donationAmountValue && (
                    <>
                      Подключить ежемесячный автоплатёж на сумму
                      {' '}
                      <b>
                        {formatCurrency({
                          amount: donationAmountValue,
                          currency: 'rub',
                        })}
                      </b>
                      .
                    </>
                  )}
                  При включении, пожертвования будут производиться автоматически с
                  вашей карты каждый месяц. Вы можете остановить регулярные платежи в
                  любой момент на
                  {' '}
                  <a
                    href="https://my.cloudpayments.ru/unsubscribe"
                    target="_blank"
                    className={styles.donationDetailsItemLink}
                    rel="noreferrer"
                  >
                    сайте системы CloudPayments
                  </a>
                  .
                  Также отключить автоматические пожертвования можно по ссылке в письме,
                  которое придет к вам после списания первого указанного платежа через месяц.
                </span>
              </>
            )}
            containerClassName={styles.donationDetailsFooterItem}
            iconClassName={styles.checkboxIconClassName}
          />
        </div>
      </fieldset>
    </div>
  );
}

const {
  shape,
} = PropTypes;

DonationDetails.propTypes = {
  formContext: shape({}).isRequired,
};

export default DonationDetails;
