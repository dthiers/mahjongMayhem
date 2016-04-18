module.exports = function($scope, GameService, TEST) {

  $scope.test = TEST.test;



  this.games = GameService.getAllGames();
}
