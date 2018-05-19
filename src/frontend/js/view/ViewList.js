import {ViewHelper} from "./ViewHelper";
import {Controller} from "../controller/Controller";


export class ViewList{

    queryAllDomObjects(){
        const DOM = {
            dropStyleSwitcher: document.querySelector("#dropStyleSwitcher"),
            dynamicList: document.querySelector(".item--main-content"),

        };

        ViewHelper.styleSwitcher(DOM);

        if(ViewHelper.checkDomNoNullValueExist(DOM)){
            return DOM;
        }

    }

    generateListView({dynamicList}){
        console.log('1generateListView');
        const controller = new Controller();
        const allnotes = controller.getAllNotesFromLocalStorage();

        console.log(allnotes);

        const div = document.createElement('div');
        //div.classList.add('note');

        if(allnotes){
            var notes = allnotes.map((note,i) => {
                 return `<div class="note">
                    <div class="listDateStatus">
                        <p>${note.datepicker}</p>
                        <p><input id="checkBox" type="checkbox"> Finished</p>
                    </div>
                    <div class="listTitleDescriptionImportance">
                        <div class="flexTitleImportance">
                            <div class="title">
                                <p>${note.title}</p>
                            </div>
                            <div class="importance">
                                <select name="dropImportance" class="dropImportance">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                        <textarea class="description" name="description" cols="30" rows="6">${note.description}</textarea>
                    </div>
                    <div class="listActionButton">
                        <button id="listEdit">Edit ${i+1}</button>
                        <button id="listDelete">Delete</button>
                    </div>
                </div>`;
            });
        }

        div.innerHTML = notes.join(""); //remove comma from list

        if(dynamicList){
            dynamicList.appendChild(div);
        }

    }







}