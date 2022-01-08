/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import RadioInput from 'components/ui/RadioInput';
import DONATION_VARIANTS from 'data/donationVariants';
import DonationDetails from './components/DonationDetails';
import styles from './style.module.css';

function findDonationVariant(id) {
  return DONATION_VARIANTS.find((variant) => variant.id === Number(id));
}

function SupportUs() {
  const formContext = useForm({
    mode: 'onBlur',
    defaultValues: {
      // In order to show placeholder for selects
      costumeColor: '',
      hairColor: '',
    },
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
      setValue('donationAmount', donationVariant.minAmount, {
        shouldValidate: true,
      });
    }
  }

  function onSubmit(values) {
    // eslint-disable-next-line no-console
    console.log(values);

    const widgetData = {};

    const widget = new window.cp.CloudPayments();

    if (values.areRegularPaymentsEnabled) {
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
      amount: parseFloat(values.donationAmount),
      currency: 'RUB',
      accountId: values.userEmail,
      email: values.userEmail,
      requireEmail: true,
      data: widgetData,
    });
  }

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
                    {...register('donationDirectionId', {
                      required: 'Поле "Направление пожертвования" является обязательным.',
                    })}
                    value="1"
                    id="donation-direction-1-radio"
                    label="Кассия. Чертоги Разума"
                    containerComponent="li"
                    containerClassName={styles.radioListOption}
                  />

                  <RadioInput
                    {...register('donationDirectionId', {
                      required: 'Поле "Направление пожертвования" является обязательным.',
                    })}
                    value="2"
                    id="donation-direction-2-radio"
                    label="Алика Фокс. Огненный Демон"
                    containerComponent="li"
                    containerClassName={styles.radioListOption}
                  />

                  <RadioInput
                    {...register('donationDirectionId', {
                      required: 'Поле "Направление пожертвования" является обязательным.',
                    })}
                    value="3"
                    id="donation-direction-3-radio"
                    label="Детектив О`Чикс"
                    containerComponent="li"
                    containerClassName={styles.radioListOption}
                  />

                  <RadioInput
                    {...register('donationDirectionId', {
                      required: 'Поле "Направление пожертвования" является обязательным.',
                    })}
                    value="4"
                    id="donation-direction-4-radio"
                    label="Просто пожертвовать на проект"
                    containerComponent="li"
                    containerClassName={styles.radioListOption}
                  />
                </ul>

                {errors.donationDirectionId?.message && (
                  <aside className={styles.fieldsetErrorMessage}>
                    {errors.donationDirectionId?.message}
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
                      {...register('donationVariantId', {
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

                {errors.donationVariantId?.message && (
                  <aside className={styles.fieldsetErrorMessage}>
                    {errors.donationVariantId?.message}
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
