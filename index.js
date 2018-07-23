'use strict';
const path = require('path');

module.exports = {
  name: 'ember-cli-slick',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
	},

  included: function(app, parentAddon) {
		this._super.included.apply(this, arguments);
    let target = (parentAddon || app);

    target.import('bower_components/slick-carousel/slick/slick.css');
    target.import('bower_components/slick-carousel/slick/slick-theme.css');
    target.import('bower_components/slick-carousel/slick/fonts/slick.ttf', { destDir: 'assets/fonts' });
    target.import('bower_components/slick-carousel/slick/fonts/slick.svg', { destDir: 'assets/fonts' });
    target.import('bower_components/slick-carousel/slick/fonts/slick.eot', { destDir: 'assets/fonts' });
    target.import('bower_components/slick-carousel/slick/fonts/slick.woff', { destDir: 'assets/fonts' });
    target.import('bower_components/slick-carousel/slick/ajax-loader.gif', { destDir: 'assets' });

    // import the above library into vendor.js that was merged with the vendor trees. In browser the library will be eval'd and run
    // In fastboot, the library will not be eval'd
    target.import('bower_components/slick-carousel/slick/slick.js');
  }
};
