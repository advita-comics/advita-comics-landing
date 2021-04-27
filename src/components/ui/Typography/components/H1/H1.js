import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.module.css';

function H1(props) {
  const {
    className,
    children,
  } = props;

  return (
    <h1
      className={classNames(styles.header, className)}
    >
      {children}
    </h1>
  );
}

H1.defaultProps = {
  className: null,
};

H1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default H1;
