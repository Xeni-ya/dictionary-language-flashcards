import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>

      <div className={styles.header__wrapper}>

        <div className={styles.header__inner}>
          <img src="src\assets\img\logo.svg" alt="logo" className={styles.logo} />
          <span className={styles['logo-text']}>Dictionary</span>
        </div>

        <nav className={styles.navbar}>
          <ul className={styles.navbar__items}>
            <li className={styles.navbar__item}>
              <a href="#" className={styles.navbar__link}>Главная</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#" className={styles.navbar__link}>Карточки</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#" className={styles.navbar__link}>Словарь</a>
            </li>
          </ul>
        </nav>

      </div>

    </header>
  );
}

export default Header;