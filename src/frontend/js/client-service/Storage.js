/* global localStorage */
const moment = require('moment');


export default class Storage {
  constructor(storageKey, noteObj) {
    this.STORE_KEY = storageKey;
    this.noteObj = noteObj;
  }

  addNote() {
    //if first entry get empty array [] back!
    const itemArray = this.getItemFromLocalStorage();
    itemArray.push(this.noteObj);
    this.setItemToLocalStorage(itemArray);
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

  getAllNotesFromLocalStorage() {
    return this.getItemFromLocalStorage();
  }

  // get notes object from local storage and parse JSON or set new Array
  getItemFromLocalStorage() {
    return JSON.parse(localStorage.getItem(this.STORE_KEY)) || [];
  }

  setItemToLocalStorage(items) {
    localStorage.setItem(this.STORE_KEY, JSON.stringify(items));
  }

  removeKeyFromLocalStorage() {
    localStorage.removeItem(this.STORE_KEY);
  }

  static getCreatedDate() {
    const d = new Date();
    return this.formatDate(d);
  }
  static setFormatDateDMYhs(dateLocal) {
    const d = new Date(dateLocal);
    return Storage.formatDate(d);
  }

  static formatDate(d) {
    return `${(d.getDate() < 10 ? '0' : '') + d.getDate()}-${d.getMonth() < 10 ? '0' : ''}${d.getMonth() + 1}-${d.getFullYear()} ${d.getHours() < 10 ? '0' : ''}${d.getHours()}:${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}`; // 27-05-2018 18:13
  }

  // static getCreatedDateMomentJs(){
  //     Storage.MomentJsLocale();
  //     return moment().format('LLLL'); // Sonntag, 27. Mai 2018 22:33
  // }
  // static setFormatDateDMYhsMomentJs(dateLocal){
  //     Storage.MomentJsLocale();
  //     return moment(dateLocal).format('LLLL'); // Sonntag, 27. Mai 2018 22:33
  // }
  //
  // static MomentJsLocale(){
  //     return moment.locale('de-ch');
  // }
}
