Todo-list built on ionic 3.x, angular 4.x, ES2017 
=========

## How to build the app

1. Download and install [NodeJS](https://nodejs.org/en/)

2. On the console, run ``npm install``

3. Run ``npm run build`` in order to build the code inside *build* for distribution 

4. Run ``npm run serve-lab`` in order to launch the application for development 

## Backend implementation 

1. Based on [json-server](https://github.com/typicode/json-server) with mocks from [faker](https://github.com/Marak/faker.js) 

2. Run ``npm run build`` and ``npm start`` in order to launch the server (``http://localhost:3000``) with the distribution version of the app (APIs available at `http://localhost:3000/api/`) 

3. The server randomly simulates delays and errors for testing purposes

## Progressive web app 

1. The app contains a [manifest.json](https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/) and the entire [service-worker](https://developers.google.com/web/fundamentals/getting-started/primers/service-workers) business in order to cache the app (sw is enabled only for ``npm run build``)

## Libs & Tooling

1. [Angular 4.x](https://angular.io) 

2. [Typescript](https://www.typescriptlang.org/) 

3. [ionic 3.x](http://ionicframework.com) 

4. [Sass](http://sass-lang.com/) 

5. [TSLint](https://palantir.github.io/tslint/) 

## Working with editors/IDEs supporting “safe write”

1. Take a look at the following [page](https://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write) if you use IntelliJ or VIM 
