/*
NotesStorage.js: Modul, welches alle Funktionalitäten beinhaltet,
welche benötigt werden um die Notes zu verwalten z.B. folgende Funktionen:
- GetNotes(orderBy, filterBy)
- AddNote(note)
- UpdateNote(note)
- GetNoteById(id)
! Wichtig: Der Store darf kein Zugriff auf den DOM haben.
! Hinweis: Dieses Modul ist das M von MVC
*/

//import Storage from '../client-service/Storage';
//import HTTPService from '../client-service/HttpService';
import ViewHelper from '../view/ViewHelper';
import Note from '../model/Note';


export default class Controller {

  constructor(clientService) {
    this.clientService = clientService;
  }

  registerAllEventListener(dom) {
    if (dom.speichern) {
      dom.speichern.addEventListener('click', () => {
        const checkIfEmpty = this.checkIfNoEmptyFields(dom);
        if (checkIfEmpty) {
          const noteDto = Note.buildNewNoteEntry(dom);
          this.clientService.addNote(noteDto);
          //ViewHelper.showAlert2Seconds('Eintrag erfolgreich eingetragen', 'alert success', 'index.html');
        }
      });
    }

    if (dom.cancel) {
      dom.cancel.addEventListener('click', () => {
        this.clearAllImputs(dom);
      });
    }
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

}
