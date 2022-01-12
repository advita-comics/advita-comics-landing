import React from 'react';
import classNames from 'classnames';
import {
  FacebookShareButton,
  MailruShareButton,
  OKShareButton,
  TelegramShareButton,
  TwitterShareButton,
  VKShareButton,
  FacebookIcon,
  MailruIcon,
  OKIcon,
  TelegramIcon,
  TwitterIcon,
  VKIcon,
} from 'react-share';
import styles from './style.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={classNames('container', styles.footerInner)}>
        <div className={styles.footerLeft}>
          <div className={styles.footerSocial}>
            <p className={styles.footerSocialInfo}>
              Если понравился наш проект - поделись информацией о нас!
            </p>

            <ul className={styles.footerSocialList}>
              <li className={styles.footerSocialItem}>
                <FacebookShareButton
                  url="/"
                  quote="Lorem ipsum quote!"
                  className={styles.footerSocialLink}
                  resetButtonStyle={false}
                >
                  <span className="visually-hidden">
                    Поделиться используя Facebook
                  </span>
                  <FacebookIcon className={styles.footerSocialIcon} />
                </FacebookShareButton>
              </li>

              <li className={styles.footerSocialItem}>
                <MailruShareButton
                  url="/"
                  title="Lorem ipsum title"
                  description="Lorem ipsum desc"
                  className={styles.footerSocialLink}
                  resetButtonStyle={false}
                >
                  <span className="visually-hidden">
                    Поделиться используя Mail.ru
                  </span>
                  <MailruIcon className={styles.footerSocialIcon} />
                </MailruShareButton>
              </li>

              <li className={styles.footerSocialItem}>
                <OKShareButton
                  url="/"
                  title="Lorem ipsum title"
                  description="Lorem ipsum desc"
                  className={styles.footerSocialLink}
                  resetButtonStyle={false}
                >
                  <span className="visually-hidden">
                    Поделиться используя Odnoklassniki
                  </span>
                  <OKIcon className={styles.footerSocialIcon} />
                </OKShareButton>
              </li>

              <li className={styles.footerSocialItem}>
                <TelegramShareButton
                  url="/"
                  className={styles.footerSocialLink}
                  resetButtonStyle={false}
                >
                  <span className="visually-hidden">
                    Поделиться используя Telegram
                  </span>
                  <TelegramIcon className={styles.footerSocialIcon} />
                </TelegramShareButton>
              </li>

              <li className={styles.footerSocialItem}>
                <TwitterShareButton
                  url="/"
                  className={styles.footerSocialLink}
                  resetButtonStyle={false}
                >
                  <span className="visually-hidden">
                    Поделиться используя Twitter
                  </span>
                  <TwitterIcon className={styles.footerSocialIcon} />
                </TwitterShareButton>
              </li>

              <li className={styles.footerSocialItem}>
                <VKShareButton
                  url="/"
                  className={styles.footerSocialLink}
                  resetButtonStyle={false}
                >
                  <span className="visually-hidden">
                    Поделиться используя Vk
                  </span>
                  <VKIcon className={styles.footerSocialIcon} />
                </VKShareButton>
              </li>
            </ul>
          </div>

          <div className={styles.footerSocial}>
            <p className={styles.footerSocialInfo}>
              AdVita в социальных сетях:
            </p>

            <ul className={styles.footerSocialList}>
              <li className={styles.footerSocialItem}>
                <a
                  href="https://vk.com/advitafund"
                  className={styles.footerSocialLink}
                >
                  <VKIcon className={styles.footerSocialIcon} />
                  <span className="visually-hidden">Вконтакте</span>
                </a>
              </li>

              <li className={styles.footerSocialItem}>
                <a
                  href="https://www.facebook.com/AdVitafund"
                  className={styles.footerSocialLink}
                >
                  <FacebookIcon className={styles.footerSocialIcon} />
                  <span className="visually-hidden">Facebook</span>
                </a>
              </li>

              <li className={styles.footerSocialItem}>
                <a
                  href="https://www.instagram.com/advita_fund/"
                  className={styles.footerSocialLink}
                >
                  <svg
                    viewBox="0 0 64 64"
                    width="64"
                    height="64"
                    className={styles.footerSocialIcon}
                  >
                    <rect width="64" height="64" rx="0" ry="0" fill="#e94475" />
                    <path
                      fill="white"
                      d="M 39.88,25.89 C 40.86,25.89 41.65,25.10 41.65,24.12 41.65,23.14 40.86,22.35 39.88,22.35 38.90,22.35 38.11,23.14 38.11,24.12 38.11,25.10 38.90,25.89 39.88,25.89 Z M 32.00,24.42 C 27.82,24.42 24.42,27.81 24.42,32.00 24.42,36.19 27.82,39.58 32.00,39.58 36.18,39.58 39.58,36.18 39.58,32.00 39.58,27.82 36.18,24.42 32.00,24.42 Z M 32.00,36.92 C 29.28,36.92 27.08,34.72 27.08,32.00 27.08,29.28 29.28,27.08 32.00,27.08 34.72,27.08 36.92,29.28 36.92,32.00 36.92,34.72 34.72,36.92 32.00,36.92 Z M 32.00,19.90 C 35.94,19.90 36.41,19.92 37.96,19.99 39.41,20.05 40.19,20.29 40.71,20.50 41.40,20.77 41.89,21.08 42.41,21.60 42.92,22.12 43.24,22.61 43.51,23.30 43.71,23.82 43.95,24.60 44.02,26.04 44.09,27.60 44.11,28.06 44.11,32.01 44.11,35.95 44.09,36.41 44.02,37.97 43.95,39.41 43.71,40.19 43.51,40.71 43.24,41.40 42.92,41.90 42.41,42.41 41.89,42.93 41.40,43.25 40.71,43.51 40.19,43.71 39.41,43.96 37.96,44.02 36.41,44.09 35.94,44.11 32.00,44.11 28.06,44.11 27.59,44.09 26.04,44.02 24.59,43.96 23.81,43.72 23.29,43.51 22.60,43.24 22.11,42.93 21.59,42.41 21.08,41.90 20.76,41.40 20.49,40.71 20.29,40.19 20.05,39.41 19.98,37.97 19.91,36.41 19.89,35.95 19.89,32.01 19.89,28.06 19.91,27.60 19.98,26.04 20.05,24.60 20.29,23.82 20.49,23.30 20.76,22.61 21.08,22.12 21.59,21.60 22.11,21.08 22.60,20.76 23.29,20.50 23.81,20.30 24.59,20.05 26.04,19.99 27.59,19.91 28.06,19.90 32.00,19.90 Z M 32.00,17.24 C 27.99,17.24 27.49,17.26 25.91,17.33 24.34,17.40 23.27,17.65 22.33,18.01 21.36,18.39 20.54,18.90 19.72,19.72 18.90,20.54 18.39,21.37 18.01,22.33 17.65,23.27 17.40,24.34 17.33,25.92 17.26,27.49 17.24,27.99 17.24,32.00 17.24,36.01 17.26,36.51 17.33,38.09 17.40,39.66 17.65,40.73 18.01,41.67 18.39,42.65 18.90,43.47 19.72,44.29 20.54,45.11 21.37,45.61 22.33,45.99 23.27,46.36 24.34,46.61 25.92,46.68 27.49,46.75 27.99,46.77 32.01,46.77 36.02,46.77 36.52,46.75 38.09,46.68 39.66,46.61 40.74,46.36 41.68,45.99 42.65,45.62 43.47,45.11 44.29,44.29 45.11,43.47 45.62,42.64 46.00,41.67 46.36,40.74 46.61,39.66 46.68,38.09 46.75,36.51 46.77,36.01 46.77,32.00 46.77,27.99 46.75,27.49 46.68,25.91 46.61,24.34 46.36,23.27 46.00,22.33 45.62,21.35 45.11,20.53 44.29,19.71 43.47,18.89 42.65,18.39 41.68,18.01 40.74,17.64 39.67,17.39 38.09,17.32 36.51,17.26 36.01,17.24 32.00,17.24 Z"
                    />
                  </svg>
                  <span className="visually-hidden">Instagram</span>
                </a>
              </li>

              <li className={styles.footerSocialItem}>
                <a
                  href="https://ok.ru/foundadvita"
                  className={styles.footerSocialLink}
                >
                  <OKIcon className={styles.footerSocialIcon} />
                  <span className="visually-hidden">Одноклассники</span>
                </a>
              </li>

              <li className={styles.footerSocialItem}>
                <a
                  href="https://www.youtube.com/channel/UCIn-l2YYMJp6W9qOa-00dqQ"
                  className={styles.footerSocialLink}
                >
                  <svg
                    viewBox="0 0 64 64"
                    width="64"
                    height="64"
                    className={styles.footerSocialIcon}
                  >
                    <rect width="64" height="64" rx="0" ry="0" fill="#ff3333" />
                    <path
                      fill="white"
                      d="M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z"
                    />
                  </svg>

                  <span className="visually-hidden">YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerRight}>
          <div className={styles.footerLinksColumns}>
            <ul className={styles.footerLinks}>
              <li className={styles.footerLinksItem}>
                <a href="/about" className={styles.footerLink}>
                  О проекте
                </a>
              </li>

              <li className={styles.footerLinksItem}>
                <a href="/faq" className={styles.footerLink}>
                  FAQ
                </a>
              </li>

              <li className={styles.footerLinksItem}>
                <a href="/feedback" className={styles.footerLink}>
                  Обратная связь
                </a>
              </li>

              <li className={styles.footerLinksItem}>
                <a href="/press-release" className={styles.footerLink}>
                  Получить пресс релиз
                </a>
              </li>

              <li className={styles.footerLinksItem}>
                <a href="/report" className={styles.footerLink}>
                  Получить отчет о потраченных средствах
                </a>
              </li>

              <li className={styles.footerLinksItem}>
                <a href="/user-agreement" className={styles.footerLink}>
                  Пользовательское соглашение
                </a>
              </li>
            </ul>

            <ul className={styles.footerLinks}>
              <li className={styles.footerLinksItem}>
                <a
                  href="https://advita.ru/khochu-pomoch/volonterstvo/"
                  className={styles.footerLink}
                >
                  Стать волонтером
                </a>
              </li>

              <li className={styles.footerLinksItem}>
                <a
                  href="https://advita.ru/khochu-pomoch/donorstvo/"
                  className={styles.footerLink}
                >
                  Стать донором
                </a>
              </li>

              <li className={styles.footerLinksItem}>
                <a
                  href="https://advita.ru/khochu-pomoch/partnerskie-programmy-dlya-biznesa/"
                  className={styles.footerLink}
                >
                  Партнерские программы для бизнеса
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.footerContacts}>
            <a
              href="tel:+78123372733"
              className={classNames(
                styles.footerLink,
                styles.footerContactsPhone,
              )}
            >
              +7 (812) 33-727-33
            </a>

            <a
              href="mailto:info@advita.ru"
              className={classNames(
                styles.footerLink,
                styles.footerContactsEmail,
              )}
            >
              info@advita.ru
            </a>

            <address className={styles.footerContactsAddress}>
              197022, Санкт-Петербург, Большой пр. П.С., 77, оф. 2
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
