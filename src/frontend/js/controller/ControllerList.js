/* global document */
import ViewHelper from '../view/ViewHelper';
import Storage from '../client-service/Storage';
import HttpService from '../client-service/HttpService';

export default class ControllerList {
  constructor(clientService) {
    this.clientService = clientService;
    if (this.clientService instanceof HttpService) {
      this.api = true;
    } else {
      this.api = false; // Use Storage.js Service for LocalStorage
    }
  }

  registerAllEventListener(dom) {
    if (dom.dynamicList) {
      dom.dynamicList.addEventListener('click', (e) => {
        // console.log("dynamiclist eventobjekt: ",e);

        if (e.target.id === 'listDelete') {
          if (this.api) {
            this.clientService.deleteNote(e.target.dataset.id);
            e.target.parentElement.parentElement.remove();
          } else {
            // LocalStorage
            const allnotes = this.clientService.getNotes();
            const filteredNotes = allnotes.filter(item => item.id != e.target.dataset.id);
            this.clientService.removeKeyFromLocalStorage();
            this.clientService.setItemToLocalStorage(filteredNotes);
            // Remove from GUI
            e.target.parentElement.parentElement.remove();
          }
        }


        if (e.target.id === 'listEdit') {
          if (this.api) {
            // Enable Textarea Field --> disabled="disabled
            const id = e.target.dataset.id;
            document.querySelector(`[data-description-id="${id}"]`).removeAttribute('disabled');

            /* don't use strict === here */
            if (e.target.innerHTML == 'Edit') {
              e.target.innerHTML = 'Save';
              document.querySelector(`[data-description-id="${id}"]`).classList.add('redborder');
            } else if (e.target.innerHTML == 'Save') {
              e.target.innerHTML = 'Edit';
              document.querySelector(`[data-description-id="${id}"]`).classList.remove('redborder');
            }

            const note = {
              // id: 'note active, neDB creates its own _id!',
              title: document.querySelector(`[data-title-id="${id}"]`).innerText,
              description: document.querySelector(`[data-description-id="${id}"]`).value,
              importance: document.querySelector(`.importance[data-id="${id}"]`).dataset.importance,
              datepicker: document.querySelector(`[data-id="${id}"][data-finished]`).dataset.finished,
              createdDate: document.querySelector(`[data-id="${id}"][data-created]`).dataset.created,
              isFinished: document.querySelector(`#checkBoxisFinished[data-id="${id}"]`).checked,
            };
            this.clientService.updateNoteById(e.target.dataset.id, note);
          } else {
            // LocalStorage
            // Enable Textarea Field --> disabled="disabled
            const id = e.target.dataset.id;
            document.querySelector(`[data-description-id="${id}"]`).removeAttribute('disabled');

            const allnotes = this.clientService.getNotes();
            const filteredNote = allnotes.filter(item => item.id == id);

            /* don't use strict === here */
            if (e.target.innerHTML == 'Edit') {
              e.target.innerHTML = 'Save';
              document.querySelector(`[data-description-id="${id}"]`).classList.add('redborder');
            } else if (e.target.innerHTML == 'Save') {
              e.target.innerHTML = 'Edit';
              document.querySelector(`[data-description-id="${id}"]`).classList.remove('redborder');
            }

            filteredNote[0].description = document.querySelector(`[data-description-id="${id}"]`).value;

            const positionStartindex = allnotes.findIndex(item => item.id == id);
            allnotes.splice(positionStartindex, 1, filteredNote[0]);
            this.clientService.removeKeyFromLocalStorage();
            this.clientService.setItemToLocalStorage(allnotes);
          }
        }

        if (e.target.id === 'checkBoxisFinished') {
          const id = e.target.dataset.id;
          document.querySelector(`.note[data-id="${id}"]`).classList.toggle('finished');

          if (this.api) {
            const checkBoxStatus = document.querySelector(`#checkBoxisFinished[data-id="${id}"]`).checked;
            console.log('anfang ', checkBoxStatus);
            this.clientService.toggleCheckBox(id, checkBoxStatus);
          } else {
            const allnotes = this.clientService.getNotes();

            const filteredNote = allnotes.filter(item => item.id == e.target.dataset.id);
            filteredNote[0].isFinished ? filteredNote[0].isFinished = false : filteredNote[0].isFinished = true;
            const positionStartindex = allnotes.findIndex(item => item.id == e.target.dataset.id); // old way e.target.getAttribute("data-id")

            allnotes.splice(positionStartindex, 1, filteredNote[0]);

            this.clientService.removeKeyFromLocalStorage();
            this.clientService.setItemToLocalStorage(allnotes);
          }
        }

        // Check Target for Markstars 1-5
        for (let i = 1; i <= 5; i++) {
          if (e.target.id === String(i)) {
            this.markstars(e);
          }
        }
      });
    }

    if (dom.btnSortByFinishdate) {
      dom.btnSortByFinishdate.addEventListener('click', () => {
        $(() => { // must use in ready function!
          function sortNotesByFinishedDateASC() {
            $('.item--main-content .note').sort(sortFinishedDateASC).appendTo('.item--main-content');
          }

          function sortFinishedDateASC(a, b) {
            const finished1 = $(a).find('p[data-finished]').data('finished');
            const finished2 = $(b).find('p[data-finished]').data('finished');

            // return new Date(finished1) > new Date(finished2);
            return finished1 > finished2;
          }

          sortNotesByFinishedDateASC();
        });
      });
    }

    if (dom.btnSortByCreateddate) {
      dom.btnSortByCreateddate.addEventListener('click', () => {
        $(() => {
          function sortNotesByCreatedDateASC() {
            $('.item--main-content .note').sort(sortCreatedDateASC).appendTo('.item--main-content');
          }

          function sortCreatedDateASC(a, b) {
            const created1 = $(a).attr('data-created');
            const created2 = $(b).data('created');

            return created1 > created2;
          }

          sortNotesByCreatedDateASC();
        });
      });
    }

    if (dom.btnSortByImportance) {
      dom.btnSortByImportance.addEventListener('click', () => {
        $(() => {
          function sortNotesByImportanceDESC() {
            $('.item--main-content .note').sort(sortImportanceDESC).appendTo('.item--main-content');
          }

          function sortImportanceDESC(a, b) {
            const importance1 = $(a).find('.importance[data-importance]').data('importance');
            const importance2 = $(b).find('.importance[data-importance]').data('importance');

            return importance1 < importance2;
          }

          function sortNotesByImportanceASC() {
            $('.item--main-content .note').sort(sortImportanceASC).appendTo('.item--main-content');
          }

          function sortImportanceASC(a, b) {
            const importance1 = $(a).find('.importance[data-importance]').data('importance');
            const importance2 = $(b).find('.importance[data-importance]').data('importance');

            return importance1 > importance2;
          }

          const toggle = document.querySelector('#btnSortByImportance').classList.toggle('toggle');
          if (toggle == false) {
            sortNotesByImportanceASC();
          } else {
            sortNotesByImportanceDESC();
          }
        });
      });
    }

    if (dom.btnShowFinished) {
      dom.btnShowFinished.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'Show finished') {
          e.target.innerHTML = 'Show all';
          $('.item--main-content .note:not(.finished)').hide();
        } else if (e.target.innerHTML == 'Show all') {
          e.target.innerHTML = 'Show finished';
          $('.item--main-content .note:not(.finished)').show();
        }
      });
    }
  }


  markstars(e) {
    const viewhelper = new ViewHelper();
    viewhelper.markStars(e.target.parentElement.dataset.id, e.target.id);

    this.saveStarList(e);
  }


  saveStarList(e) {
    if (this.api) {
      const note = { importance: e.target.id };
      this.clientService.patchNote(e.target.parentElement.dataset.id, note);
    } else {
      const allnotes = this.clientService.getNotes();
      console.log(allnotes);

      const filteredNote = allnotes.filter(item => item.id == e.target.parentElement.dataset.id);

      filteredNote[0].importance = e.target.id;

      const positionStartindex = allnotes.findIndex(item => item.id == e.target.parentElement.dataset.id);

      allnotes.splice(positionStartindex, 1, filteredNote[0]);

      this.clientService.removeKeyFromLocalStorage();
      this.clientService.setItemToLocalStorage(allnotes);
    }
  }
}
