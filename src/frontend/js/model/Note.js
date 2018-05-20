export class Note {
    constructor(
        id,
        title,
        description,
        importance,
        datepicker,
        isactive,
    ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.importance = importance;
        this.datepicker = datepicker;
        this.isactive = isactive;
    }
}