import PropTypes from 'prop-types';
import styles from './card.module.css';
import { useState } from 'react';

function Card(props) {
  const [cheked, setCheked] = useState(false);

  const handleChekedState = () => {
    setCheked(!cheked);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles['card-wrap']} {...props}>
        <p>{props.word}</p>
        <p>{props.transcription}</p>
        {cheked && <p>{props.translation}</p>}
        {!cheked && (
          <button onClick={handleChekedState} className={styles.button}>
            Проверить
          </button>
        )}
      </div>
    </div>

  );
}

Card.propTypes = {
  word: PropTypes.string,
  transcription: PropTypes.string,
  translation: PropTypes.string,
};

export default Card;