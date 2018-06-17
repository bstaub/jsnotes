import Datastore from 'nedb-promise';

export class Note {

  constructor(title, description, importance, datepicker) {
    //_id
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.datepicker = datepicker;
    this.createdDate = new Date();
    this.isFinished = false;
    //this.state = "OK";  //"HIDDEN","DELETED"
  }

}

export class NoteStore {
  constructor(db) {
    this.db = db || new Datastore({filename: './src/backend/data/notes.db', autoload: true});  //path is absolute from project root!
  }

  async all() {  //getNotes
    return await this.db.find({});
  }

  async add(title, description, importance, datepicker) {
    let note = new Note(title, description, importance, datepicker);
    //console.log('vor insert: ',note);
    return await this.db.insert(note);
  }

  async update(id, {title, description, importance, datepicker, createdDate, isFinished}) {
  //async update(id, {description}) {
    return await this.db.update({ _id: id },
      { title, description, importance, datepicker, createdDate, isFinished }
      //{ description }
      );
  }

  async get(id) {  //showNote
    return await this.db.findOne({_id: id});
  }

  async delete(id) {
    //await this.db.update({_id: id}, {$set: {"state": "DELETED"}});
    //return await this.get(id);
    await this.db.remove({_id: id});
    return await this.db.find({});
  }

  // Testing Start
  async getOrderFilter(id, orderBy, filterBy) {
    return await this.db.find({_id: id, orderedBy : orderBy, filterBy : filterBy});
  }

  async get7(id, currentUser) {
    return await this.db.findOne({_id: id, orderedBy : currentUser});
  }

  async all7(currentUser) {
    return await this.db.cfind({orderedBy : currentUser}).sort({ orderDate: -1 }).exec();
  }
  // Testing End

}

export const noteStore = new NoteStore();
