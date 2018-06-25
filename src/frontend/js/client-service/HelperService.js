// const moment = require('moment');
import Storage from './Storage';

export default class HelperService {
  static getNewUniqueNoteID() {
    if (HelperService.getIDFromLocalStorage() === null) {
      HelperService.saveIDToLocalStorage(1);
      return 1;
    }
    let id = HelperService.getIDFromLocalStorage();
    id++;
    HelperService.saveIDToLocalStorage(id);
    return HelperService.getIDFromLocalStorage();
  }

  static saveIDToLocalStorage(id) {
    const storage = new Storage('noteKeyLastID');
    storage.saveNoteIDToLocalStorage(id);
  }

  static getIDFromLocalStorage() {
    const storage = new Storage('noteKeyLastID');
    return storage.getNoteIDFromLocalStorage();
  }

  static getCreatedDate() {
    const d = new Date();
    return HelperService.formatDate(d);
  }

  static setFormatDateDMYhs(dateLocal) {
    const d = new Date(dateLocal);
    return HelperService.formatDate(d);
  }

  static formatDate(d) {
    return `${(d.getDate() < 10 ? '0' : '') + d.getDate()}-${d.getMonth() < 9 ? '0' : ''}${d.getMonth() + 1}-${d.getFullYear()} ${d.getHours() < 10 ? '0' : ''}${d.getHours()}:${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}`; // 27-05-2018 18:13
  }

  // moment.js is not used in this project!
  // static getCreatedDateMomentJs(){
  //     HelperService.MomentJsLocale();
  //     return moment().format('LLLL'); // Sonntag, 27. Mai 2018 22:33
  // }
  // static setFormatDateDMYhsMomentJs(dateLocal){
  //     HelperService.MomentJsLocale();
  //     return moment(dateLocal).format('LLLL'); // Sonntag, 27. Mai 2018 22:33
  // }
  //
  // static MomentJsLocale(){
  //     return moment.locale('de-ch');
  // }
}
