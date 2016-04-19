require('angular/angular');
require('ngstorage');
require('angular-ui-router/release/angular-ui-router');


// Create your app
var app = angular.module('app', ['ui.router', 'ngStorage']);

// Routing
require('./config/router.js')(app);

// Test to see if config can be ran outside of app.js
require('./config/config.js')(app);

// Test to see if constant can be declared outside of app.js
require('./constant/constant.js')(app);

app.controller('GameCtrl', require('./controllers/gameCtrl'));
app.factory('GameService', require('./services/gameService'));

app.controller('AuthCtrl', require('./controllers/authCtrl'));
