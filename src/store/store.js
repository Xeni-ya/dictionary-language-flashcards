import { v4 as uuidv4 } from 'uuid';
import { makeAutoObservable } from 'mobx';
import { createContext } from 'react';

class Word {
  id = uuidv4();
  text = '';
  definition = '';

  constructor(text, definition) {
    makeAutoObservable(this);
    this.text = text;
    this.definition = definition;
  }
}

class WordStore {
  words = [];

  constructor() {
    makeAutoObservable(this);
  }

  addWord(text, definition) {
    this.words.push(new Word(text, definition));
  }

  removeWord(id) {
    this.words = this.words.filter((word) => word.id !== id);
  }
}

export const wordStore = new WordStore();
export const WordStoreContext = createContext(wordStore);