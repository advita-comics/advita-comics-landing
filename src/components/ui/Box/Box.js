import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { capitalizeFirstLetter } from 'helpers/strings';
import styles from './style.module.css';

function Box(props) {
  const { variant, children, className } = props;

  return (
    <props.component
      className={classNames(
        className,
        styles.box,
        styles[`box${capitalizeFirstLetter(variant)}`],
      )}
    >
      {children}
    </props.component>
  );
}

const { oneOf, string, node } = PropTypes;

Box.defaultProps = {
  variant: 'primary',
  className: '',
  component: 'div',
};

Box.propTypes = {
  variant: oneOf(['primary']),
  className: string,
  children: node.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  component: string,
};

export default Box;
