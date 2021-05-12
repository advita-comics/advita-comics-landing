import React, { useEffect } from 'react';
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

  const donationVariantId = watch('donationVariantId');
  const comicId = watch('comicId');

  function findDonationVariant(id) {
    return DONATION_VARIANTS.find((variant) => variant.id === Number(id));
  }

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    if (donationVariantId) {
      const donationVariant = findDonationVariant(donationVariantId);

      setValue('donationAmount', donationVariant.minAmount, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
  }, [donationVariantId, setValue]);

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
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register('comicId', { required: true })}
                    containerComponent="li"
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
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...register('donationVariantId', { required: true })}
                    containerComponent="li"
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
