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

//app.use('/api/', indexRoutes);
//app.use('/api/notes', noteRoutes);
app.use('/api/', noteRoutes);


const hostname = '127.0.0.1';
const port = 6001;
app.listen(port, hostname, () => {  console.log(`Server running at http://${hostname}:${port}/`); });