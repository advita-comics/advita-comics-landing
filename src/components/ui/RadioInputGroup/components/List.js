import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from '../style.module.css';

function List(props) {
  const { className, children } = props;

  return (
    <ul className={classNames(styles.list, className)}>
      {children}
    </ul>
  );
}

List.defaultProps = {
  className: undefined,
};

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default List;
