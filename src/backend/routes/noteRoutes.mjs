import express from 'express';
const router = express.Router();
import {notesController} from "../controller/notesController";


router.get('/notes', notesController.getNotes.bind(notesController));
router.post('/notes', notesController.addNote.bind(notesController));
router.get('/notes/:id/', notesController.showNote.bind(notesController));
router.put('/notes/:id/', notesController.updateNote.bind(notesController));
router.delete('/notes/:id/', notesController.deleteNote.bind(notesController));

/*
router.get('/', function(req, res, next) {
  res.type('text/html');
  res.write("<html>");
  res.write("<p>Neue Note Eintragen</p>");
  res.write("<form action='/api/notes' method='post'><input name='title' placeholder='notes title'><input type='submit' value='Create New Note'></form>");
  res.write('<a onclick="window.history.go(-1); return false;">Zurück</a>');
  res.end("</html>");
});

router.post('/', function(req, res, next) {
  console.log('post triggered');
  res.type('text/html');
  res.write("<html>");
  res.write("<p>Neue Note Eintragen</p>");
  res.write("<form action='/api/notes' method='post'><input name='title' placeholder='notes title'><input type='submit' value='Create New Note'></form>");
  res.write('<a onclick="window.history.go(-1); return false;">Zurück</a>');
  res.end("</html>");
});
*/


export const noteRoutes = router;
