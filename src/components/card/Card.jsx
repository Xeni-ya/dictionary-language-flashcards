import styles from './card.module.css';

function Card() {
  return (
    <div className={styles.wrapper}>
      <button className="carousel-control "></button>
      <button className="carousel-control "></button>
    </div>
  );
}

export default Card