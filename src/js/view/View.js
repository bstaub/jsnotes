import {ViewHelper} from "./ViewHelper";

export class View{

    start(){
        console.log('view is connected');
    }

    queryAllDomObjects(){
        const DOM = {
            title: document.querySelector("#jsTitle"),
            description : document.querySelector("#jsDescription"),
            importance : document.querySelector('#jsdropImportance'),
            datepicker : document.querySelector('#jsDatepicker'),
            speichern : document.querySelector("#jsSpeichern"),
            cancel : document.querySelector("#jsCancel"),
        };


        if(ViewHelper.checkDomNoNullValueExist(DOM)){
            return DOM;
        }

        /*
        if(DOM.title  || DOM.description || DOM.speichern || DOM.cancel){
            return DOM;
        }
        */

    }




}

