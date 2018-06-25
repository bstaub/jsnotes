import {noteStore} from "../services/noteStore";

export class NotesController {

  async getNotes(req, res) {
    res.json((await noteStore.all() || []));
  };

  async addNote(req, res) {
    res.json( await noteStore.add(req.body.title, req.body.description, req.body.importance, req.body.datepicker) );
  };

  async updateNote(req, res) {

    let note = {
      id: req.params.id,
      title: req.body.title,
      description: req.body.description,
      importance: req.body.importance,
      datepicker: req.body.datepicker,
      createdDate: req.body.createdDate,
      isFinished: req.body.isFinished,
    };

    await res.json( await noteStore.update(req.params.id, note));
  };

  async showNote(req, res) {
    await res.json( await noteStore.get(req.params.id));
  };

  async deleteNote(req, res) {
    await res.json( await noteStore.delete(req.params.id));
  };

  async patchNote(req, res) {  // Patch Star
      var note = {
        importance: req.body.importance,
      };
    await res.json( await noteStore.patch(req.params.id, note));
  };

  async updateNoteStatus(req, res) { // Toggle Status, with req.query.xxx
    await res.json( await noteStore.updateStatus(req.params.id, req.query.status));
  };

}

export const notesController = new NotesController();