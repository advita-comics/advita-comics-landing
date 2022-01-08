import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import humps from 'humps';
import ErrorMessage from 'components/ui/ErrorMessage';
import styles from './style.module.css';

const RadioInput = forwardRef((props, ref) => {
  const {
    color,
    id,
    label,
    containerComponent,
    containerClassName,
    className,
    labelClassName,
    iconClassName,
    errorMessage,
    errorMessageClassName,
    ...additionalNodeProps
  } = props;

  return (
    <props.containerComponent
      className={
        classNames(
          styles.radio,
          containerClassName,
          {
            [styles[humps.camelize(`radio-color-${color}`)]]: color,
          },
          {
            [styles.radioInvalid]: Boolean(errorMessage),
          },
        )
      }
    >
      {errorMessage && (
        <ErrorMessage className={classNames(
          styles.errorMessage,
          errorMessageClassName,
        )}
        >
          {errorMessage}
        </ErrorMessage>
      )}

      <input
        ref={ref}
        type="radio"
        className={classNames(styles.radioInput, className, 'visually-hidden')}
        id={id}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...additionalNodeProps}
      />

      <label
        htmlFor={id}
        className={classNames(styles.radioLabel, labelClassName)}
      >
        <span className={classNames(styles.radioIcon, iconClassName)} aria-hidden="true" />
        {label}
      </label>
    </props.containerComponent>
  );
});

const {
  string,
  oneOf,
  node,
  oneOfType,
  elementType,
} = PropTypes;

RadioInput.defaultProps = {
  color: 'bunker',
  containerComponent: 'div',
  containerClassName: undefined,
  className: undefined,
  labelClassName: undefined,
  iconClassName: undefined,
  errorMessage: undefined,
  errorMessageClassName: undefined,
};

RadioInput.propTypes = {
  color: oneOf(['bunker', 'white']),
  id: string.isRequired,
  label: node.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  containerComponent: oneOfType([string, elementType]),
  containerClassName: string,
  className: string,
  labelClassName: string,
  iconClassName: string,
  errorMessage: node,
  errorMessageClassName: string,
};

export default RadioInput;
