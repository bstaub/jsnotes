/* global document */

import Storage from '../client-service/Storage';
import ViewHelper from '../view/ViewHelper';
import Controller from './Controller';


export default class ControllerList {
  registerAllEventListener(dom) {

    if (dom.dynamicList) {
      dom.dynamicList.addEventListener('click', (e) => {
        // console.log("dynamiclist eventobjekt: ",e);

        if (e.target.id === 'listDelete') {
          // Remove Note from Lokalstorage
          const allnotes = this.getAllNotesFromLocalStorage();


          const filteredNotes = allnotes.filter(item => item.id != e.target.dataset.id);

          const storage = new Storage('notesKey');
          storage.removeKeyFromLocalStorage();
          storage.setItemToLocalStorage(filteredNotes);

          // Remove Note From GUI
          e.target.parentElement.parentElement.remove();
        }


        if (e.target.id === 'listEdit') {
          // Enable Textarea Field --> disabled="disabled
          const id = e.target.dataset.id;
          document.querySelector(`[data-description-id="${id}"]`).removeAttribute('disabled');

          const allnotes = this.getAllNotesFromLocalStorage();

          const filteredNote = allnotes.filter(item => item.id == id); /* darf nicht strikt === sein! */


          if (e.target.innerHTML == 'Edit') {
            e.target.innerHTML = 'Save';
            document.querySelector(`[data-description-id="${id}"]`).classList.add('redborder');
          } else if (e.target.innerHTML == 'Save') {
            e.target.innerHTML = 'Edit';
            document.querySelector(`[data-description-id="${id}"]`).classList.remove('redborder');
          }

          // console.log("traverse: ",e.target.parentElement.parentElement.getElementsByClassName('listTitleDescriptionImportance')[0].getElementsByClassName('description')[0].value);
          // console.log("filteredNote[0].description: ",filteredNote[0].description);
          // console.log("zuweisung: ",document.querySelector(`[data-description-id="${id}"]`).value);
          // filteredNote[0].description = "Testing, dies geht!!!";
          filteredNote[0].description = document.querySelector(`[data-description-id="${id}"]`).value; // nicht .innerHMTL!!!!

          const positionStartindex = allnotes.findIndex(item => item.id == id);

          allnotes.splice(positionStartindex, 1, filteredNote[0]);

          const storage = new Storage('notesKey');
          storage.removeKeyFromLocalStorage();
          storage.setItemToLocalStorage(allnotes);
        }

        if (e.target.id === 'checkBoxisFinished') {
          const allnotes = this.getAllNotesFromLocalStorage();

          const filteredNote = allnotes.filter(item => item.id == e.target.dataset.id);

          // Toggle Finished Status
          filteredNote[0].isFinished ? filteredNote[0].isFinished = false : filteredNote[0].isFinished = true;
          const positionStartindex = allnotes.findIndex(item => item.id == e.target.dataset.id); // old way e.target.getAttribute("data-id")

          // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
          allnotes.splice(positionStartindex, 1, filteredNote[0]);

          const storage = new Storage('notesKey');
          storage.removeKeyFromLocalStorage();
          storage.setItemToLocalStorage(allnotes);
        }

        if (e.target.id === '1') {
          ViewHelper.markStars(e.target.parentElement.dataset.id, e.target.id);
          ControllerList.saveStarList(e);
        }
        if (e.target.id === '2') {
          ViewHelper.markStars(e.target.parentElement.dataset.id, e.target.id);
          ControllerList.saveStarList(e);
        }
        if (e.target.id === '3') {
          ViewHelper.markStars(e.target.parentElement.dataset.id, e.target.id);
          ControllerList.saveStarList(e);
        }
        if (e.target.id === '4') {
          ViewHelper.markStars(e.target.parentElement.dataset.id, e.target.id);
          ControllerList.saveStarList(e);
        }
        if (e.target.id === '5') {
          ViewHelper.markStars(e.target.parentElement.dataset.id, e.target.id);
          ControllerList.saveStarList(e);
        }
      });
    }

    if (dom.btnSortByFinishdate) {
      dom.btnSortByFinishdate.addEventListener('click', () => {

      });
    }

    if (dom.btnSortByCreateddate) {
      dom.btnSortByCreateddate.addEventListener('click', () => {

      });
    }

    if (dom.btnSortByImportance) {
      dom.btnSortByImportance.addEventListener('click', () => {


          $(function() {
              //code muss innerhalb jQuery Ready Function stehen!!
              //console.log( "ready!" );
              //https://stackoverflow.com/questions/5309926/how-to-get-the-data-id-attribute?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
              //console.log('xxx1: ',$('.item--main-content .note').find(".importance[data-importance]").attr("data-id")); // will return the string "123"
              //console.log('xxx2: ',$('.item--main-content .note').find(".importance[data-importance]").data('id')); // will return the number 123

              function sortNotesByImportanceDESC(){
                  $('.item--main-content .note').sort(sortImportanceDESC).appendTo('.item--main-content');
              }

              function sortImportanceDESC(a, b) {

                  const importance1  = $(a).find('.importance[data-importance]').data('importance');
                  const importance2 = $(b).find('.importance[data-importance]').data('importance');


                  return importance1 < importance2;
              }

              function sortImportanceASC(a, b) {

                  const importance1  = $(a).find('.importance[data-importance]').data('importance');
                  const importance2 = $(b).find('.importance[data-importance]').data('importance');


                  return importance1 > importance2;
              }

              sortNotesByImportanceDESC();
          });


        // ToDo: Testing sort function!

        //const allnotes = this.getAllNotesFromLocalStorage();
        // console.log('vorher allnotes: ', allnotes);

        // const notesSortedByisFinished = ViewHelper.sortItemsByisFinished(allnotes);  //allnotes object wird by Reference auch geändert!!!
        // console.log(notesSortedByisFinished);

        // const notesSortedByisFinished = ViewHelper.sortItemsByObjKey(allnotes,'isFinished');  //allnotes object wird by Reference auch geändert!!! geht noch nicht!
        // console.log('nachher allnotes: ',notesSortedByisFinished);

        //const notesSortedByisFinished = allnotes.sort(ViewHelper.dynamicSort('description')); // geht!!!
        // console.log('nachher allnotes: ', notesSortedByisFinished);
        // People.sort(dynamicSort("Name"));


        //$(() => {
          // var $all_notes = $('.note');
          // $('.note').sort(note_sort).appendTo('.item--main-content');
          // $('.note').sort(note_sort);

          // callback for search..
          // function note_sort(a, b) {
          // return ($(b).data('position')) < ($(a).data('position')) ? 1 : -1;
          // return ($(b).data('position')) < ($(a).data('position')) ? 1 : -1;
          // console.log($(a));
          // console.log($(a.innerHTML));
          // }
        //});






      });
    }

    if (dom.btnShowFinished) {
      dom.btnShowFinished.addEventListener('click', (e) => {
        /*
                const allnotes = this.getAllNotesFromLocalStorage();

                const filteredNote = allnotes.filter((item) => {
                    return item.isFinished == true;
                });
                */

        // ToDo Bug: Trigger Reload Page, otherwise Toggle Show finished not working korrect, because check finished comes from storage!

        if (e.target.innerHTML == 'Show finished') {
          e.target.innerHTML = 'Show all';
          $('.item--main-content .note:not(.finished)').hide();
        } else if (e.target.innerHTML == 'Show all') {
          e.target.innerHTML = 'Show finished';
          $('.item--main-content .note:not(.finished)').show();
        }

        // const viewList = new ViewList();
        // viewList.generateListView(this.)
      });
    }
  }


  getAllNotesFromLocalStorage() {
    const controller = new Controller();
    const allnotes = controller.getAllNotesFromLocalStorage();
    return allnotes;
  }


  static saveStarList(e) {
    const controller = new Controller();
    const allnotes = controller.getAllNotesFromLocalStorage();

    const filteredNote = allnotes.filter(item => item.id == e.target.parentElement.dataset.id);

    filteredNote[0].importance = e.target.id;

    const positionStartindex = allnotes.findIndex(item => item.id == e.target.parentElement.dataset.id);

    // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    allnotes.splice(positionStartindex, 1, filteredNote[0]);

    const storage = new Storage('notesKey');
    storage.removeKeyFromLocalStorage();
    storage.setItemToLocalStorage(allnotes);
  }
}
