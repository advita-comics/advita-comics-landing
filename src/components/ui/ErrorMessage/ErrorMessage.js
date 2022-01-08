import React from 'react';
import PropTypes from 'prop-types';
import humps from 'humps';
import classNames from 'classnames';
import styles from './style.module.css';

function ErrorMessage(props) {
  const {
    className,
    children,
    position,
  } = props;

  return (
    <aside
      className={classNames(
        styles.errorMessage,
        styles[humps.camelize(`error-message-position-${position}`)],
        className,
      )}
    >
      {children}
    </aside>
  );
}

ErrorMessage.defaultProps = {
  className: '',
  position: 'bottom',
};

ErrorMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['bottom', 'top']),
};

export default ErrorMessage;
