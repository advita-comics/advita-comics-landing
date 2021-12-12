import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import classNames from 'classnames';
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

  const drawerHeaderRef = useRef(null);
  const scrollToTopBtnRef = useRef(null);

  function handleScrollToTopClick() {
    const drawerHeaderNode = drawerHeaderRef.current;

    drawerHeaderNode.scrollIntoView();
  }

  function onAfterOpen() {
    const drawerHeaderNode = drawerHeaderRef.current;
    const scrollToTopBtnNode = scrollToTopBtnRef.current;

    function callback(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          scrollToTopBtnNode.classList.remove(styles.scrollToTopBtnShow);
        } else {
          scrollToTopBtnNode.classList.add(styles.scrollToTopBtnShow);
        }
      });
    }

    const observer = new IntersectionObserver(callback);

    observer.observe(drawerHeaderNode);
  }

  return (
    <Modal
      isOpen={isOpen}
      className={classNames(styles.drawer, className)}
      overlayClassName={classNames(styles.overlay, overlayClassName)}
      onAfterOpen={onAfterOpen}
    >
      <header ref={drawerHeaderRef} className={styles.header}>
        <h2 className={classNames('h2', styles.title)}>{title}</h2>

        <button
          type="button"
          className={classNames('button button_for-service', styles.closeBtn)}
          onClick={onClose}
        >
          <span className="visually-hidden">Закрыть модальное окно</span>
        </button>
      </header>

      <div className={styles.body}>{children}</div>

      <button
        ref={scrollToTopBtnRef}
        type="button"
        className={classNames('button button_primary', styles.scrollToTopBtn)}
        onClick={handleScrollToTopClick}
      >
        <span className="visually-hidden">
          Прокрутить к началу страницы
        </span>
      </button>
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
