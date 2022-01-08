/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import humps from 'humps';
import ErrorMessage from 'components/ui/ErrorMessage';
import styles from './style.module.css';

const TextInput = forwardRef((props, ref) => {
  const {
    id,
    htmlType,
    color,
    className,
    label,
    labelClassName,
    containerComponent,
    containerClassName,
    errorMessage,
    errorMessageClassName,
    ...additionalNodeProps
  } = props;

  return (
    <props.containerComponent
      className={classNames(
        styles.input,
        containerClassName,
        {
          [styles[humps.camelize(`input-color-${color}`)]]: color,
        },
        {
          [styles.inputInvalid]: Boolean(errorMessage),
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
        className={classNames(styles.inputLabel, labelClassName)}
      >
        {label}
      </label>

      <input
        ref={ref}
        type={htmlType}
        className={classNames(styles.inputInner, className)}
        id={id}
        {...additionalNodeProps}
      />
    </props.containerComponent>
  );
});

TextInput.defaultProps = {
  htmlType: 'text',
  color: 'bunker',
  className: '',
  labelClassName: '',
  containerComponent: 'div',
  containerClassName: '',
  errorMessageClassName: '',
  errorMessage: null,
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  htmlType: PropTypes.string,
  color: PropTypes.oneOf(['bunker', 'white']),
  className: PropTypes.string,
  label: PropTypes.node.isRequired,
  labelClassName: PropTypes.string,
  containerComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  containerClassName: PropTypes.string,
  errorMessageClassName: PropTypes.string,
  errorMessage: PropTypes.node,
};

export default TextInput;
