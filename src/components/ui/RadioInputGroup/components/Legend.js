import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '../style.module.css';

function Legend(props) {
  const { className, children } = props;

  return (
    <legend
      className={classNames(styles.legend, className)}
    >
      {children}
    </legend>
  );
}

Legend.defaultProps = {
  className: undefined,
};

Legend.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Legend;
