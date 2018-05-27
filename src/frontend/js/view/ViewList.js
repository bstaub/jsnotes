/* global document */
import ViewHelper from './ViewHelper';
import Controller from '../controller/Controller';

// Modern Way Solution with TemplateString Teamplate
//import listTemplateWithTemplateString from '../template/listTemplateWithTemplateString';

// Handlebars requires jQuery also in webpack base config! (must use in this project)
const listTemplate = require('../template/listTemplate.hbs');

export default class ViewList {
  static queryAllDomObjects() {
    const DOM = {
      // Create new Note is just an a link!
      dropStyleSwitcher: document.querySelector('#dropStyleSwitcher'),
      btnSortByFinishdate: document.querySelector('#btnSortByFinishdate'),
      btnSortByCreateddate: document.querySelector('#btnSortByCreateddate'),
      btnSortByImportance: document.querySelector('#btnSortByImportance'),
      btnShowFinished: document.querySelector('#btnShowFinished'),
      dynamicList: document.querySelector('.item--main-content'),

    };

    ViewHelper.styleSwitcher(DOM);
    return DOM;
  }

  generateListView({ dynamicList }) {
    const controller = new Controller();
    const allnotes = controller.getAllNotesFromLocalStorage();

    if(dynamicList){
        //listTemplateWithTemplateString(dynamicList,allnotes);
        dynamicList.innerHTML = listTemplate(allnotes); // webpack precompile the template code, i use this, because i don't have a 'notes' key in the root json structure!
    }

  }
}
