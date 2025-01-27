import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles['inner-left']}>
          <img src="src\assets\img\speech-svgrepo-com.svg" alt="logo" className={styles.logo} />
          <span className={styles['logo-text']}>Dictionary</span>
        </div>

        <div>
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