import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.module.css';

function Container(props) {
  const {
    children,
    className,
    mobileOnly,
    component,
    ...otherProps
  } = props;

  return (
    <props.component
      className={classNames(styles.container, className, {
        [styles.mobileOnlyContainer]: mobileOnly,
      })}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </props.component>
  );
}

Container.defaultProps = {
  component: 'div',
  className: '',
  mobileOnly: false,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  className: PropTypes.string,
  mobileOnly: PropTypes.bool,
};

export default Container;
