import Storage from '../client-service/Storage';
import ViewHelper from '../view/ViewHelper';
import Note from '../model/Note';
const moment = require('moment');


export default class Controller {
  registerAllEventListener(dom) {
    if (dom.speichern) {
      dom.speichern.addEventListener('click', () => {
        const checkIfEmpty = this.checkIfNoEmptyFields(dom);
        if (checkIfEmpty) {
          const noteDto = this.buildNewNoteEntry(dom);
          const storage = new Storage('notesKey', noteDto);
          storage.saveNoteToLocalStorage();
          ViewHelper.showAlert3Seconds('Eintrag erfolgreich eingetragen', 'alert success');
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
      this.setFormatDateDMYhs(datepicker.value),
      this.getCreatedDate(),
      isFinished,
    );
  }

  getCreatedDate(){
    let d = new Date();
    return this.formatDate(d);

  }
  setFormatDateDMYhs(dateLocal){
    let d = new Date(dateLocal);
    return this.formatDate(d);
  }

  formatDate(d){
      return (d.getDate() < 10 ? '0': '') + d.getDate()  + "-" + (d.getMonth() < 10 ? '0': '') + (d.getMonth()+1) + "-" + d.getFullYear() + " " + (d.getHours() < 10 ? '0': '') + d.getHours() + ":" + (d.getMinutes() < 10 ? '0': '') + d.getMinutes(); // 27-05-2018 18:13
  }

  getCreatedDateMomentJs(){
      this.MomentJsLocale();
      return moment().format('LLLL'); // Sonntag, 27. Mai 2018 22:33
  }
  setFormatDateDMYhsMomentJs(dateLocal){
      this.MomentJsLocale();
      return moment(dateLocal).format('LLLL'); // Sonntag, 27. Mai 2018 22:33
  }

  MomentJsLocale(){
      return moment.locale('de-ch');
  }

}
