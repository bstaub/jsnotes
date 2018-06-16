import express from 'express';
const router = express.Router();
import {notesController} from "../controller/notesController";


router.get('/notes', notesController.getNotes.bind(notesController));
router.post('/notes', notesController.addNote.bind(notesController));
router.get('/notes/:id/', notesController.showNote.bind(notesController));
router.put('/notes/:id/', notesController.updateNote.bind(notesController));
router.delete('/notes/:id/', notesController.deleteNote.bind(notesController));

export const noteRoutes = router;
