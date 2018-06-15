jsnotes
========

- is a simple notes application with frontend and backend rest api based on javascript and nodejs

- it use the modern grid css with handlebars template


##### Project Setup and Start

````
git clone https://github.com/bstaub/jsnotes.git
npm i
npm run start
````

##### Project Sources

are located in

````
src/frondend   #frontend logic source code, listening on http://127.0.0.1:6001
src/backend    #backend api source code, listening on http://127.0.0.1:6001/api/notes
dist           #index.html, detaul.html frontend html files
dist/frontend  #is build automatically from webpack.config.js, and will cleaned in every build
index.mjs      #node/exprss server startup config (index.js is deprecated old style node server)
````

##### Frontend Webpack DEV Build

````
npm run dev    #for devlelopment purpose
npm run prod   #for production
````

##### Backend Nodemon DEV Build

````
npm run startdev
````