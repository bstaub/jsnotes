import express from 'express';
const router = express.Router();


router.get('/', function(req, res, next) {
  res.type('text/html');
  res.write("<html>");
  res.write("<p>Dummy Note erfassen und in nedb speichern!</p>");
  res.write("<form action='/api/notes' method='get'><input type='submit' value='Create New Note'></form>");
  res.end("</html>");
});



export const indexRoutes = router;