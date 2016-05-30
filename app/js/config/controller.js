module.exports = function(app) {

  app.controller('GameCtrl',    require('../controllers/gameCtrl'));
  app.controller('GamesCtrl',   require('../controllers/gamesCtrl'));
  app.controller('AuthCtrl',    require('../controllers/authCtrl'));
  app.controller('NewGameCtrl', require('../controllers/NewGameCtrl'))

}
