import {noteStore} from "../services/noteStore";

export class NotesController {

  /*
  showIndex(req, res) {
    res.render("index");
  };

  createOrder(req, res) {
    res.render("newOrder");
  };
  */

  async getNotes(req, res) {
    //res.json((await noteStore.all(SecurityUtil.currentUser(req)) || []))
    //GetNotes(orderBy, filterBy)
    res.json((await noteStore.all() || []));
  };



  async addNote(req, res) {
    //await res.status(200).send( await noteStore.add(req.body.title, req.body.description, req.body.importance, req.body.datepicker) );
    res.json( await noteStore.add(req.body.title, req.body.description, req.body.importance, req.body.datepicker) );
  };

  async updateNote(req, res) {  //self defined, noch fertigstellen, prüfen!
    await res.render("updatenote", await noteStore.update(req.params.id));
  };


  async showNote(req, res) {
    //await res.render("shownote", await noteStore.get(req.params.id));
    await res.json( await noteStore.get(req.params.id));
  };

  async deleteNote(req, res) {
    console.log('delete note');
    //await res.render("shownote", await noteStore.delete(req.params.id));
    await res.json( await noteStore.delete(req.params.id));
  };


}

export const notesController = new NotesController();