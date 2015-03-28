# Empathetic-api

## Install
```
npm install
```

A postinstall hook will run a grunt task that will generate the coverage report and start the server.

This has all been tested on Win 7 x64 (OSX and/or linux might have issues?)

### npm tasks

- ```npm start```
- ```npm test```

### Grunt tasks

- ```grunt test```
- ```grunt coverage```

### Structure

The api is contained with the api directory.

The project is split into three main sections.

endpoints, middleware and services.

#### Consumables



#### Endpoints

Each endpoint has its own folder to keep structure self contained and modular

| File | Description |
|--------|--------|
|  route.js        |  contains all the routes for api/endpoint/router.js     |
|  route.controller.js        |  exports the route function handles the response data    |
|  route.spec.js        |  contains the test suites for the given route   |

#### Services


| File | Description |
|--------|--------|
|  service.js        |  contains all the logic for the service     |
|  service.spec.js        |  contains the test suites for the service  |


#### Middleware


| File | Description |
|--------|--------|
|  middleware.js        |  contains all the middleware logic    |
|  middleware.spec.js        |  contains the test suites for the middleware  |