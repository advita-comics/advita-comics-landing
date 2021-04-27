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
        <H1 className={styles.title}>
          Lorem ipsum dolor sit amet!
        </H1>

        <img
          className={styles.banner}
          src="https://picsum.photos/id/33/300/150"
          alt="Preview"
        />

        <p className={styles.subtitle}>
          Praesent purus ex, elementum sed blandit id, tempus a mi. Vestibulum
          ac orci risus.
          {' '}
          <a className={styles.learnMore} href="/about">Learn more</a>
        </p>

        <ProgressBar
          variant="primary"
          value={70}
          max={100}
          className={styles.progress}
        >
          70% from 100%
        </ProgressBar>

        <dl className={styles.descriptionList}>
          <div className={styles.descriptionItem}>
            <dt className={styles.descriptionTerm}>
              <strong className={styles.descriptionTitle}>$24,913</strong>
            </dt>
            <dd className={styles.descriptionDetails}>
              pledged of $4,118 goal
            </dd>
          </div>

          <div className={styles.descriptionItem}>
            <dt className={styles.descriptionTerm}>
              <strong className={styles.descriptionTitle}>436</strong>
            </dt>
            <dd className={styles.descriptionDetails}>backers</dd>
          </div>

          <div className={styles.descriptionItem}>
            <dt className={styles.descriptionTerm}>
              <strong className={styles.descriptionTitle}>8</strong>
            </dt>
            <dd className={styles.descriptionDetails}>days to go</dd>
          </div>
        </dl>

        <Button
          component="a"
          variant="primary"
          className={styles.backProject}
          href="#support-us"
        >
          Back this project
        </Button>
      </Container>
    </section>
  );
}

export default ProjectOverview;
