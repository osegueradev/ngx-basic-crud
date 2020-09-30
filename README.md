# Basic Crud App

[![Website oseguera.dev](https://img.shields.io/website-up-down-green-red/http/oseguera.dev.svg)](https://oseguera.dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

You can see this site at: [oseguera.dev](https://oseguera.dev)

## Table of Content

- [Table of Content](#table-of-content)
- [Getting started](#getting-started)
- [Useful Commands](#useful-commands)
- [Code scaffolding](#code-scaffolding)
- [Project structure](#project-structure)
- [Features](#features)
- [Learning Materials](#learning-materials)
- [Documentation](#documentation)
    - [Libraries](#libraries)
    - [Coding guides](#coding-guides)
    - [Other documentation](#other-documentation)
- [Changelog](#changelog)

## Getting started

1. Go to project folder and install dependencies:
 ```sh
 npm install
 ```

2. Launch development server, and open `localhost:4200` in your browser:
 ```sh
 npm start
 ```

## Useful Commands

- `npm start` - starts a dev server and opens browser with running app. The app will automatically reload if you change any of the source files.
- `npm run build [-- --configuration=production]` - to build the project. The build artifacts will be stored in the dist/ directory. Use the _-- --configuration=production_ flag for a production build.
- `npm run release` - to change the application version (and tagging) and update the Changelog of the project based on conventional commits.

## Code scaffolding

Run `npm run generate -- component <name>` to generate a new component. You can also use
`npm run generate -- directive|pipe|service|class|module`.

If you have installed [angular-cli](https://github.com/angular/angular-cli) globally with `npm install -g @angular/cli`,
you can also use the command `ng generate` directly.

## Project structure

```
dist/                        web app production build
docs/                        build for github pages
documentation/               project docs and coding guides
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- core/                  core module (singleton services and single-use components)
|  |- shared/                shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
reports/                     test and coverage reports
proxy.conf.js                backend proxy configuration
```

## Features

- Auto formatting with husky and prettier
- Auto revision for standard commits with [commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)
- Lazy-loading of feature modules
- Fully responsive design
- Scalable architecture

## Learning Materials

Documentation / Articles / Repositories with content that explains various approaches used to build this project.

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) (Official Page)
- [Git-Flow](https://jeffkreeftmeijer.com/git-flow/) (Jeff Kreeftmeijer - Article)

## Documentation

#### Libraries

- [Angular](https://angular.io)
- [Bootstrap 4](https://getbootstrap.com)
- [Commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)
- [Font Awesome](http://fontawesome.io)
- [Git-Flow](https://github.com/nvie/gitflow)
- [Husky](https://github.com/typicode/husky)
- [ng-bootsrap](https://ng-bootstrap.github.io/)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Prettier](https://prettier.io/) and [Pretty-Quick](https://github.com/azz/pretty-quick)
- [RxJS](http://reactivex.io/rxjs)

#### Coding guides

- [Angular](documentation/coding-guides/angular.md)
- [TypeScript](documentation/coding-guides/typescript.md)
- [Sass](documentation/coding-guides/sass.md)
- [HTML](documentation/coding-guides/html.md)
- [Unit tests](documentation/coding-guides/unit-tests.md)
- [End-to-end tests](documentation/coding-guides/e2e-tests.md)

#### Other documentation

- [I18n guide](documentation/i18n.md)
- [Working behind a corporate proxy](documentation/corporate-proxy.md)
- [Updating dependencies and tools](documentation/updating.md)
- [Using a backend proxy for development](documentation/backend-proxy.md)
- [Browser routing](documentation/routing.md)

## Changelog

You can review this project [Changelog](https://github.com/osegueradev/oseguera-dev-website/blob/master/CHANGELOG.md).
