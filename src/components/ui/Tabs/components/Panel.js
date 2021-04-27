import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TabContext from '../TabContext';
import styles from '../style.module.css';

function Panel(props) {
  const {
    children,
    name,
    index,
    className,
  } = props;

  const { activeTab, idPrefix, assignRefToPanel } = useContext(TabContext);

  return (
    <section
      ref={assignRefToPanel}
      className={classNames(styles.tabPanel, className)}
      id={name}
      role="tabpanel"
      tabIndex="-1"
      aria-labelledby={`${idPrefix}-tab-${index}`}
      hidden={activeTab === index ? undefined : true}
    >
      {children}
    </section>
  );
}

Panel.defaultProps = {
  className: null,
};

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  index: PropTypes.number,
  className: PropTypes.string,
};

export default Panel;
