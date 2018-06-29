'use strict';
const path = require('path');

module.exports = {
	name: 'ember-cli-slick',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
	},

  included: function(app) {
		this._super.included(app);

    app.import('node_modules/slick-carousel/slick/slick.css');
    app.import('node_modules/slick-carousel/slick/slick-theme.css');
    app.import('node_modules/slick-carousel/slick/fonts/slick.ttf', { destDir: 'assets/fonts' });
    app.import('node_modules/slick-carousel/slick/fonts/slick.svg', { destDir: 'assets/fonts' });
    app.import('node_modules/slick-carousel/slick/fonts/slick.eot', { destDir: 'assets/fonts' });
    app.import('node_modules/slick-carousel/slick/fonts/slick.woff', { destDir: 'assets/fonts' });
    app.import('node_modules/slick-carousel/slick/ajax-loader.gif', { destDir: 'assets' });

    // import the above library into vendor.js that was merged with the vendor trees. In browser the library will be eval'd and run
    // In fastboot, the library will not be eval'd
    app.import('node_modules/slick-carousel/slick/slick.js');
  }
};