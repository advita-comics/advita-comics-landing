import React, { Children, cloneElement } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from '../style.module.css';

function List(props) {
  const { children, className } = props;

  return (
    <ul className={classNames(styles.tabList, className)} role="tablist">
      {Children.map(children, (child, index) => (
        cloneElement(child, { index })
      ))}
    </ul>
  );
}

List.defaultProps = {
  className: null,
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default List;
