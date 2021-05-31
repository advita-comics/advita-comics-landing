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
          url="/"
          quote="Lorem ipsum quote!"
          className={styles.socialButton}
          resetButtonStyle={false}
        >
          <span className="visually-hidden">Share using Facebook</span>
          <FacebookIcon />
        </FacebookShareButton>
      </li>

      <li className={styles.listItem}>
        <MailruShareButton
          url="/"
          title="Lorem ipsum title"
          description="Lorem ipsum desc"
          className={styles.socialButton}
          resetButtonStyle={false}
        >
          <span className="visually-hidden">Share using Mail.ru</span>
          <MailruIcon />
        </MailruShareButton>
      </li>

      <li className={styles.listItem}>
        <OKShareButton
          url="/"
          title="Lorem ipsum title"
          description="Lorem ipsum desc"
          className={styles.socialButton}
          resetButtonStyle={false}
        >
          <span className="visually-hidden">Share using Odnoklassniki</span>
          <OKIcon />
        </OKShareButton>
      </li>

      <li className={styles.listItem}>
        <TelegramShareButton
          url="/"
          className={styles.socialButton}
          resetButtonStyle={false}
        >
          <span className="visually-hidden">Share using Telegram</span>
          <TelegramIcon />
        </TelegramShareButton>
      </li>

      <li className={styles.listItem}>
        <TwitterShareButton
          url="/"
          className={styles.socialButton}
          resetButtonStyle={false}
        >
          <span className="visually-hidden">Share using Twitter</span>
          <TwitterIcon />
        </TwitterShareButton>
      </li>

      <li className={styles.listItem}>
        <VKShareButton
          url="/"
          className={styles.socialButton}
          resetButtonStyle={false}
        >
          <span className="visually-hidden">Share using Vk</span>
          <VKIcon />
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
