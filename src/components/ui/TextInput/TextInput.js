import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from 'helpers/strings/index';
import styles from './style.module.css';

const TextInput = forwardRef((props, ref) => {
  const {
    variant,
    id,
    name,
    label,
    onChange,
    onBlur,
    value,
    defaultValue,
    containerClassName,
    className,
    labelClassName,
    htmlType,
    inputMode,
    placeholder,
    min,
    errorMessage,
  } = props;

  return (
    <props.containerComponent
      className={classNames(styles.input, containerClassName, {
        [styles[`input${capitalizeFirstLetter(variant)}`]]: variant,
      })}
    >
      <label
        htmlFor={id}
        className={classNames(styles.inputLabel, labelClassName)}
      >
        {label}
      </label>

      <input
        ref={ref}
        type={htmlType}
        inputMode={inputMode}
        className={classNames(styles.inputInner, className)}
        id={id}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        min={min}
      />

      {errorMessage && <aside className={styles.errorMessage}>{errorMessage}</aside>}
    </props.containerComponent>
  );
});

TextInput.defaultProps = {
  variant: 'primary',
  name: undefined,
  onChange: undefined,
  onBlur: undefined,
  value: undefined,
  defaultValue: undefined,
  containerComponent: 'div',
  containerClassName: undefined,
  className: undefined,
  labelClassName: undefined,
  htmlType: 'text',
  placeholder: undefined,
  inputMode: undefined,
  min: undefined,
  errorMessage: undefined,
};

TextInput.propTypes = {
  variant: PropTypes.oneOfType(['primary']),
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  containerComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  htmlType: PropTypes.string,
  placeholder: PropTypes.string,
  inputMode: PropTypes.string,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  errorMessage: PropTypes.node,
};

TextInput.displayName = 'TextInput';

export default TextInput;
