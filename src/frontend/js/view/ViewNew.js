import {ViewHelper} from "./ViewHelper";

export class ViewNew{

    start(){
        console.log('view is connected');
    }

    queryAllDomObjects(){
        const DOM = {
            title: document.querySelector("#jsTitle"),
            description : document.querySelector("#jsDescription"),
            importance : document.querySelector('#jsdropImportance'),
            stars : document.querySelectorAll('.importance span'),
            datepicker : document.querySelector('#jsDatepicker'),
            speichern : document.querySelector("#jsSpeichern"),
            cancel : document.querySelector("#jsCancel"),
        };

        ViewHelper.wichtigkeit(DOM);

        if(ViewHelper.checkDomNoNullValueExist(DOM)){
            return DOM;
        }

    }






}

