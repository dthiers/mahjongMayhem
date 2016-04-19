module.exports = function($scope, GameService) {
  var self = this;

  self.games = [];
  $scope.test = "Testje in de controllers";

  // GameService.getAllGames({
  //   onSuccess: function(result){
  //     // TODO: not use this.games in here, this creates a different scope
  //     //console.log(result);
  //     angular.forEach(result.data, function(value, key) {
  //       self.games[key] = value;
  //     })
  //     //self.games.push(result.data[0]);
  //     //this.games = result.data;
  //   },
  //   onError: function(err){
  //     console.log(err);
  //   }
  // })
}
