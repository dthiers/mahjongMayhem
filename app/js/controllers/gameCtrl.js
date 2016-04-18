module.exports = function($scope, GameService) {

  $scope.test = "test";

  this.games = GameService.getAllGames();
}
