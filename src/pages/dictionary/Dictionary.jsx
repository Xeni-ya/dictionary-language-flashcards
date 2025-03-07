import styles from './dictionary.module.css';
import { words } from './../dictionary/wordsList';
import { useState } from 'react';
import { observer } from 'mobx-react';

const Dictionary = observer(() => {

  const [editingIndex, setEditingIndex] = useState();
  const [editValues, setEditValues] = useState({});

  const editingFields = (e) => { //редактирование полей
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
  };

  const editing = (index) => {
    setEditingIndex(index);
    setEditValues(words[index]);
  };

  const save = () => {
    setEditingIndex(-1);
  };
  const cancel = () => {
    setEditingIndex(-1);
    setEditValues({});
  };
  return (
    <>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.table__header}>
              <th>Слово</th>
              <th>Транскрипция</th>
              <th>Перевод</th>
              <th>#Тег</th>
              <th>Действия</th>
            </tr>
            <tr className={styles.adding__input}>
              <th><input type="text" /></th>
              <th><input type="text" /></th>
              <th><input type="text" /></th>
              <th><input type="text" /></th>
              <th className={styles.btn__action}>
                <button onClick={save} className={styles.btn__action_save}></button>
                <button className={styles.btn__action_edit}></button>
                <button className={styles.btn__action_delete}></button>
              </th>
            </tr>
          </thead>
          <tbody>
            {words.map((item, index) => {
              return (
                <tr key={index} id={item.id}>
                  <td>
                    {editingIndex === index ? (
                      <input
                        type="text"
                        name="english"
                        value={editValues.english}
                        onChange={editingFields}
                      />) : (
                      item.english
                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <input
                        type="text"
                        name="transcription"
                        value={editValues.transcription}
                        onChange={editingFields}
                      />
                    ) : (
                      item.transcription
                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <input
                        type="text"
                        name="russian"
                        value={editValues.russian}
                        onChange={editingFields}
                      />
                    ) : (
                      item.russian
                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <input
                        type="text"
                        name="tags"
                        value={editValues.tags}
                        onChange={editingFields}
                      />
                    ) : (
                      item.tags
                    )}
                  </td>
                  <td className={styles.btn__action}>
                    {editingIndex === index ? (
                      <button onClick={cancel} className={styles.btn__action_delete}></button>
                    ) : (
                      <button onClick={() => editing(index)} className={styles.btn__action_edit}></button>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </>
  );
});

export default Dictionary;