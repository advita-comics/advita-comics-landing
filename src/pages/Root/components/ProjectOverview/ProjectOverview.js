import React from 'react';
import { H1 } from 'components/ui/Typography';
import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import ProgressBar from 'components/ui/ProgressBar';
import styles from './style.module.css';

function ProjectOverview() {
  return (
    <section className={styles.section}>
      <Container mobileOnly>
        <H1 className={styles.title}>Стань героем нового комикса!</H1>

        <img
          className={styles.banner}
          src="https://picsum.photos/id/33/300/150"
          alt="Preview"
        />

        <p className={styles.subtitle}>
          Перед тобой комиксы, которые обрываются на самом интересном месте:
          супергерои вступили в бой со злом, но сами они не справляются. Нужен
          тот человек, который поддержит в трудную минуту. Им можешь стать ты:
          достаточно сделать пожертвование на этом сайте, добавить немного
          информации о себе и оставить свой e-mail.
          {' '}
          <a className={styles.learnMore} href="/about">
            Подробнее
          </a>
        </p>

        <ProgressBar
          variant="primary"
          value={30}
          max={100}
          className={styles.progress}
        >
          30% из 100% собрано
        </ProgressBar>

        <dl className={styles.descriptionList}>
          <div className={styles.descriptionItem}>
            <dt className={styles.descriptionTerm}>
              <strong className={styles.descriptionTitle}>$24,913</strong>
            </dt>
            <dd className={styles.descriptionDetails}>
              Собрано $4,118
            </dd>
          </div>

          <div className={styles.descriptionItem}>
            <dt className={styles.descriptionTerm}>
              <strong className={styles.descriptionTitle}>436</strong>
            </dt>
            <dd className={styles.descriptionDetails}>Взносов</dd>
          </div>

          <div className={styles.descriptionItem}>
            <dt className={styles.descriptionTerm}>
              <strong className={styles.descriptionTitle}>8</strong>
            </dt>
            <dd className={styles.descriptionDetails}>Дней назад</dd>
          </div>
        </dl>

        <Button
          component="a"
          variant="primary"
          className={styles.backProject}
          href="#support-us"
        >
          Поддержать проект
        </Button>
      </Container>
    </section>
  );
}

export default ProjectOverview;
