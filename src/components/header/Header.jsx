import styles from './header.module.css';

function Header() {
  return (
    <header>
      <div className={styles.wrapper}>
        <div className={styles['inner-left']}>
          <img src="./assets/img/logo.png" alt="logo" className={styles.logo} />
          <span className={styles['logo-text']}>Словарик</span>
        </div>

        <div className={styles['inner-center']}>
          <nav className={styles.navbar}>
            <ul className={styles.navbar__items}>
              <li className={styles.navbar__item}>
                Главная
              </li>
              <li className={styles.navbar__item}>
                Карточки
              </li>
              <li className={styles.navbar__item}>
                Словарь
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;