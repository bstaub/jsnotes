export class Storage{

    constructor(storageKey) {
        this.SESSION_STORE_KEY = storageKey;
    }

    saveNotesToLocalStorage({title, description, importance, datepicker}){

        const note = {
            title: title.value,
            description: description.value,
            importance: importance.value,
            datepicker: datepicker.value,
            statusActive: false,
        }

        if(this.checkIfLocalStorageEmpty()){
            const firstnote = [];
            firstnote.push(note);
            this.setItemToLocalStorage(firstnote);
        }
        else{
            this.appendOneNoteToLocalStorage(note);
        }

    }

    saveStyleToLocalStorage(style){
        this.setItemToLocalStorage(style);
    }

    getStyleFromLocalStorage(){
        return this.getItemFromLocalStorage();
    }

    saveNoteIDToLocalStorage(id){
        this.setItemToLocalStorage(id);
    }

    getNoteIDFromLocalStorage(){
        return this.getItemFromLocalStorage();
    }

    appendOneNoteToLocalStorage(notes){
        const stored = this.getItemFromLocalStorage();
        stored.push(notes);
        localStorage.setItem(this.SESSION_STORE_KEY, JSON.stringify(stored));
    }

    checkIfLocalStorageEmpty(){
        return this.getItemFromLocalStorage() === null;
    }

    getAllNotesFromLocalStorage(){
        console.log('3getAllNotesFromLocalStorage');
        return this.getItemFromLocalStorage();
    }

    getItemFromLocalStorage(){
        console.log('4getItemFromLocalStorage');
        return JSON.parse(localStorage.getItem(this.SESSION_STORE_KEY));
    }

    setItemToLocalStorage(items){
        localStorage.setItem(this.SESSION_STORE_KEY, JSON.stringify(items));
    }

}