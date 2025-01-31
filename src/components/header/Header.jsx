import styles from './header.module.css';
import { Link } from 'react-router-dom';

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
              <Link to="/" className={styles.navbar__link}>Главная</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/cards" className={styles.navbar__link}>Карточки</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link to="/dictionary" className={styles.navbar__link}>Словарь</Link>
            </li>
          </ul>
        </nav>

      </div>

    </header>
  );
}

export default Header;