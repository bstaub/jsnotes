import {Storage} from "../client-service/Storage";
import {ViewHelper} from "../view/ViewHelper";


export class Controller{

    start(){
        console.log('controller is connected');
    }

    registerAllEventListener(dom){
            if(dom.speichern){
                dom.speichern.addEventListener('click', () => {
                    console.log('button speichern, clicked!');

                    let checkIfEmpty = this.checkIfNoEmptyFields(dom);

                    if(checkIfEmpty){
                        const storage = new Storage('notesKey');
                        storage.saveNotesToLocalStorage(dom);
                        ViewHelper.showAlert3Seconds('Eintrag erfolgreich eingetragen','alert success');
                    }
                });
            }

            if(dom.cancel){
                dom.cancel.addEventListener('click', () => {
                    console.log('button cancel, clicked!');

                    this.clearAllImputs(dom);
                });
            }

    }

    getAllNotesFromLocalStorage(){
        console.log('2getAllNotesFromLocalStorage');
        const storage = new Storage('notesKey');
        return storage.getAllNotesFromLocalStorage();
    }

    clearAllImputs(dom){
        dom.title.value = "";
        dom.description.value = "";
        dom.importance.value = "";
        dom.datepicker.value = "";
        ViewHelper.wichtigkeitClearAll(dom.stars);
    }

    checkIfNoEmptyFields(dom){
        if(dom.title.value != "" && dom.description.value != "" && dom.importance.value != "" && dom.datepicker.value != ""){
            return true;
        }
    }





}
