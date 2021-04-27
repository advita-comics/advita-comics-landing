import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './style.module.css';

function H3(props) {
  const {
    className,
    children,
  } = props;

  return (
    <h3
      className={classNames(styles.header, className)}
    >
      {children}
    </h3>
  );
}

H3.defaultProps = {
  className: null,
};

H3.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default H3;
