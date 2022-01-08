import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import humps from 'humps';
import ErrorMessage from 'components/ui/ErrorMessage';
import styles from './style.module.css';

const NativeSelect = forwardRef((props, ref) => {
  const {
    id,
    label,
    labelClassName,
    className,
    containerClassName,
    children,
    color,
    errorMessage,
    errorMessageClassName,
    ...additionalNodeProps
  } = props;

  return (
    <div
      className={classNames(
        styles.select,
        containerClassName,
        {
          [styles[humps.camelize(`select-color-${color}`)]]: color,
        },
        {
          [styles.selectInvalid]: Boolean(errorMessage),
        },
      )}
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

      <label
        htmlFor={id}
        className={classNames(styles.selectLabel, labelClassName)}
      >
        {label}
      </label>

      <select
        ref={ref}
        className={classNames(styles.selectInner, className)}
        id={id}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...additionalNodeProps}
      >
        {children}
      </select>
    </div>
  );
});

const {
  string,
  node,
  oneOf,
} = PropTypes;

NativeSelect.defaultProps = {
  color: 'bunker',
  containerClassName: '',
  labelClassName: '',
  className: '',
  errorMessage: undefined,
  errorMessageClassName: '',
};

NativeSelect.propTypes = {
  color: oneOf(['bunker', 'white']),
  containerClassName: string,
  labelClassName: string,
  id: string.isRequired,
  label: node.isRequired,
  className: string,
  children: node.isRequired,
  errorMessage: node,
  errorMessageClassName: string,
};

export default NativeSelect;
