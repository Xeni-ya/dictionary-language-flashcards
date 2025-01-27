import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>&copy; 2025 Языковые Карточки. Все права защищены.</p>
    </footer>
  );
}

export default Footer;