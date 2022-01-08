import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style.module.css';

function Option(props) {
  const {
    value,
    disabled,
    children,
  } = props;

  return (
    <option
      className={styles.option}
      value={value}
      disabled={disabled}
    >
      {children}
    </option>
  );
}

const {
  oneOfType,
  number,
  string,
  node,
  bool,
} = PropTypes;

Option.defaultProps = {
  disabled: false,
};

Option.propTypes = {
  value: oneOfType([number, string]).isRequired,
  disabled: bool,
  children: node.isRequired,
};

export default Option;
