/* global document */

import ViewHelper from './ViewHelper';

export default class ViewNew {
  static queryAllDomObjects() {
    const DOM = {
      title: document.querySelector('#jsTitle'),
      description: document.querySelector('#jsDescription'),
      importance: document.querySelector('#jsdropImportance'),
      stars: document.querySelectorAll('.importance span'),
      datepicker: document.querySelector('#jsDatepicker'),
      speichern: document.querySelector('#jsSpeichern'),
      cancel: document.querySelector('#jsCancel'),
    };

    ViewHelper.wichtigkeit(DOM);

    return DOM;
  }
}

