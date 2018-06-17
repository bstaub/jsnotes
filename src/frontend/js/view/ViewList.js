/* global document */
import ViewHelper from './ViewHelper';
import HttpService from "../client-service/HttpService";
import Storage from "../client-service/Storage";

// Modern Way Solution with TemplateString Teamplate
// import listTemplateWithTemplateString from '../template/listTemplateWithTemplateString';

// Handlebars requires jQuery also in webpack base config! (must use in this project)
const listTemplate = require('../template/listTemplate.hbs');
const listTemplate_api_id = require('../template/listTemplate_api_id.hbs');

class ViewList {

  constructor(clientService) {
    this.clientService = clientService;
  }

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

    if(this.clientService instanceof Storage){
      const allnotes = this.clientService.getNotes();
      if (dynamicList) {
        // listTemplateWithTemplateString(dynamicList,allnotes);
        dynamicList.innerHTML = listTemplate(allnotes); // webpack precompile the template code, i use this, because i don't have a 'notes' key in the root json structure!
      }
    }


    if(this.clientService instanceof HttpService){
      this.clientService.getNotes(function(response){  //callback response from HttpService -> getNotes(callback)!
        if (dynamicList) {
          dynamicList.innerHTML = listTemplate_api_id(response);
        }
      });
    }


  }
}

export default ViewList;