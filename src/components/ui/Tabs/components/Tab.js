import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TabContext from '../TabContext';
import styles from '../style.module.css';

function Tab(props) {
  const {
    children,
    index,
    to,
    className,
    containerClassName,
  } = props;

  const {
    idPrefix,
    activeTab,
    assignRefToTab,
    handleTabClick,
    handleTabKeyDown,
  } = useContext(TabContext);

  function handleClick(event) {
    event.preventDefault();

    handleTabClick(index);
  }

  function handleKeyDown(event) {
    handleTabKeyDown(event, index);
  }

  return (
    <li
      className={classNames(styles.tabItem, containerClassName)}
      role="presentation"
    >
      <a
        ref={assignRefToTab}
        className={classNames(styles.tabLink, className)}
        href={to}
        role="tab"
        id={`${idPrefix}-tab-${index}`}
        tabIndex={activeTab === index ? undefined : '-1'}
        aria-selected={activeTab === index ? 'true' : undefined}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {children}
      </a>
    </li>
  );
}

Tab.defaultProps = {
  className: null,
  containerClassName: null,
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  index: PropTypes.number,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
};

export default Tab;
