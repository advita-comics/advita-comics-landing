import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { capitalizeFirstLetter } from 'helpers/strings';
import styles from './style.module.css';

function ProgressBar(props) {
  const {
    children,
    value,
    max,
    className,
    variant,
  } = props;

  return (
    <progress
      className={classNames(styles.progress, className, {
        [styles[`progress${capitalizeFirstLetter(variant)}`]]: variant,
      })}
      value={value}
      max={max}
    >
      {children}
    </progress>
  );
}

ProgressBar.defaultProps = {
  value: null,
  max: null,
  className: null,
  variant: null,
};

ProgressBar.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.number,
  max: PropTypes.number,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary']),
};

export default ProgressBar;
