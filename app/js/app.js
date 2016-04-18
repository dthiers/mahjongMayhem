require('angular/angular');

// Create your app
var app = angular.module('app', []);


app.controller('GameCtrl', require('./controllers/gameCtrl'));
app.factory('GameService', require('./services/gameService'));
