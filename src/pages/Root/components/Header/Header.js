import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import logoSrc from './assets/logo.png';
import styles from './style.module.css';

function Header(props) {
  const {
    className,
  } = props;

  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

  const toggleNavigationMenu = useCallback(() => {
    setIsNavigationMenuOpen((prevState) => !prevState);
  }, []);

  return (
    <header className={classNames(styles.header, className)}>
      <div className={classNames('container', styles.headerInner)}>
        <a
          href="https://advita.ru"
          className={styles.logoWrapper}
          rel="noopener noreferrer"
        >
          <img
            className={styles.logo}
            src={logoSrc}
            alt="Логотип 'AdVita'"
            width="64"
            height="64"
          />
          <span className="visually-hidden">
            Перейти на сайт AdVita.
          </span>
        </a>

        <nav className={classNames(styles.navigationMenu, {
          [styles.navigationMenuOpen]: isNavigationMenuOpen,
        })}
        >
          <ul className={styles.siteNavigationLinks}>
            <li className={styles.siteNavigationItem}>
              <a
                href="/about"
                className={styles.siteNavigationLink}
              >
                O проекте
              </a>
            </li>
            <li className={styles.siteNavigationItem}>
              <a
                href="/project-goals"
                className={styles.siteNavigationLink}
              >
                Цели проекта
              </a>
            </li>
            <li className={styles.siteNavigationItem}>
              <a
                href="/feedback"
                className={styles.siteNavigationLink}
              >
                Обратная связь
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className={classNames(
            'button button_for-service',
            styles.toggleNavigationMenu,
            {
              [styles.toggleNavigationMenuActive]: isNavigationMenuOpen,
            },
          )}
          onClick={toggleNavigationMenu}
        >
          <span className="visually-hidden">
            Открыть/Закрыть навигационное меню.
          </span>
        </button>
      </div>
    </header>
  );
}

Header.defaultProps = {
  className: '',
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
