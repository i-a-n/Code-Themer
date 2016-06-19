##Angular starter pack details
I made this for myself to reference for future front-end projects. The pack includes:

*angular*—EXTREME JAVASCRIPTING

*bower*—This manages the packages, including Angular itself. It puts everything in /bower_components. That's why I'm git-ignoring /bower_components and just running `bower init'.

*bootstrap*—Basic bootstrap. Will live in /bower_components. Gets linked that way from the app's HTML. Just using the CSS really.

*grunt*—Using this to build less files into CSS.

*firebase*—Using bower to install AngularFire, firebase's angular helper library. This starter pack doesn't have any actual firebase integration to speak of, since I don't want to hardwire a sample firebase app here and it wouldn't be any more help than just reading the documentation you lazy sloth.

###Building
Run these to set up a working dev framework

```
$ npm install
$ bower init
$ grunt watch
```

###Local dev
For local dev you'll need to start an http-server (ugh) because you can't just include .html partials for some arcane CORS reason or something.

```
$ npm install http-server
$ http-server [path to your app]
```

###Production
If you're going to put this in production somewhere, one quick way to do that would be to un-ignore /bower_components and commit it. Then you can deploy this anywhere without having to do any building at all; It'll just work when installed.

###Schema
```
/
| - app/                          // Angular app lives here
|   | - _partials/                  // HTML 'views' live here. Referenced by controllers.
| - bower_components/             // Destination for bower dependencies. Being git ignored.
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
```
