/* global document */
import ViewHelper from './ViewHelper';
import Controller from '../controller/Controller';
import Storage from '../client-service/Storage';

// Modern Way Solution with TemplateString Teamplate
// import listTemplateWithTemplateString from '../template/listTemplateWithTemplateString';

// Handlebars requires jQuery also in webpack base config! (must use in this project)
const listTemplate = require('../template/listTemplate.hbs');

class ViewList {
  static queryAllDomObjects() {
    const DOMString = {
      // "btnCreateNewNote" is just an a link to the Detail Page, i don't register here!
      dropStyleSwitcher: document.querySelector('#dropStyleSwitcher'),
      btnSortByFinishdate: document.querySelector('#btnSortByFinishdate'),
      btnSortByCreateddate: document.querySelector('#btnSortByCreateddate'),
      btnSortByImportance: document.querySelector('#btnSortByImportance'),
      btnShowFinished: document.querySelector('#btnShowFinished'),
      dynamicList: document.querySelector('.item--main-content'),

    };

    ViewHelper.styleSwitcher(DOMString);
    return DOMString;
  }

  generateListView({ dynamicList }) {

    const controller = new Storage('notesKey');
    const allnotes = controller.getAllNotesFromLocalStorage();

    ////const controller = new Controller();
    ////const allnotes = controller.getAllNotesFromLocalStorage();

    if (dynamicList) {
      // listTemplateWithTemplateString(dynamicList,allnotes);
      dynamicList.innerHTML = listTemplate(allnotes); // webpack precompile the template code, i use this, because i don't have a 'notes' key in the root json structure!
    }
  }
}

export default ViewList;