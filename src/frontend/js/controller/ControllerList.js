import {Storage} from "../client-service/Storage";
import {ViewHelper} from "../view/ViewHelper";
import {Controller} from "./Controller";


export class ControllerList{

    registerAllEventListener(dom){
        if(dom.dynamicList){
            dom.dynamicList.addEventListener('click', (e) => {
                //console.log('dynamic list clicked');
                console.log(e);

                if(e.target.id === "listDelete"){
                    console.log('ListDelete Clicked!');

                    //Remove Note from Lokalstorage
                    const controller = new Controller();
                    const allnotes = controller.getAllNotesFromLocalStorage();

                    const filteredNotes = allnotes.filter((item) => {
                        return item.id != e.target.getAttribute("data-id");
                    });
                    console.log("filter",filteredNotes);

                    const storage = new Storage('notesKey');
                    storage.removeKeyFromLocalStorage();
                    storage.setItemToLocalStorage(filteredNotes);

                    //Remove Note From GUI
                    e.target.parentElement.parentElement.remove();

                }

                if(e.target.id === "listEdit"){
                    console.log('ListEdit Clicked!');
                    console.log(e.target.getAttribute("data-id"));

                }

            });
        }


    }


}
