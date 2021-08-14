import React from 'react';
import classNames from 'classnames';
import styles from './style.module.css';

function ProjectOverview() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={classNames('h1', styles.title)}>
          Стань героем нового комикса!
        </h1>

        <img
          className={styles.banner}
          sizes="(min-width: 64em) 62.5rem, (min-width: 48em) 43.75rem, 18.75rem"
          srcSet="
            https://picsum.photos/id/128/300/200 300w,
            https://picsum.photos/id/128/700/467 700w,
            https://picsum.photos/id/128/1000/667 1000w
          "
          src="https://picsum.photos/id/128/300/200"
          alt="Описание баннера"
        />

        <div className={styles.sectionColumns}>
          <p className={styles.subtitle}>
            Перед тобой комиксы, которые обрываются на самом интересном месте:
            супергерои вступили в бой со злом, но сами они не справляются. Нужен
            тот человек, который поддержит в трудную минуту. Им можешь стать ты:
            достаточно сделать пожертвование на этом сайте, добавить немного
            информации о себе и оставить свой e-mail. Вместе мы не только
            поможем главным героям очистить город от зла: собранные средства
            будут перечислены на помощь тем, кто сейчас борется с раком. И как
            только проект наберет нужную сумму, тебе на почту придет
            индивидуальный комикс с продолжением, где ты становишься вторым
            главным героем.
            {' '}
            <a className={styles.learnMore} href="/about">
              Подробнее
            </a>
          </p>

          <div className={styles.donationStatisticContainer}>
            <progress
              className={classNames(
                'progress-bar progress-bar_primary',
                styles.progress,
              )}
              value={70}
              max={100}
            >
              70% из 100% собрано
            </progress>

            <table className={styles.donationStatistic}>
              <tbody>
                <tr>
                  <th className={styles.donationStatisticHead}>750 000 ₽</th>
                  <th className={styles.donationStatisticHead}>5 345</th>
                  <th className={styles.donationStatisticHead}>85</th>
                </tr>

                <tr>
                  <td className={styles.donationStatisticInfo}>
                    Собрано:
                    <br />
                    245 453 ₽
                  </td>
                  <td className={styles.donationStatisticInfo}>Взносов</td>
                  <td className={styles.donationStatisticInfo}>Дней назад</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <a
          className={classNames('button button_primary', styles.backProject)}
          href="#support-us"
        >
          Поддержать проект
        </a>
      </div>
    </section>
  );
}

export default ProjectOverview;
