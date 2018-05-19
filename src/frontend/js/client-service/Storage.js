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
            statusActive: true,
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

    appendOneNoteToLocalStorage(notes){
        const stored = this.getItemFromLocalStorage();
        stored.push(notes);
        localStorage.setItem(this.NOTES_KEY, JSON.stringify(stored));
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
        return JSON.parse(localStorage.getItem(this.NOTES_KEY));
    }

    setItemToLocalStorage(notes){
        localStorage.setItem(this.NOTES_KEY, JSON.stringify(notes));
    }

}