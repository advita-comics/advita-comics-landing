import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { capitalizeFirstLetter } from 'helpers/strings';
import styles from './style.module.css';

function Button(props) {
  const {
    type,
    className,
    variant,
    component,
    append,
    prepend,
    hideText,
    children,
    ...aditionalProps
  } = props;

  return (
    <props.component
      type={component === 'button' ? type : undefined}
      className={classNames(styles.button, className, {
        [styles[`button${capitalizeFirstLetter(variant)}`]]: variant,
        [styles.buttonForService]: hideText,
      })}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...aditionalProps}
    >
      {prepend && <span className={styles.buttonPrepend}>{prepend}</span>}

      {hideText ? (
        <span className="visually-hidden">{children}</span>
      ) : (
        children
      )}

      {append && <span className={styles.buttonAppend}>{append}</span>}
    </props.component>
  );
}

Button.defaultProps = {
  type: 'button',
  component: 'button',
  className: null,
  variant: null,
  append: null,
  prepend: null,
  hideText: false,
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary']),
  component: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  append: PropTypes.node,
  prepend: PropTypes.node,
  hideText: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
export default Button;
