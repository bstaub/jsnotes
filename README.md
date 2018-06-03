jsnotes
========

simple notes application for for getting your stuff done

## Setup Project

````
https://github.com/bstaub/jsnotes.git
npm i
````

## Run Project

on MAC:

````
npm run browsersync
````

on Win:

````
npm run browsersyncwin
````


## Compile New Releases with Webpack (MAC)

````
npm run dev    #for devlelopment purpose
npm run prod   #for production
````

## DEV Tools

- webpack ^4.8.1
- browsersync 0.0.1-security
- node 8.9.4
- npm 5.6.0 updated to 6.0.1

````
npm install font-awesome --save-dev
npm install jquery
npm install handlebars handlebars-loader --save-dev
````


## Configure eslint in WebStorm

````
npm i eslint -D
npm run lint -- --init
npm run lint
````

- Settings ➝ Languages & Frameworks ➝ Code Quality Tools ➝ Eslint
- Preferences / Editor / Code Style / JavaScript -> Tab size: 2  (default 4)

Links

- configure eslint: https://medium.com/dailyjs/adding-eslint-to-your-project-7bd4feca35a8
- Troubleshooting: https://stackoverflow.com/questions/38087660/eslintrc-throws-errors-when-extending-airbnb-config?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa

## APIs

````
npm i express
npm i -g nodemon

nodemon server.js
export PORT=5000   (on mac)
set PORT=5000      (on win)

https://www.npmjs.com/package/joi
npm i joi
````

## Security

````
npm audit
````