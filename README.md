# generator-angular-enterprise

** currently in progress **


## What is this?

This is the most comprehensive and strict code generator that adheres to Angular's
[most popular best practices guide](https://github.com/johnpapa/angular-styleguide). It also generates companion tests and gives you a gulp build/test process. It even documents best practices that are being employed when generating a snippet (see below).

## Do I need to be "Enterprise?"

Absolutely not. Most Angular tutorials teach _very_ bad patterns for creating larger Angular 
applications. Eventually, most devs hit a wall before realizing everybody else has abandoned 
the practices their tutorials once endorsed.

The known best practices are often called "enterprise" patterns simply because they aren't as 
useful in small projects. This generator should be useful for any project that plans to expand 
beyond a few primary states.


## What makes this generator superior to others

* Whenever possible, rules are directly linked to the standards guide where invoked. This will help prevent future 
  developers from undoing your hard work. For example, when generating a feature:
````javascript
// start example snippet ...
/**
 * Chain to fetch module
 *   https://github.com/johnpapa/angular-styleguide#style-y022
 */
angular
  .module('myApp.aboutPage')
  .controller('AboutPageController', AboutPageController);

/**
 * Avoid anonymous functions as callbacks
 *   https://github.com/johnpapa/angular-styleguide#style-y024
 *
 * Document dependency injenction using annotations
 *  https://github.com/johnpapa/angular-styleguide#style-y100
 */
/* @ngInject */
function AboutPageController() {
// ... end example snippet
````
* Generates extremely standard tests (no obscure libraries except those designated as Best Practices) 
* Generates... uh, tests!
* Leverages some of the toolchain Best Practices as well (jshint and jscs)
* Contains sub-generators (used after the initial project is generated)
* Supports both Angular Router and UI Router

## Installation

To use it, you will need Yeoman - a tool for managing code generators - and this specific installer.

```bash
npm install -g yo
npm install -g generator-angular-enterprise
```

Then, initiate the generator:

```bash
yo angular-enterprise
```

And then create your application's starting point:

```bash
yo angular-enterprise:feature myStartingPage
```

For example, the above would generate the following folder/files in your designated application folder:

    app/
        my-starting-page/
            my-starting-page.controller.js
            my-starting-page.controller.spec.js
            my-starting-page.html
            my-starting-page.module.js
            my-starting-page.route.js
            my-starting-page.route.spec.js


## Other commands

```bash
yo angular-enterprise:directive myDirective # "myDirective" is the camel case representation of your directive name
yo angular-enterprise:feature myFeature # "myFeature" is the name of the module (will generate a controller/routes)
yo angular-enterprise:filter myFilter # "myFilter" is what you would use in the HTML
yo angular-enterprise:factory myFactory # "myFactory" is the name of factory
yo angular-enterprise:service myService # "myService" is the name of service (singleton)
```


## License

MIT. Copyright (c) 2015 Michi Kono


## Still todo ##

* Services
* ngannotate (https://github.com/johnpapa/angular-styleguide#style-y100)
* mocha (https://github.com/johnpapa/angular-styleguide#style-y191)
* Run tests
* Chai 
* Sinon (https://github.com/johnpapa/angular-styleguide#style-y193)
* Karma (https://github.com/johnpapa/angular-styleguide#style-y192)
* Phantomjs (https://github.com/johnpapa/angular-styleguide#style-y194)
* TypeScript or ES6
