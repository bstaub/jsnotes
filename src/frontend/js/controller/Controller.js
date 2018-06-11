import Storage from '../client-service/Storage';
import ViewHelper from '../view/ViewHelper';
import Note from '../model/Note';


export default class Controller {

/*
  constructor(storageKey, noteObj, dataAccess) {
    this.STORE_KEY = storageKey;
    this.noteObj = noteObj;
    this.clientService = clientService
  }
*/


  registerAllEventListener(dom) {
    if (dom.speichern) {
      dom.speichern.addEventListener('click', () => {
        const checkIfEmpty = this.checkIfNoEmptyFields(dom);
        if (checkIfEmpty) {
          const noteDto = this.buildNewNoteEntry(dom);
          const storage = new Storage('notesKey', noteDto);
          storage.addNote();
          ViewHelper.showAlert2Seconds('Eintrag erfolgreich eingetragen', 'alert success', 'index.html');
        }
      });
    }

    if (dom.cancel) {
      dom.cancel.addEventListener('click', () => {
        this.clearAllImputs(dom);
      });
    }
  }

  getAllNotesFromLocalStorage() {
    const storage = new Storage('notesKey');
    return storage.getAllNotesFromLocalStorage();
  }

  clearAllImputs(dom) {
    dom.title.value = '';
    dom.description.value = '';
    dom.importance.value = '';
    dom.datepicker.value = '';
    ViewHelper.wichtigkeitClearAll(dom.stars);
  }

  checkIfNoEmptyFields(dom) {
    if (dom.title.value !== '' && dom.description.value !== '' && dom.importance.value !== '' && dom.datepicker.value !== '') {
      return true;
    }
  }

  saveIDToLocalStorage(id) {
    const storage = new Storage('noteKeyLastID');
    storage.saveNoteIDToLocalStorage(id);
  }

  getIDFromLocalStorage() {
    const storage = new Storage('noteKeyLastID');
    return storage.getNoteIDFromLocalStorage();
  }

  getNewUniqueNoteID() {
    if (this.getIDFromLocalStorage() === null) {
      this.saveIDToLocalStorage(1);
      return 1;
    }
    let id = this.getIDFromLocalStorage();
    id++;
    this.saveIDToLocalStorage(id);
    return this.getIDFromLocalStorage();
  }

  buildNewNoteEntry({
    title, description, importance, datepicker,
  }) {
    const isFinished = false;
    return new Note(
      this.getNewUniqueNoteID(),
      title.value,
      description.value,
      importance.value,
      Storage.setFormatDateDMYhs(datepicker.value),
      Storage.getCreatedDate(),
      isFinished,
    );
  }
}
