import PropTypes from 'prop-types';
import styles from './card.module.css';
import { useState } from 'react';

function Card(props) {
  const [cheked, setCheked] = useState(false); //состояние

  const handleChekedState = () => {
    setCheked(!cheked);
  };


  const [editing, setEditing] = useState(false);

  const handleEditingState = () => { //показать перевод
    setEditing(!editing);
  };

  //редактируемые поля
  const [word, setWord] = useState(props.word);
  const [transcription, setTranscription] = useState(props.transcription);
  const [translation, setTranslation] = useState(props.translation);

  const handleCancelEditState = () => { //сброс
    setWord(props.word);
    setTranscription(props.transcription);
    setTranslation(props.translation);
    setEditing(false);
  };

  return (
    <div className={styles.wrapper} {...props}>
      {editing ? (
        <div>
          <input
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <input
            value={transcription}
            onChange={(e) => setTranscription(e.target.value)}
          />
          <input
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
          />
          <button onClick={handleCancelEditState}>Отменить редактирование</button>
        </div>
      ) : (
        <>
          <p>{props.word}</p>
          <p>{props.transcription}</p>
          {cheked && <p>{props.translation}</p>}
          {!cheked && (
            <button onClick={handleChekedState} className={styles.button}>
              Проверить
            </button>
          )}
          <button onClick={handleEditingState}>Редактировать</button>
        </>
      )}
    </div>
  );
}

Card.propTypes = {
  word: PropTypes.string,
  transcription: PropTypes.string,
  translation: PropTypes.string,
};

export default Card;