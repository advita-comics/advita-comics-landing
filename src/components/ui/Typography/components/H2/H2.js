import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.module.css';

function H2(props) {
  const {
    className,
    children,
  } = props;

  return (
    <h2
      className={classNames(styles.header, className)}
    >
      {children}
    </h2>
  );
}

H2.defaultProps = {
  className: null,
};

H2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default H2;
