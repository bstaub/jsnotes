export class Storage{

    constructor(storageKey, noteObj) {
        this.SESSION_STORE_KEY = storageKey;
        this.noteObj = noteObj;
    }

    saveNoteToLocalStorage(){

        if(this.checkIfLocalStorageEmpty()){
            const firstnote = [];
            firstnote.push(this.noteObj);
            this.setItemToLocalStorage(firstnote);
        }
        else{
            this.appendOneNoteToLocalStorage(this.noteObj);
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

    removeKeyFromLocalStorage(){
        localStorage.removeItem(this.SESSION_STORE_KEY);
    }

}