##Build details
This project was bootstrapped from one of my other repos, the [Angular Starter Pack](github.com/i-a-n/angular-starter-pack).

###Building
You could technically just download/clone this repo and serve this off-the-shelf, but for dev purposes, here's how to build it:

```
$ git clone git@github.com:i-a-n/Code-Themer..git
$ npm install
$ npm run server
```
Code Themer will be running at http://127.0.0.1:8080/#/editor

###Schema
```
/
| - app/                          // Angular app lives here
|   | - _partials/                  // HTML 'views' live here. Referenced by controllers.
| - bower_components/             // Destination for bower dependencies. ~~Being git ignored.~~
| - bower.json                    // List of HTML-ly dependencies to include.
| - css/                          // Compiled CSS, only add vendor stuff here.
|   | - style.css                   // LESS compiles everything into this file. Don't touch.
| - docs/
| - Grunfile.js                   // Tells grunt how to build less files.
| - img/
| - index.html                    // App container page. Has a viewer to load in stuff from app/_partials/
| - js/
| - less/                         // Write your LESS/CSS here
|   | - imports.less                // All *.less files need to be referenced in this file
| - static-assets/                // Static assets like icons, images, etc.
```
