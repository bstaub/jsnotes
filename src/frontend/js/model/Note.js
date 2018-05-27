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
}
