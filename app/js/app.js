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

// Routing
require('./config/router.js')(app)

// Test to see if config can be ran outside of app.js
require('./config/config.js')(app);

// Test to see if constant can be declared outside of app.js
require('./constant/constant.js')(app);

app.controller('GameCtrl', require('./controllers/gameCtrl'));
app.factory('GameService', require('./services/gameService'));

app.controller('AuthCtrl', require('./controllers/authCtrl'));
