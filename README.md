<p align="center">
  <h3 align="center">Teste MiniNetflix</h3>
</p>

## About the project

This project aims to create an expired application on Netflix. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

### File Structure

The mass structure is as follows:

```bash
mininetflix
└──src/
    ├── app/
    │   ├── components
    │   ├── mocks
    │   ├── models
    │   ├── pages
    │   └── services
    ├── assets/
    │   ├── images
    │   └── stylus
    └──environments/
```


### The view logic

The logic for calculating the views of the films is based on the sum of the base amount of views defined in the mock object plus the views of the users, which are saved in `localstorage`. This saved object contains a list with the users `ids` and the list of movies he has seen, containing the `id` and the `number of times` he has watched the movie

Example of object saved when user(`id: 1`) watched the movie(`id: 1`) 2 times

```bash
{
  idUser: 1,
  movies: [
    {
      id: 1,
      watchedNumber: 2
    }
  ]
}
```

### Installation

- Install Node.js:

```bash
$ sudo apt install nodejs
```

- Install `Package.json` content:

```bash
$ npm install
```

### Development server

Run `ng serve` for a dev server.
Navigate to `http://localhost:4200/`

### Test users

Users to use the application

```bash
id: 1
name: Usuario 1 de teste
e-mail: testeum@teste.com
password: 123456
```

```bash
id: 2
name: Usuario 2 de teste
e-mail: testedois@teste.com
password: 123456
```

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
