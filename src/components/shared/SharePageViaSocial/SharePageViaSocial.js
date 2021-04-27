import React from 'react';
import PropTypes from 'prop-types';
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

function SharePageViaSocial(props) {
  const { className } = props;

  return (
    <ul className={classNames(styles.list, className)}>
      <li className={styles.listItem}>
        <FacebookShareButton
          url={window.location.href}
          quote="Lorem ipsum quote!"
          className={styles.socialButton}
          resetButtonStyle={false}
        >
          <span className="visually-hidden">Share using Facebook</span>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </li>

      <li className={styles.listItem}>
        <MailruShareButton
          url={window.location.href}
          title="Lorem ipsum title"
          description="Lorem ipsum desc"
          className={styles.socialButton}
          resetButtonStyle={false}
        >
          <span className="visually-hidden">Share using Mail.ru</span>
          <MailruIcon size={32} round />
        </MailruShareButton>
      </li>

      <li className={styles.listItem}>
        <OKShareButton
          url={window.location.href}
          title="Lorem ipsum title"
          description="Lorem ipsum desc"
          className={styles.socialButton}
          resetButtonStyle={false}
        >
          <span className="visually-hidden">Share using Odnoklassniki</span>
          <OKIcon size={32} round />
        </OKShareButton>
      </li>

      <li className={styles.listItem}>
        <TelegramShareButton
          url={window.location.href}
          className={styles.socialButton}
          resetButtonStyle={false}
        >
          <span className="visually-hidden">Share using Telegram</span>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </li>

      <li className={styles.listItem}>
        <TwitterShareButton
          url={window.location.href}
          className={styles.socialButton}
          resetButtonStyle={false}
        >
          <span className="visually-hidden">Share using Twitter</span>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </li>

      <li className={styles.listItem}>
        <VKShareButton
          url={window.location.href}
          className={styles.socialButton}
          resetButtonStyle={false}
        >
          <span className="visually-hidden">Share using Vk</span>
          <VKIcon size={32} round />
        </VKShareButton>
      </li>
    </ul>
  );
}

SharePageViaSocial.defaultProps = {
  className: null,
};

SharePageViaSocial.propTypes = {
  className: PropTypes.string,
};

export default SharePageViaSocial;
