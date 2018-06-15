import Storage from "../client-service/Storage";
import HelperService from "../client-service/HelperService";

export default class Note {
  constructor(
    id,
    title,
    description,
    importance,
    datepicker,
    createdDate,
    isFinished,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.datepicker = datepicker;
    this.createdDate = createdDate;
    this.isFinished = isFinished;
  }


  static buildNewNoteEntry({ title, description, importance, datepicker, }){
    const isFinished = false;
    return new Note(
      HelperService.getNewUniqueNoteID(),
      title.value,
      description.value,
      importance.value,
      Storage.setFormatDateDMYhs(datepicker.value),
      Storage.getCreatedDate(),
      isFinished,
    );
  }


}



