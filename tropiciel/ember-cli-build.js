'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let folderBootstrap = 'bower_components/bootstrap-sass/assets/'
  let app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        folderBootstrap + 'stylesheets'
      ]
    }  
  });

  // ... Komentarze szablonu ...
  // Utworzenie nazwy folderu z plikami platformy Bootstrap
  // i dodanie ich do aplikacji za pomocą metody import

  app.import(folderBootstrap + 'javascripts/bootstrap.js');

  return app.toTree();
};
