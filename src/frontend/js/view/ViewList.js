const listTemplate = require("../template/listTemplate.hbs");  //Handlebars requires jQuery also in webpack base config!
import {ViewHelper} from "./ViewHelper";
import {Controller} from "../controller/Controller";


export class ViewList{

    queryAllDomObjects(){
        const DOM = {
            //Create new Note is just an a link!
            dropStyleSwitcher: document.querySelector("#dropStyleSwitcher"),
            btnSortByFinishdate: document.querySelector("#btnSortByFinishdate"),
            btnSortByCreateddate: document.querySelector("#btnSortByCreateddate"),
            btnSortByImportance: document.querySelector("#btnSortByImportance"),
            btnShowFinished: document.querySelector("#btnShowFinished"),
            dynamicList: document.querySelector(".item--main-content"),

        };

        ViewHelper.styleSwitcher(DOM);

        if(ViewHelper.checkDomNoNullValueExist(DOM)){
            return DOM;
        }

    }

    generateListView({dynamicList}){
        const controller = new Controller();
        const allnotes = controller.getAllNotesFromLocalStorage();

        //Example Data to pass in handlebars (hbs) Template
        /*
        const notes = {
            "notes": [
                {
                    "name": "Test1",
                    "title": "Test1Title",
                },
                {
                    "name": "Test2",
                    "title": "Test2Title",
                },
            ]
        }
        */

        dynamicList.innerHTML = listTemplate(allnotes);  //webpack precompile the template code, i use this, because i don't have a 'notes' key in the root json structure!


        //if(dynamicList){
        //    dynamicList.innerHTML = listTemplate(allnotes);  //webpack precompile the template code
        //}

        /*
        if(allnotes){
            var notes = allnotes.map((note,i) => {
                 return `<div class="note ${note.isFinished ? 'finished':''}">
                    <div class="listDateStatus">
                        <p>${note.datepicker}</p>
                        <p><input id="checkBoxisFinished" type="checkbox" data-id="${note.id}" ${note.isFinished ? 'checked':''}> Finished</p>
                    </div>
                    <div class="listTitleDescriptionImportance">
                        <div class="flexTitleImportance">
                            <div class="title">
                                <p>${note.title}</p>
                            </div>
                            <div class="note__importance">
                                <div class="importance" data-id="${note.id}">
                                    ${ViewHelper.selectimportance(parseInt(note.importance))}
                                </div>
                            </div>
                        </div>
                        <textarea class="description" name="description" cols="30" rows="6" data-description-id="${note.id}" disabled="disabled">${note.description}</textarea>
                    </div>
                    <div class="listActionButton">
                        <button id="listEdit" data-id="${note.id}">Edit</button>
                        <button id="listDelete" data-id="${note.id}">Delete</button>
                    </div>
                </div>`;
            });
        }


        if(dynamicList){
            dynamicList.innerHTML = notes.join("");  //remove comma from list
        }
        */

    }


    ////viewlistgenerateListView(this.queryAllDomObjects());

}