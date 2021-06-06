/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { H2 } from 'components/ui/Typography';
import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import Box from 'components/ui/Box';
import RadioInputGroup from 'components/ui/RadioInputGroup';
import COMICS from 'data/comics';
import DONATION_VARIANTS from 'data/donationVariants';
import DonationDetailsInputs from './components/DonationDetailsInputs';
import donationSchema from './donationSchema';
import styles from './style.module.css';

function SupportUs() {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(donationSchema),
  });

  const donationVariantIdProps = register('donationVariantId');
  const donationAmountProps = register('donationAmount');

  const donationVariantId = watch('donationVariantId');
  const comicId = watch('comicId');

  function findDonationVariant(id) {
    return DONATION_VARIANTS.find((variant) => variant.id === Number(id));
  }

  function handleDonationVariantIdChange(event) {
    donationVariantIdProps.onChange(event);

    const { target } = event;
    const donationVariant = findDonationVariant(target.value);

    if (donationVariant) {
      setValue('donationAmount', donationVariant.minAmount, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }

  function handleDonationAmountBlur(event) {
    donationAmountProps.onBlur(event);

    const { target } = event;
    const donationVariant = findDonationVariant(donationVariantId);

    if (target.value && donationVariant) {
      const sortedDonationVariants = DONATION_VARIANTS.sort((a, b) => (
        b.minAmount - a.minAmount
      ));

      const newDonationVariant = sortedDonationVariants.find((variant) => (
        target.value >= variant.minAmount
      ));

      if (newDonationVariant) {
        setValue('donationVariantId', String(newDonationVariant.id), {
          shouldValidate: true,
          shouldDirty: true,
        });
      }
    }
  }

  const onSubmit = (values) => {
    // eslint-disable-next-line no-console
    console.log(values);

    const widgetData = {};

    const widget = new window.cp.CloudPayments();

    if (values.areRegularPaymentsEnabled) {
      widgetData.cloudPayments = {
        recurrent: {
          interval: 'Month',
          period: 1,
          /** @todo may be start date is needed here */
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
  };

  return (
    <section className={styles.section} id="support-us">
      <Container mobileOnly>
        <H2 className={styles.title}>Поддержи наших героев!</H2>

        <p className={styles.subtitle}>
          Выбери историю, к продолжению которой ты присоединишься, и настрой
          элементы персонализации твоего героя.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Box className={styles.box}>
            <RadioInputGroup
              className={styles.fieldset}
              errorMessage={errors.comicId?.message}
            >
              <RadioInputGroup.Legend className={styles.legend}>
                Пожалуйста, выберете комикс:
              </RadioInputGroup.Legend>

              <RadioInputGroup.List className={styles.optionList}>
                {COMICS.map((comic) => (
                  <RadioInputGroup.Radio
                    key={comic.id}
                    {...register('comicId')}
                    containerClassName={styles.option}
                    name="comicId"
                    value={String(comic.id)}
                    id={`support-${comic.id}-comic-radio`}
                    label={comic.name}
                  />
                ))}
              </RadioInputGroup.List>
            </RadioInputGroup>
          </Box>

          <Box className={styles.box}>
            <RadioInputGroup
              className={styles.fieldset}
              errorMessage={errors.donationVariantId?.message}
            >
              <RadioInputGroup.Legend className={styles.legend}>
                Пожалуйста, выберете вариант пожертвования:
              </RadioInputGroup.Legend>

              <RadioInputGroup.List className={styles.optionList}>
                {DONATION_VARIANTS.map((donationVariant) => (
                  <RadioInputGroup.Radio
                    key={donationVariant.id}
                    {...donationVariantIdProps}
                    onChange={handleDonationVariantIdChange}
                    containerClassName={styles.option}
                    name="donationVariantId"
                    value={String(donationVariant.id)}
                    id={`support-${donationVariant.id}-donation-radio`}
                    label={donationVariant.name}
                  />
                ))}
              </RadioInputGroup.List>
            </RadioInputGroup>
          </Box>

          <DonationDetailsInputs
            donationVariant={findDonationVariant(donationVariantId)}
            register={register}
            hidden={!comicId || !donationVariantId}
            errors={errors}
            donationAmountProps={{
              ...donationAmountProps,
              onBlur: handleDonationAmountBlur,
            }}
          />

          <Button type="submit" variant="primary" className={styles.submitBtn}>
            Продолжить
          </Button>
        </form>
      </Container>
    </section>
  );
}

export default SupportUs;
