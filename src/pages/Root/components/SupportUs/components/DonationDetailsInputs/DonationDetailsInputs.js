/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Box from 'components/ui/Box';
import TextInput from 'components/ui/TextInput';
import CheckboxInput from 'components/ui/CheckboxInput';
import RadioInputGroup from 'components/ui/RadioInputGroup';
import NativeSelect from 'components/ui/NativeSelect';
import types from 'types/index';
import styles from '../../style.module.css';

const GENDERS = {
  Мужской: 0,
  Женский: 1,
};

function DonationDetailsInputs(props) {
  const {
    donationVariant,
    register,
    hidden,
    errors,
    donationAmountProps,
  } = props;

  const heroFieldNames = [
    'characterName',
    'characterGender',
    'costumeColor',
    'previewName',
  ];

  let allowedHeroFields = [];

  switch (donationVariant.id) {
    case 1:
      allowedHeroFields = ['characterName', 'characterGender'];
      break;
    case 2:
      allowedHeroFields = ['characterName', 'characterGender', 'costumeColor'];
      break;
    case 3:
      allowedHeroFields = [...heroFieldNames];
      break;
    case 4:
      allowedHeroFields = [];
      break;
    default:
      break;
  }

  function isHeroFieldAllowed(fieldName) {
    return allowedHeroFields.includes(fieldName);
  }

  return (
    <Box
      className={classNames(styles.box, styles.donationDetailsBox, {
        [styles.donationDetailsBoxHidden]: hidden,
      })}
    >
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Настройка пожертвования</legend>

        <p className={styles.text}>{donationVariant.description}</p>

        <TextInput
          {...register('userName')}
          id="donation-details-user-name"
          label="Ваше имя:"
          name="userName"
          errorMessage={errors.userName?.message}
          containerClassName={styles.donationDetailsItem}
        />

        <TextInput
          {...register('userEmail')}
          htmlType="email"
          id="donation-details-user-email"
          label="Ваш email:"
          name="userEmail"
          errorMessage={errors.userEmail?.message}
          containerClassName={styles.donationDetailsItem}
        />

        <TextInput
          {...donationAmountProps}
          htmlType="number"
          id="donation-details-donation-amount"
          label="Объем пожертвования:"
          name="donationAmount"
          errorMessage={errors.donationAmount?.message}
          min="1"
          containerClassName={styles.donationDetailsItem}
        />

        {
          isHeroFieldAllowed('characterName') && (
            <TextInput
              {...register('characterName')}
              id="donation-details-character-name"
              label="Имя вашего персонажа (до 10 символов):"
              name="characterName"
              errorMessage={errors.characterName?.message}
              containerClassName={styles.donationDetailsItem}
            />
          )
        }

        {
          isHeroFieldAllowed('previewName') && (
            <TextInput
              {...register('previewName')}
              id="donation-details-preview-name"
              label="Название на вывесках (до 10 символов):"
              name="previewName"
              errorMessage={errors.previewName?.message}
              containerClassName={styles.donationDetailsItem}
            />
          )
        }

        {
          isHeroFieldAllowed('costumeColor') && (
            <NativeSelect
              {...register('costumeColor')}
              defaultValue=""
              name="costumeColor"
              label="Цвет костюма:"
              id="donation-details-character-costume-color"
              containerClassName={styles.donationDetailsItem}
              errorMessage={errors.costumeColor?.message}
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
          isHeroFieldAllowed('characterGender') && (
            <RadioInputGroup
              className={classNames(
                styles.fieldsetSecondary,
                styles.donationDetailsItem,
              )}
              errorMessage={errors.characterGender?.message}
            >
              <RadioInputGroup.Legend className={styles.legend}>
                Пол вашего персонажа:
              </RadioInputGroup.Legend>

              <RadioInputGroup.List className={styles.optionList}>
                {Object.keys(GENDERS).map((genderName) => (
                  <RadioInputGroup.Radio
                    key={genderName}
                    {...register('characterGender')}
                    containerClassName={styles.option}
                    name="characterGender"
                    value={String(GENDERS[genderName])}
                    id={`donation-details-character-gender-${GENDERS[genderName]}`}
                    label={genderName}
                  />
                ))}
              </RadioInputGroup.List>
            </RadioInputGroup>
          )
        }

        <div className={styles.donationDetailsFooter}>
          <CheckboxInput
            {...register('isSubscribedToGetReport')}
            name="isSubscribedToGetReport"
            id="donation-details-is-subscribed-to-get-report"
            label="Получить отчет о потраченных средствах"
            containerClassName={styles.donationDetailsItem}
          />

          <CheckboxInput
            {...register('isSubscribedToTrackProgress')}
            name="isSubscribedToTrackProgress"
            id="donation-details-is-subscribed-to-track-progress"
            label="Отслеживать прогресс"
            containerClassName={styles.donationDetailsItem}
          />

          <div className={styles.regPaymentsInputGroup}>
            <CheckboxInput
              {...register('areRegularPaymentsEnabled')}
              name="areRegularPaymentsEnabled"
              id="donation-details-reg-payments"
              label="Помогать ежемесячно"
            />

            <p className={styles.regPaymentsInputGroupText}>
              При включении, пожертвования будут производиться автоматически с
              вашей карты каждый месяц. Вы можете остановить регулярные платежи в
              любой момент на
              {' '}
              <a
                href="https://my.cloudpayments.ru/unsubscribe"
                target="_blank"
                rel="noreferrer"
                className={styles.regPaymentsInputGroupLink}
              >
                сайте системы CloudPayments
              </a>
            </p>
          </div>
        </div>

      </fieldset>
    </Box>
  );
}

DonationDetailsInputs.defaultProps = {
  hidden: undefined,
  donationVariant: {},
};

DonationDetailsInputs.propTypes = {
  register: PropTypes.func.isRequired,
  donationVariant: types.models.DonationVariantType,
  hidden: PropTypes.bool,
  errors: PropTypes.objectOf(PropTypes.object).isRequired,
  donationAmountProps: PropTypes.shape({}).isRequired,
};

export default DonationDetailsInputs;
