/* global localStorage */

export default class Storage {
  constructor(storageKey) {
    this.STORE_KEY = storageKey;
  }

  addNote(note) {
    // if first entry get empty array [] back!
    const itemArray = this.getItemFromLocalStorage();
    itemArray.push(note);
    this.setItemToLocalStorage(itemArray);
  }

  getNotes() {
    return this.getItemFromLocalStorage();
  }

  getNoteByID(id) {
    return this.getNotes().filter(note => note.id === parseInt(id))[0];
  }

  updateNote(note) {
    const notes = this.getNotes();

    const index = notes.findIndex(n => n.id === note.id);

    const oldNote = notes.splice(index, 1);
    note.createdDate = oldNote[0].createdDate;
    note.isFinished = oldNote[0].isFinished;
    notes.push(note);
    localStorage.setItem(this.STORE_KEY, JSON.stringify(notes));
  }

  getItemFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.STORE_KEY)) || [];
  }

  setItemToLocalStorage(items) {
    localStorage.setItem(this.STORE_KEY, JSON.stringify(items));
  }

  saveStyleToLocalStorage(style) {
    this.setItemToLocalStorage(style);
  }

  saveNoteIDToLocalStorage(id) {
    this.setItemToLocalStorage(id);
  }

  getNoteIDFromLocalStorage() {
    return this.getItemFromLocalStorage();
  }

  removeKeyFromLocalStorage() {
    localStorage.removeItem(this.STORE_KEY);
  }
}
