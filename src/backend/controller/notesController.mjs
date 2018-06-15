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
    //with res.render i would use handlebars template, i don't use here!
    //await res.render("succeeded", await noteStore.add(req.body.title, req.body.description, req.body.importance, req.body.datepicker));
    //await res.send("note erfolgreich in nedb eingetragen!", await noteStore.add(req.body.title, req.body.description, req.body.importance, req.body.datepicker));
    ////express deprecated res.send(status, body): Use res.status(status).send(body) instead file:/Users/bstaub/WebstormProjects/jsnotes/src/backend/controller/notesController.mjs:18:15
    //console.log(req.body.title, req.body.description, req.body.importance, req.body.datepicker);
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