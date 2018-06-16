import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//import {indexRoutes} from "./src/backend/routes/indexRoutes";
import {noteRoutes} from "./src/backend/routes/noteRoutes";


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve('dist')));
//app.use(express.static(path.resolve('dist/frontend')));


app.use(function (req, res, next) {
  console.log('node middleware request method and url: ', req.method, req.url);
  next();
});


//app.use('/', indexRoutes);
app.use('/api/', noteRoutes);

function notFound(req,res, next) {
  res.setHeader("Content-Type", 'text/html');
  res.send(404, 'Diese Seite existiert nicht 404, <a href="/">zurück zur Startseite</a>');
}
app.use(notFound);

const hostname = '127.0.0.1';
const port = 6001;
app.listen(port, hostname, () => {  console.log(`Server running at http://${hostname}:${port}/`); });