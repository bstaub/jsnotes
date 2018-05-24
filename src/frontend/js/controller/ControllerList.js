import {Storage} from "../client-service/Storage";
import {ViewHelper} from "../view/ViewHelper";
import {Controller} from "./Controller";


export class ControllerList{
    registerAllEventListener(dom){
        if(dom.dynamicList){
            dom.dynamicList.addEventListener('click', (e) => {
                //console.log("dynamiclist eventobjekt: ",e);

                if(e.target.id === "listDelete"){

                    //Remove Note from Lokalstorage
                    const controller = new Controller();
                    const allnotes = controller.getAllNotesFromLocalStorage();

                    const filteredNotes = allnotes.filter((item) => {
                        return item.id != e.target.dataset.id;
                    });

                    const storage = new Storage('notesKey');
                    storage.removeKeyFromLocalStorage();
                    storage.setItemToLocalStorage(filteredNotes);

                    //Remove Note From GUI
                    e.target.parentElement.parentElement.remove();

                }


                if(e.target.id === "listEdit"){

                    //Enable Textarea Field --> disabled="disabled
                    const id = e.target.dataset.id;
                    document.querySelector(`[data-description-id="${id}"]`).removeAttribute("disabled");

                    const controller = new Controller();
                    const allnotes = controller.getAllNotesFromLocalStorage();


                    const filteredNote = allnotes.filter((item) => {
                        return item.id == id;
                    });


                    if(e.target.innerHTML == 'Edit'){
                        e.target.innerHTML = 'Save';
                        document.querySelector(`[data-description-id="${id}"]`).classList.add('redborder');
                    }else if(e.target.innerHTML == 'Save'){
                        e.target.innerHTML = 'Edit';
                        document.querySelector(`[data-description-id="${id}"]`).classList.remove('redborder');
                    }

                    //console.log("traverse: ",e.target.parentElement.parentElement.getElementsByClassName('listTitleDescriptionImportance')[0].getElementsByClassName('description')[0].value);
                    //console.log("filteredNote[0].description: ",filteredNote[0].description);
                    //console.log("zuweisung: ",document.querySelector(`[data-description-id="${id}"]`).value);
                    //filteredNote[0].description = "Testing, dies geht!!!";
                    filteredNote[0].description = document.querySelector(`[data-description-id="${id}"]`).value;  //nicht .innerHMTL!!!!

                    const position_startindex = allnotes.findIndex(item => item.id == id);

                    allnotes.splice(position_startindex,1,filteredNote[0]);

                    const storage = new Storage('notesKey');
                    storage.removeKeyFromLocalStorage();
                    storage.setItemToLocalStorage(allnotes);

                }

                if(e.target.id === "checkBoxisFinished"){

                    const controller = new Controller();
                    const allnotes = controller.getAllNotesFromLocalStorage();


                    const filteredNote = allnotes.filter((item) => {
                        return item.id == e.target.dataset.id;
                    });

                    //Toggle Finished Status
                    filteredNote[0].isFinished ? filteredNote[0].isFinished = false : filteredNote[0].isFinished = true;

                    const position_startindex = allnotes.findIndex(item => item.id == e.target.dataset.id); //old way e.target.getAttribute("data-id")

                    //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
                    allnotes.splice(position_startindex,1,filteredNote[0]);

                    const storage = new Storage('notesKey');
                    storage.removeKeyFromLocalStorage();
                    storage.setItemToLocalStorage(allnotes);

                }

                if(e.target.id == "1"){
                    ViewHelper.markStars(e.target.parentElement.dataset.id,e.target.id);
                    ControllerList.saveStarList(e);
                }
                if(e.target.id == "2"){
                    ViewHelper.markStars(e.target.parentElement.dataset.id,e.target.id);
                    ControllerList.saveStarList(e);
                }
                if(e.target.id == "3"){
                    ViewHelper.markStars(e.target.parentElement.dataset.id,e.target.id);
                    ControllerList.saveStarList(e);
                }
                if(e.target.id == "4"){
                    ViewHelper.markStars(e.target.parentElement.dataset.id,e.target.id);
                    ControllerList.saveStarList(e);
                }
                if(e.target.id == "5"){
                    ViewHelper.markStars(e.target.parentElement.dataset.id,e.target.id);
                    ControllerList.saveStarList(e);
                }


            });
        }


    }

    static saveStarList(e){
        const controller = new Controller();
        const allnotes = controller.getAllNotesFromLocalStorage();


        const filteredNote = allnotes.filter((item) => {
            return item.id == e.target.parentElement.dataset.id;
        });

        filteredNote[0].importance = e.target.id;

        const position_startindex = allnotes.findIndex(item => item.id == e.target.parentElement.dataset.id);

        //https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
        allnotes.splice(position_startindex,1,filteredNote[0]);

        const storage = new Storage('notesKey');
        storage.removeKeyFromLocalStorage();
        storage.setItemToLocalStorage(allnotes);
    }


}
