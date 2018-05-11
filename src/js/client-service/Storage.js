export class Storage{

    constructor(notes) {
        this.NOTES_KEY = notes;
    }

    saveNotesToLocalStorage({title, description, importance, datepicker}){

        const note = {
            title: title.value,
            description: description.value,
            importance: importance.value,
            datepicker: datepicker.value,
        }

        const notes = [];
        notes.push(note);


        if(this.checkIfLocalStorageEmpty()){
            this.setItemToLocalStorage(notes);
        }
        else{
            this.appendOneNoteToLocalStorage(notes);
        }

    }

    appendOneNoteToLocalStorage(notes){
        const stored = this.getItemFromLocalStorage();
        stored.push(notes);
        localStorage.setItem(this.NOTES_KEY, JSON.stringify(stored));
    }

    checkIfLocalStorageEmpty(){
        return this.getItemFromLocalStorage() === null;
    }

    getAllNotesFromLocalStorage(){
        return this.getItemFromLocalStorage();
    }

    getItemFromLocalStorage(){
        return JSON.parse(localStorage.getItem(this.NOTES_KEY));
    }

    setItemToLocalStorage(notes){
        localStorage.setItem(this.NOTES_KEY, JSON.stringify(notes));
    }

}