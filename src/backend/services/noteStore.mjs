import Datastore from 'nedb-promise';

export class Note {

  constructor(title, description, importance, datepicker) {

    function getCreatedDate() {
      const d = new Date();
      return formatDate(d);
    }

    function formatDate(d) {
      return `${(d.getDate() < 10 ? '0' : '') + d.getDate()}-${d.getMonth() < 10 ? '0' : ''}${d.getMonth() + 1}-${d.getFullYear()} ${d.getHours() < 10 ? '0' : ''}${d.getHours()}:${d.getMinutes() < 10 ? '0' : ''}${d.getMinutes()}`; // 27-05-2018 18:13
    }

    //_id NeDB creates it's own ID
    this.title = title;
    this.description = description;
    this.importance = importance;
    this.datepicker = datepicker;
    this.createdDate = getCreatedDate();
    this.isFinished = false;

  }

}

export class NoteStore {
  constructor(db) {
    this.db = db || new Datastore({filename: './src/backend/data/notes.db', autoload: true});  //path is absolute from project root!
  }

  async all() {
    //return await this.db.find({});
    return await this.db.cfind({}).sort({ createdDate: 1  }).exec();
  }

  async add(title, description, importance, datepicker) {
    let note = new Note(title, description, importance, datepicker);
    return await this.db.insert(note);
  }

  async update(id, {title, description, importance, datepicker, createdDate, isFinished}) {
    return await this.db.update({ _id: id },
      { title, description, importance, datepicker, createdDate, isFinished }
      );
  }

  async get(id) {
    return await this.db.findOne({_id: id});
  }

  async delete(id) {
    //await this.db.update({_id: id}, {$set: {"state": "DELETED"}});
    //return await this.get(id);
    await this.db.remove({_id: id});
    return await this.db.find({});
  }

  async patch(id, note) {
    return await this.db.update({_id: id}, {$set: note});
  }

  async updateStatus(id, status) {
    if(status == 'true'){
      var status = true;
    }
    if(status == 'false'){
      var status = false;
    }
    let statusObj = { isFinished: status}
    return await this.db.update({_id: id}, {$set: statusObj });
  }

}

export const noteStore = new NoteStore();
