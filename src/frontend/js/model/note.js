export class Note {
    constructor(
        title,
        description,
        importance,
        datepicker,
        statusActive,
    ){
        this.title = title;
        this.description = description;
        this.importance = importance;
        this.datepicker = datepicker;
        this.statusActive = statusActive;
    }
}