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
          // showAlert2Seconds executes only for LocalStorage
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
