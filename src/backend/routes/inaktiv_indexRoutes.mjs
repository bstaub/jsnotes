import express from 'express';
import path from 'path';
const router = express.Router(
  { mergeParams: true }  //Testing purpose!!!!
);


/*
router.get('/', function(req, res, next) {
  res.type('text/html');
  res.write("<html>");
  res.write("<p>Dummy Note erfassen und in nedb speichern!</p>");
  res.write("<form action='/api/notes' method='get'><input type='submit' value='Create New Note'></form>");
  res.end("</html>");
});
*/


router.get('/', function(req, res){
  //console.log('path: ', path.join(__dirname, '../public/html'));
  res.sendFile("/index.html",  {root: path.resolve('dist')});
});


router.get('/detail.html', function(req, res) {
  res.sendFile("detail.html",  {root: path.resolve('dist')});
});



export const indexRoutes = router;