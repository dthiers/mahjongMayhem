require('angular/angular');
require('ng-storage/ngStorage.min');

require('angular-ui-router/release/angular-ui-router');
require('ui-router-extras/release/modular/ct-ui-router-extras.core');
require('ui-router-extras/release/modular/ct-ui-router-extras.sticky');
require('ui-router-extras/release/modular/ct-ui-router-extras.dsr');
require('ui-router-extras/release/modular/ct-ui-router-extras.future');
require('ui-router-extras/release/modular/ct-ui-router-extras.previous');
require('ui-router-extras/release/modular/ct-ui-router-extras.statevis');
require('ui-router-extras/release/modular/ct-ui-router-extras.transition');

// Create your app
var app = angular.module('app', ['ui.router', 'ngStorage', 'ct.ui.router.extras.sticky', 'ct.ui.router.extras.dsr', 'ct.ui.router.extras.future', 'ct.ui.router.extras.previous', 'ct.ui.router.extras.statevis', 'ct.ui.router.extras.transition']);

// Services
require('./config/service.js')(app);

// controllers
require('./config/controller.js')(app);

// Routing
require('./config/router.js')(app)

// Config
require('./config/config.js')(app);

// Constants
require('./constant/constant.js')(app);
