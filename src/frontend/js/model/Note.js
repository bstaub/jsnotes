export default class Note {
  constructor(
    id,
    title,
    description,
    importance,
    datepicker,
    isFinished,
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.datepicker = datepicker;
    this.isFinished = isFinished;
  }
}
