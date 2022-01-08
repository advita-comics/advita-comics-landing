import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import humps from 'humps';
import ErrorMessage from 'components/ui/ErrorMessage';
import styles from './style.module.css';

const CheckboxInput = forwardRef((props, ref) => {
  const {
    color,
    id,
    label,
    containerClassName,
    className,
    labelClassName,
    errorMessage,
    errorMessageClassName,
    containerComponent,
    iconClassName,
    ...additionalNodeProps
  } = props;

  return (
    <props.containerComponent
      className={
        classNames(
          styles.checkbox,
          containerClassName,
          {
            [styles[humps.camelize(`checkbox-color-${color}`)]]: color,
          },
          {
            [styles.checkboxInvalid]: Boolean(errorMessage),
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
        type="checkbox"
        className={classNames(styles.checkboxInput, className, 'visually-hidden')}
        id={id}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...additionalNodeProps}
      />

      <label
        htmlFor={id}
        className={classNames(styles.checkboxLabel, labelClassName)}
      >
        <span
          className={classNames(
            styles.checkboxIcon,
            iconClassName,
          )}
          aria-hidden="true"
        />
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

CheckboxInput.defaultProps = {
  color: 'bunker',
  containerComponent: 'div',
  containerClassName: undefined,
  className: undefined,
  labelClassName: undefined,
  errorMessage: undefined,
  errorMessageClassName: undefined,
  iconClassName: '',
};

CheckboxInput.propTypes = {
  color: oneOf(['bunker', 'white']),
  id: string.isRequired,
  label: node.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  containerComponent: oneOfType([string, elementType]),
  containerClassName: string,
  className: string,
  labelClassName: string,
  errorMessage: node,
  errorMessageClassName: string,
  iconClassName: string,
};

export default CheckboxInput;
