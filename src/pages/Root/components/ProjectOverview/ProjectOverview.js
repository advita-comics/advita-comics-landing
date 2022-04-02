import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import formatCurrency from 'helpers/formatters/formatCurrency';
import APICall from 'helpers/api/APICall';
import styles from './style.module.css';

function ProjectOverview() {
  const [companyDetails, setCompanyDetails] = useState({});

  useEffect(() => {
    APICall({
      method: 'GET',
      endpoint: `${process.env.API_URL || 'http://192.168.99.102:4040'}/company`,
    }).then((response) => setCompanyDetails(response.body))
      .catch(console.error); // eslint-disable-line no-console
  }, []);

  const collectedAmountPercent = (
    companyDetails.collectedAmount / (companyDetails.terminationAmount / 100)
  ).toFixed(2);

  return (
    <section className={styles.section}>
      <div className={classNames('container', styles.sectionInner)}>
        <h1 className={classNames('h1', styles.title)}>
          Стать героем комикса!
        </h1>

        <div className={classNames('grid', styles.sectionColumns)}>
          <div className={classNames('responsive-video-player', styles.bannerColumn)}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3G4NKzmfC-Q"
              title="Описание баннера"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className={styles.donationInfoColumn}>
            <div className={styles.donationInfo}>
              <h3 className={classNames('h3', styles.donationInfoTitle)}>
                Статус сбора пожертвований
              </h3>

              <progress
                className={classNames(
                  'progress-bar progress-bar_primary',
                  styles.donationInfoProgress,
                )}
                value={collectedAmountPercent || 0}
                max={100}
              >
                {collectedAmountPercent}
                % из 100% собрано
              </progress>

              <table className={styles.donationInfoTable}>
                <tbody>
                  <tr>
                    <th className={styles.donationInfoTerm}>
                      {formatCurrency({
                        amount: companyDetails.collectedAmount,
                        currency: 'rub',
                        formatOptions: {
                          maximumFractionDigits: 0,
                          minimumFractionDigits: 0,
                        },
                      })}
                    </th>
                    <th className={styles.donationInfoTerm}>
                      {companyDetails.donationCount}
                    </th>
                    <th className={styles.donationInfoTerm}>
                      {companyDetails.dayRemains}
                    </th>
                  </tr>

                  <tr>
                    <td className={styles.donationInfoDesc}>
                      из
                      {' '}
                      {formatCurrency({
                        amount: companyDetails.terminationAmount,
                        currency: 'rub',
                        formatOptions: {
                          maximumFractionDigits: 0,
                          minimumFractionDigits: 0,
                        },
                      })}
                    </td>
                    <td className={styles.donationInfoDesc}>Взносы</td>
                    <td className={styles.donationInfoDesc}>Дней прошло</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className={styles.projectDesc}>
              Нужен тот человек, который появится в комиксе и поддержит в трудную
              минуту. Им можешь стать ты: достаточно сделать пожертвование на этом
              сайте, настроить персонализацию своего героя и оставить email.
              {' '}
              <a
                href="/about"
                className={styles.projectDescLink}
              >
                Подробнее
              </a>
            </p>

            <a
              className={classNames('button button_primary', styles.backProjectBtn)}
              href="#support-us"
            >
              Поддержать проект
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectOverview;
