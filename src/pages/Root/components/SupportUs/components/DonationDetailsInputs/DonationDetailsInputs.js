/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Box from 'components/ui/Box';
import TextInput from 'components/ui/TextInput';
import CheckboxInput from 'components/ui/CheckboxInput';
import types from 'types/index';
import styles from '../../style.module.css';

function DonationDetailsInputs(props) {
  const {
    donationVariant,
    register,
    hidden,
    errors,
    donationAmountProps,
  } = props;

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
          containerClassName={styles.donationDetailsInput}
        />

        <TextInput
          {...register('userEmail')}
          htmlType="email"
          id="donation-details-user-email"
          label="Ваш email:"
          name="userEmail"
          errorMessage={errors.userEmail?.message}
          containerClassName={styles.donationDetailsInput}
        />

        <TextInput
          {...donationAmountProps}
          htmlType="number"
          id="donation-details-donation-amount"
          label="Объем пожертвования:"
          name="donationAmount"
          errorMessage={errors.donationAmount?.message}
          min="1"
          containerClassName={styles.donationDetailsInput}
        />

        <CheckboxInput
          {...register('isSubscribedToGetReport')}
          name="isSubscribedToGetReport"
          id="donation-details-is-subscribed-to-get-report"
          label="Получить отчет о потраченных средствах"
          containerClassName={styles.donationDetailsInput}
        />

        <CheckboxInput
          {...register('isSubscribedToTrackProgress')}
          name="isSubscribedToTrackProgress"
          id="donation-details-is-subscribed-to-track-progress"
          label="Отслеживать прогресс"
          containerClassName={styles.donationDetailsInput}
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
