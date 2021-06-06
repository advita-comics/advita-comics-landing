import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { capitalizeFirstLetter } from 'helpers/strings/index';
import styles from './style.module.css';

const NativeSelect = forwardRef((props, ref) => {
  const {
    variant,
    containerClassName,
    labelClassName,
    id,
    label,
    className,
    value,
    defaultValue,
    onChange,
    onBlur,
    name,
    disabled,
    children,
    errorMessage,
  } = props;

  return (
    <div
      className={classNames(styles.container, containerClassName, {
        [styles[`select${capitalizeFirstLetter(variant)}`]]: variant,
      })}
    >
      <label
        htmlFor={id}
        className={classNames(styles.label, labelClassName)}
      >
        {label}
      </label>

      <select
        ref={ref}
        className={classNames(styles.select, className)}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        id={id}
        name={name}
        disabled={disabled}
      >
        {children}
      </select>

      {errorMessage && <aside className={styles.errorMessage}>{errorMessage}</aside>}
    </div>
  );
});

const {
  string,
  bool,
  node,
  func,
} = PropTypes;

NativeSelect.defaultProps = {
  variant: 'primary',
  containerClassName: '',
  labelClassName: '',
  className: '',
  value: undefined,
  defaultValue: undefined,
  onChange: null,
  onBlur: null,
  name: null,
  disabled: false,
  errorMessage: undefined,
};

NativeSelect.propTypes = {
  variant: PropTypes.oneOf(['primary']),
  containerClassName: string,
  labelClassName: string,
  id: string.isRequired,
  label: string.isRequired,
  className: string,
  value: string,
  defaultValue: string,
  onChange: func,
  onBlur: func,
  name: string,
  disabled: bool,
  children: node.isRequired,
  errorMessage: node,
};

export default NativeSelect;
