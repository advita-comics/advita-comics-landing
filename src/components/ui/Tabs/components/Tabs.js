import React, { useState, useRef, useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import TabContext from '../TabContext';
import styles from '../style.module.css';

function Tabs(props) {
  const { className, defaultActiveTab, children } = props;

  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const idPrefix = useRef(Math.random().toString(36).slice(-8));

  const panelRefs = useRef([]);
  const tabRefs = useRef([]);

  const switchTab = useCallback((newActiveTab) => {
    if (activeTab !== newActiveTab) {
      setActiveTab(newActiveTab);

      tabRefs.current[newActiveTab].focus();
    }
  }, [activeTab]);

  const handleTabKeyDown = useCallback((event, tabIndex) => {
    let newActiveTab = null;

    switch (event.key) {
      case 'Down':
      case 'ArrowDown':
        panelRefs.current[tabIndex].focus();
        break;
      case 'Left':
      case 'ArrowLeft':
        newActiveTab = tabIndex - 1;

        newActiveTab = newActiveTab < 0 ? tabRefs.current.length - 1 : newActiveTab;
        break;
      case 'Right':
      case 'ArrowRight':
        newActiveTab = tabIndex + 1;

        newActiveTab = newActiveTab > tabRefs.current.length - 1 ? 0 : newActiveTab;
        break;
      default:
        break;
    }

    if (newActiveTab !== null) {
      event.preventDefault();

      switchTab(newActiveTab);
    }
  }, [switchTab]);

  const assignRefToPanel = useCallback((node) => {
    panelRefs.current.push(node);
  }, []);

  const assignRefToTab = useCallback((node) => {
    tabRefs.current.push(node);
  }, []);

  const childrenProps = {
    activeTab,
    handleTabClick: switchTab,
    handleTabKeyDown,
    assignRefToPanel,
    assignRefToTab,
    idPrefix: idPrefix.current,
  };

  return (
    <TabContext.Provider value={childrenProps}>
      <div className={classNames(styles.tabs, className)}>{children}</div>
    </TabContext.Provider>
  );
}

Tabs.defaultProps = {
  className: '',
  defaultActiveTab: 0,
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  defaultActiveTab: PropTypes.number,
  className: PropTypes.string,
};

export default Tabs;
