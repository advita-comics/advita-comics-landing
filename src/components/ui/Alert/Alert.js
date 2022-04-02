import React, {
  useEffect,
  useState,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import humps from 'humps';
import {
  SuccessIcon,
  ErrorIcon,
  WarningIcon,
  InfoIcon,
} from './icons';
import styles from './style.module.css';

const SEVERITIES_TO_ICONS = {
  error: ErrorIcon,
  success: SuccessIcon,
  warning: WarningIcon,
  info: InfoIcon,
};

function getAlertAttributes(severity) {
  const attributes = {
    role: 'status',
    'aria-live': 'polite',
  };

  if (severity === 'error') {
    attributes.role = 'alert';
    attributes['aria-live'] = 'assertive';
  }

  return attributes;
}

function Alert(props) {
  const {
    className,
    severity,
    msToClose,
    children,
    block,
  } = props;

  const [canUseDOM, setCanUseDOM] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const removeAlert = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    setCanUseDOM(true);
  }, []);

  useEffect(() => {
    let timerId;

    if (!block) {
      timerId = setTimeout(removeAlert, msToClose);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [removeAlert, msToClose, block]);

  const IconComponent = SEVERITIES_TO_ICONS[severity];

  let content;

  if (block) {
    content = (
      <div
        className={classNames(
          className,
          styles.alert,
          styles.alertBlock,
          styles[humps.camelize(`alert-${severity}`)],
        )}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...getAlertAttributes(severity)}
      >
        <IconComponent />

        <div className={styles.alertBody}>
          {children}
        </div>
      </div>
    );
  } else {
    content = canUseDOM && isOpen ? ReactDOM.createPortal(
      <div
        className={classNames(
          className,
          styles.alert,
          styles[humps.camelize(`alert-${severity}`)],
          'app-level-notifications__item',
        )}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...getAlertAttributes(severity)}
      >
        <IconComponent />

        <div className={styles.alertBody}>
          {children}
        </div>
      </div>,
      document.querySelector('.app-level-notifications'),
    ) : null;
  }

  return content;
}

const {
  oneOf,
  number,
  string,
  bool,
} = PropTypes;

Alert.defaultProps = {
  severity: 'success',
  msToClose: 5000,
  className: '',
  block: false,
};

Alert.propTypes = {
  severity: oneOf(['error', 'success', 'warning', 'info']),
  msToClose: number,
  className: string,
  block: bool,
};

export default Alert;
