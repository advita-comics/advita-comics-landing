import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import classNames from 'classnames';
import { H2 } from 'components/ui/Typography';
import Button from 'components/ui/Button';
import styles from './style.module.css';

function Drawer(props) {
  const {
    isOpen,
    className,
    overlayClassName,
    children,
    title,
    onClose,
  } = props;

  return (
    <Modal
      isOpen={isOpen}
      className={classNames(styles.drawer, className)}
      overlayClassName={classNames(styles.overlay, overlayClassName)}
    >
      <header className={styles.header}>
        <H2 className={styles.title}>{title}</H2>

        <Button className={styles.closeBtn} hideText onClick={onClose}>
          Закрыть модальное окно
          {title}
        </Button>
      </header>

      <div className={styles.body}>{children}</div>
    </Modal>
  );
}

Drawer.defaultProps = {
  className: null,
  overlayClassName: null,
};

Drawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  overlayClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Drawer;
