/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import RadioInput from 'components/ui/RadioInput';
import Alert from 'components/ui/Alert';
import APICall from 'helpers/api/APICall';
import omit from 'helpers/functions/omit';
import DONATION_VARIANTS from 'data/donationVariants';
import DonationDetails from './components/DonationDetails';
import styles from './style.module.css';

function findDonationVariant(id) {
  return DONATION_VARIANTS.find((variant) => variant.id === Number(id));
}

function SupportUs() {
  const [donationCreationStatus, setDonationCreationStatus] = useState(null);

  const formContext = useForm({
    mode: 'onBlur',
    shouldUnregister: true,
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = formContext;

  function handleDonationVariantIdChange(event) {
    const { target } = event;
    const donationVariant = findDonationVariant(target.value);

    if (donationVariant) {
      setValue('donation.amount', donationVariant.minAmount, {
        shouldValidate: true,
      });
    }
  }

  function onSubmit(values) {
    const formData = {
      ...values,
      donation: omit(values.donation, 'variantId'),
    };

    // eslint-disable-next-line no-console
    console.log(formData);

    const widgetData = {};

    const widget = new window.cp.CloudPayments();

    if (formData.donation.areRegularPaymentsEnabled) {
      widgetData.cloudPayments = {
        recurrent: {
          interval: 'Month',
          period: 1,
        },
      };
    }

    widget.pay('charge', {
      publicId: process.env.CLOUDPAYMENTS_PUBLIC_ID,
      description: 'Благотворительное пожертвование в фонд AdVita',
      amount: parseFloat(formData.donation.amount),
      currency: 'RUB',
      accountId: formData.donation.userEmail,
      email: formData.donation.userEmail,
      requireEmail: true,
      data: widgetData,
    }, {
      onSuccess() {
        APICall({
          method: 'POST',
          endpoint: `${process.env.API_URL}/donation`,
          payload: formData,
          withCredentials: false,
        }).then(() => setDonationCreationStatus('SUCCESS'))
          .catch(() => setDonationCreationStatus('FAILURE'));
      },
      onFail() {
        setDonationCreationStatus('FAILURE');
      },
    });
  }

  useEffect(() => {
    if (donationCreationStatus) {
      const section = document.getElementById('support-us');
      section.scrollIntoView();
    }
  }, [donationCreationStatus]);

  return (
    <section className={styles.section} id="support-us">
      <div className="container">
        <h2 className={classNames('h2', styles.title)}>
          Поддержи наших героев!
        </h2>

        <p className={styles.subtitle}>
          Выбери историю, к продолжению которой ты присоединишься, и настрой
          элементы персонализации твоего героя.
        </p>

        {
          (donationCreationStatus === 'SUCCESS') && (
            <Alert
              severity="success"
              block
              className={styles.alert}
            >
              Пожертвование было успешно создано!
            </Alert>
          )
        }

        {
          (donationCreationStatus === 'FAILURE') && (
            <Alert
              severity="error"
              block
              className={styles.alert}
            >
              Ошибка при создании пожертвования, пожалуйста попробуйте позже.
            </Alert>
          )
        }

        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className={styles.formColumns}>
            <div className={classNames(styles.box, styles.formColumnsItem)}>
              <fieldset
                className={styles.fieldset}
              >
                <legend className={styles.legend}>
                  1. Пожалуйста, выберите направление пожертвования:
                </legend>

                <ul className={styles.radioList}>
                  <RadioInput
                    {...register('donation.directionId', {
                      required: 'Поле "Направление пожертвования" является обязательным.',
                    })}
                    value="1"
                    id="donation-direction-1-radio"
                    label="Кассия. Чертоги Разума"
                    containerComponent="li"
                    containerClassName={styles.radioListOption}
                  />

                  <RadioInput
                    {...register('donation.directionId', {
                      required: 'Поле "Направление пожертвования" является обязательным.',
                    })}
                    value="2"
                    id="donation-direction-2-radio"
                    label="Алика Фокс. Огненный Демон"
                    containerComponent="li"
                    containerClassName={styles.radioListOption}
                  />

                  <RadioInput
                    {...register('donation.directionId', {
                      required: 'Поле "Направление пожертвования" является обязательным.',
                    })}
                    value="3"
                    id="donation-direction-3-radio"
                    label="Детектив О`Чикс"
                    containerComponent="li"
                    containerClassName={styles.radioListOption}
                  />

                  <RadioInput
                    {...register('donation.directionId', {
                      required: 'Поле "Направление пожертвования" является обязательным.',
                    })}
                    value="4"
                    id="donation-direction-4-radio"
                    label="Просто пожертвовать на проект"
                    containerComponent="li"
                    containerClassName={styles.radioListOption}
                  />
                </ul>

                {errors.donation?.directionId?.message && (
                  <aside className={styles.fieldsetErrorMessage}>
                    {errors.donation.directionId.message}
                  </aside>
                )}
              </fieldset>
            </div>

            <div className={classNames(styles.box, styles.formColumnsItem)}>
              <fieldset
                className={styles.fieldset}
              >
                <legend className={styles.legend}>
                  2. Пожалуйста, выберите сумму пожертвования:
                </legend>

                <ul className={styles.radioList}>
                  {DONATION_VARIANTS.map((donationVariant) => (
                    <RadioInput
                      key={donationVariant.id}
                      {...register('donation.variantId', {
                        required: 'Поле "Сумма пожертвования" является обязательным.',
                        onChange: handleDonationVariantIdChange,
                      })}
                      value={String(donationVariant.id)}
                      id={`donation-variant-${donationVariant.id}-radio`}
                      label={donationVariant.name}
                      containerComponent="li"
                      containerClassName={styles.radioListOption}
                    />
                  ))}
                </ul>

                {errors.donation?.variantId?.message && (
                  <aside className={styles.fieldsetErrorMessage}>
                    {errors.donation.variantId.message}
                  </aside>
                )}
              </fieldset>
            </div>
          </div>

          <DonationDetails formContext={formContext} />

          <button
            type="submit"
            className={classNames('button button_primary', styles.submitBtn)}
          >
            Продолжить
          </button>
        </form>
      </div>
    </section>
  );
}

export default SupportUs;
