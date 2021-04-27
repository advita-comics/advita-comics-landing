import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from 'helpers/strings';
import styles from '../style.module.css';

function RadioInputGroup(props) {
  const {
    variant,
    className,
    children,
    errorMessage,
  } = props;

  return (
    <fieldset
      className={classNames(styles.radioInputGroup, className, {
        [styles[`radioInputGroup${capitalizeFirstLetter(variant)}`]]: variant,
      })}
    >
      {children}
      {errorMessage && <aside className={styles.errorMessage}>{errorMessage}</aside>}
    </fieldset>
  );
}

RadioInputGroup.defaultProps = {
  variant: undefined,
  className: undefined,
  errorMessage: undefined,
};

RadioInputGroup.propTypes = {
  variant: PropTypes.oneOf(['primary']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  errorMessage: PropTypes.node,
};

export default RadioInputGroup;
