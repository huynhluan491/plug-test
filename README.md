# AngularElementTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Getting started
Ensure you have angular installed (see documentation)

Add concat tools to build js files.
Run `npm install --save-dev concat fs-extra`

## build the component
To build a component, make sure you have done above and have an elements-build.js file.
Run `npm run build:elements`

## view the compoent
To view the component you need to install http server
Run `npm install -g http-server`

Then navigate to the demo folder and run `http-server` and view on route provided

## testing the component
To test the component you need to install cypress and run your http-server
Add the url to the test.
Run `npx cypress open`