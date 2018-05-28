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

          // Test DOM Traversing ugly stuff..
          // console.log("traverse: ",e.target.parentElement.parentElement.getElementsByClassName('listTitleDescriptionImportance')[0].getElementsByClassName('description')[0].value);

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
          ControllerList.markstars(e);
        }
        if (e.target.id === '2') {
          ControllerList.markstars(e);
        }
        if (e.target.id === '3') {
          ControllerList.markstars(e);
        }
        if (e.target.id === '4') {
          ControllerList.markstars(e);
        }
        if (e.target.id === '5') {
          ControllerList.markstars(e);
        }


      });
    }

    if (dom.btnSortByFinishdate) {
      dom.btnSortByFinishdate.addEventListener('click', () => {

          $(function() { //must use in ready function!

              function sortNotesByFinishedDateASC(){
                  $('.item--main-content .note').sort(sortFinishedDateASC).appendTo('.item--main-content');
              }

              function sortFinishedDateASC(a, b) {
                  const finished1  = $(a).find('p[data-finished]').data('finished');
                  const finished2 = $(b).find('p[data-finished]').data('finished');

                  console.log("1",new Date(finished1));
                  console.log("2",new Date(finished2));


                  return new Date(finished1) > new Date(finished2);
              }

              sortNotesByFinishedDateASC();
          });

      });
    }

    if (dom.btnSortByCreateddate) {
      dom.btnSortByCreateddate.addEventListener('click', () => {

          $(function() {

              function sortNotesByCreatedDateASC(){
                  $('.item--main-content .note').sort(sortCreatedDateASC).appendTo('.item--main-content');
              }

              function sortCreatedDateASC(a, b) {
                  const created1  = $(a).attr('data-created');
                  const created2 = $(b).data('created');

                  return created1 > created2;
              }

              sortNotesByCreatedDateASC();
          });

      });
    }

    if (dom.btnSortByImportance) {
      dom.btnSortByImportance.addEventListener('click', () => {


          $(function() {
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


        // ToDo: Testing sort function without jQuery!

        //const allnotes = this.getAllNotesFromLocalStorage();
        // console.log('vorher allnotes: ', allnotes);

        // const notesSortedByisFinished = ViewHelper.sortItemsByisFinished(allnotes);  //allnotes object wird by Reference auch geändert!!!
        // console.log(notesSortedByisFinished);

        // const notesSortedByisFinished = ViewHelper.sortItemsByObjKey(allnotes,'isFinished');  //allnotes object wird by Reference auch geändert!!! geht noch nicht!
        // console.log('nachher allnotes: ',notesSortedByisFinished);

        //const notesSortedByisFinished = allnotes.sort(ViewHelper.dynamicSort('description')); // geht!!!
        // console.log('nachher allnotes: ', notesSortedByisFinished);
        // People.sort(dynamicSort("Name"));


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


  static markstars(e){
      ViewHelper.markStars(e.target.parentElement.dataset.id, e.target.id);
      ControllerList.saveStarList(e);
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
