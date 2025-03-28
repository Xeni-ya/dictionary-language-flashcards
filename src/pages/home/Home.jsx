import styles from './home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <main className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.content__title}>Учить языки интуитивно</h1>
          <div className={styles.line}></div>
          <p className={styles.content__text}>
            Приложение помогает учить иностранные слова с помощью карточек. Удобный дизайн и интерактивный подход делают процесс запоминания слов увлекательным. Можно скрывать и показывать перевод, переключаться между карточками
          </p>
        </div>

        <img src="src\assets\img\main.png" alt="Картинка главного экрана" className={styles.block__img} />
      </main>
    </>
  );
}

export default Home;