import {Storage} from "../client-service/Storage";
import {ViewHelper} from "../view/ViewHelper";


export class Controller{

    start(){
        console.log('controller is connected');
    }

    registerAllEventListener(dom){
            if(dom.speichern){
                dom.speichern.addEventListener('click', () => {
                    console.log('speichern, clicked!');

                    let checkIfEmpty = this.checkIfNoEmptyFields(dom);
                    if(checkIfEmpty){
                        const storage = new Storage('notesKey');
                        storage.saveNotesToLocalStorage(dom);
                        ViewHelper.showAlert3Seconds('Eintrag erfolgreich eingetragen','alert success');

                        // füge jeder Notiz eine eindeutige ID hinzu
                        if(this.getIDFromLocalStorage() === null){
                            this.saveIDToLocalStorage(1);
                        }else{
                            let id = this.getIDFromLocalStorage();
                            id++;
                            this.saveIDToLocalStorage(id);
                        }
                    }

                });
            }

            if(dom.cancel){
                dom.cancel.addEventListener('click', () => {
                    console.log('cancel, clicked!');

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

    saveIDToLocalStorage(id){
        const storage = new Storage('noteKeyLastID');
        storage.saveNoteIDToLocalStorage(id);
    }

    getIDFromLocalStorage(){
        const storage = new Storage('noteKeyLastID');
        return storage.getNoteIDFromLocalStorage();
    }





}
