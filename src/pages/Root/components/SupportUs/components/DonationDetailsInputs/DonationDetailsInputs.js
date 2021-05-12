import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Box from 'components/ui/Box';
import TextInput from 'components/ui/TextInput';
import types from 'types/index';
import styles from '../../style.module.css';

function DonationDetailsInputs(props) {
  const {
    donationVariant,
    register,
    hidden,
    errors,
  } = props;

  return (
    <Box className={
      classNames(
        styles.box,
        styles.donationDetailsBox,
        {
          [styles.donationDetailsBoxHidden]: hidden,
        },
      )
    }
    >
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          Настройка пожертвования
        </legend>

        <p className={styles.text}>
          {donationVariant.description}
        </p>

        <TextInput
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register('donationAmount', { required: true })}
          htmlType="number"
          inputMode="numeric"
          id={`donation-details-donation-amount-${donationVariant.id}`}
          label="Объем пожертвования:"
          name="donationAmount"
          errorMessage={errors.donationAmount?.message}
          min="1"
        />
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
};

export default DonationDetailsInputs;
