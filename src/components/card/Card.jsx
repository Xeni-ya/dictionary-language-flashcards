import PropTypes from 'prop-types';
import styles from './card.module.css';
import { useState } from 'react';

function Card(props) {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleChekedState = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className={styles.wrapper} {...props}>
      <p>{props.word}</p>
      <p>{props.translation}</p>
      <button onClick={handleChekedState}>
        {showTranslation ? 'Скрыть перевод' : 'Показать перевод'}
      </button>
    </div>
  );
}

Card.propTypes = {
  word: PropTypes.string,
  translation: PropTypes.string,
};

export default Card