// import Card from './components/card/Card.jsx';
import styles from './dictionary.module.css';

const words = [
  { "id": "33090", "english": "treat", "transcription": "[ triːt ]", "russian": "угощение", "tags": "", "tags_json": "[\"\"]" },
  { "id": "33091", "english": "reading", "transcription": "[ ˈriːdɪŋ ]", "russian": "чтение", "tags": "hobby", "tags_json": "[\"hobby\"]" },
  { "id": "33114", "english": "packager", "transcription": "[ˈpækɪdʒər]", "russian": "упаковщик", "tags": "Work", "tags_json": "[\"Work\"]" },
  { "id": "33120", "english": "computer", "transcription": "[kəmˈpjuːtə]", "russian": "компьютер", "tags": "Vocabulary", "tags_json": "[\"Vocabulary\"]" },
  { "id": "33121", "english": "thunderstorm", "transcription": "[ ˈθʌndərstɔːrm ]", "russian": "гроза", "tags": "weather", "tags_json": "[\"weather\"]" },
  { "id": "33122", "english": "fog", "transcription": "[ ˈfɑːɡ ]", "russian": "туман", "tags": "weather", "tags_json": "[\"weather\"]" },
  { "id": "33123", "english": "rain", "transcription": "[ reɪn ]", "russian": "дождь", "tags": "weather", "tags_json": "[\"weather\"]" },
  { "id": "33124", "english": "curious", "transcription": "[ ˈkjʊrɪəs ]", "russian": "любопытный", "tags": "emotions", "tags_json": "[\"emotions\"]" },
  { "id": "33126", "english": "grateful", "transcription": "[ ɡreɪtfl ]", "russian": "благодарный", "tags": "emotions", "tags_json": "[\"emotions\"]" },
  { "id": "33128", "english": "witch", "transcription": "[ wɪtʃ ]", "russian": "ведьма", "tags": "halloween", "tags_json": "[\"halloween\"]" },
  { "id": "33131", "english": "brouhaha", "transcription": "[ˈbruːhɑːhɑː]", "russian": "шумиха", "tags": " ", "tags_json": "[\" \"]" },
  { "id": "33132", "english": "patience", "transcription": "[ˈpeɪʃns]", "russian": "терпение", "tags": " ", "tags_json": "[\" \"]" },
  { "id": "33133", "english": "star", "transcription": "[stɑːr]", "russian": "звезда", "tags": " ", "tags_json": "[\" \"]" },
  { "id": "33134", "english": "toast", "transcription": "[təʊst]", "russian": "тост", "tags": " ", "tags_json": "[\" \"]" },
  { "id": "33135", "english": "bamboozle", "transcription": "[bamˈbuːzl]", "russian": "одурачить", "tags": " emotions", "tags_json": "[\" emotions\"]" },
  { "id": "33137", "english": "success", "transcription": "[səkˈses]", "russian": "успех", "tags": "success", "tags_json": "[\"success\"]" },
  { "id": "33138", "english": "word", "transcription": "[w3:d]", "russian": "слово", "tags": "1", "tags_json": "[\"1\"]" }
];

const Dictionary = () => {
  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th>Категория</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {words.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.english}</td>
                <td>{item.transcription}</td>
                <td>{item.russian}</td>
                <td>{item.tags}</td>
                <td>
                  <button>Редактировать</button>
                  <button>Удалить</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
}

export default Dictionary;