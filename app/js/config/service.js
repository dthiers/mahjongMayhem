/**
*
* Service + factory config.
*
**/

module.exports = function(app) {

  app.factory('GameService',    require('../services/gameService'));
}
