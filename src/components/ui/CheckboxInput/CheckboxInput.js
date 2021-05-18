import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from 'helpers/strings/index';
import styles from './style.module.css';

const CheckboxInput = forwardRef((props, ref) => {
  const {
    variant,
    id,
    name,
    label,
    checked,
    onChange,
    onBlur,
    value,
    containerClassName,
    className,
    labelClassName,
  } = props;

  return (
    <props.containerComponent
      className={classNames(styles.checkbox, containerClassName, {
        [styles[`checkbox${capitalizeFirstLetter(variant)}`]]: variant,
      })}
    >
      <input
        ref={ref}
        type="checkbox"
        className={classNames(styles.checkboxInput, className, 'visually-hidden')}
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />

      <label
        htmlFor={id}
        className={classNames(styles.checkboxLabel, labelClassName)}
      >
        <span className={styles.checkboxIcon} aria-hidden="true" />
        {label}
      </label>
    </props.containerComponent>
  );
});

CheckboxInput.defaultProps = {
  variant: 'primary',
  name: undefined,
  checked: undefined,
  onChange: undefined,
  onBlur: undefined,
  value: undefined,
  containerComponent: 'div',
  containerClassName: undefined,
  className: undefined,
  labelClassName: undefined,
};

CheckboxInput.propTypes = {
  variant: PropTypes.oneOf(['primary']),
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.node.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  containerComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
};

export default CheckboxInput;
