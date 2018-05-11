import {Storage} from "../client-service/Storage";

export class Controller{

    start(){
        console.log('controller is connected');
    }

    registerAllEventListener(dom){
            dom.speichern.addEventListener('click', () => {
                console.log('button speichern, clicked!');

                let checkIfEmpty = this.checkIfNoEmptyFields(dom);

                if(checkIfEmpty){
                    const storage = new Storage('notesKey1');
                    storage.saveNotesToLocalStorage(dom);
                }
            });

            dom.cancel.addEventListener('click', () => {
                console.log('button cancel, clicked!');

                this.clearAllImputs(dom);
            });
    }

    clearAllImputs(dom){
        dom.title.value = "";
        dom.description.value = "";
        dom.importance.value = "";
        dom.datepicker.value = "";
    }

    checkIfNoEmptyFields(dom){
        if(dom.title.value != "" && dom.description.value != "" && dom.importance.value != "" && dom.datepicker.value != ""){
            return true;
        }
    }





}
