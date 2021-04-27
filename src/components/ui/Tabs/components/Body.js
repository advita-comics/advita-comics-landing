import React, { Children, cloneElement } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from '../style.module.css';

function Body(props) {
  const { children, className } = props;

  return (
    <div className={classNames(styles.tabBody, className)}>
      {Children.map(children, (child, index) => (
        cloneElement(child, { index })
      ))}
    </div>
  );
}

Body.defaultProps = {
  className: null,
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Body;
