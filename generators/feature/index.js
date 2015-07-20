'use strict';
var chalk = require('chalk');
var changeCase = require('change-case');
var helpers = require('../../lib/helpers');

module.exports = helpers.NamedBase.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    helpers.NamedBase.apply(this, arguments);
    this.log('Creating feature: ' + chalk.green(this.name) + '...');
    this.choices = {
      name: changeCase.camelCase(this.name),
      namePascalCase: changeCase.pascalCase(this.name)
    };
  },

  writing: {
    files: function () {
      this.installTemplateFolder(this.choices.name, 'feature');
      this.composeWith('angular-enterprise:router', {args: [this.name]})
    },

    modules: function () {
      helpers.addAngularModule(
        this.config.get('clientSideFolder') + this.config.get('appSubFolder') + 'app.module.js',
        this.config.get('appName') + '.' + this.choices.name
      );
    }
  }
});
