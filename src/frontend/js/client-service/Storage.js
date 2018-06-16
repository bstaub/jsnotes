/* global localStorage */


export default class Storage {
  constructor(storageKey) {
    this.STORE_KEY = storageKey;
  }

  // Common Methods have to implement in every Service like an Interface start
  addNote(note) {
    //if first entry get empty array [] back!
    const itemArray = this.getItemFromLocalStorage();
    itemArray.push(note);
    this.setItemToLocalStorage(itemArray);
  }

  getNotes(){
    return this.getItemFromLocalStorage();
  }

  getNoteByID(id){
    return this.getNotes().filter((note) => {
      return note.id === parseInt(id)
    })[0]
  }

  updateNote(note) {
    const notes = this.getNotes();

    let index = notes.findIndex((n) => {
      return n.id === note.id;
    });

    const oldNote = notes.splice(index, 1);
    note.createdDate = oldNote[0].createdDate;
    note.isFinished = oldNote[0].isFinished;
    notes.push(note);
    localStorage.setItem(this.STORE_KEY, JSON.stringify(notes));
  }
  // Common Methods have to implement in every Service like an Interface send



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
