module.exports = function($scope, GameService, $localStorage) {
  console.log('gameCtrl');
  var self = this;

  self.toggled;

  self.games = [];
  $scope.test = "Testje in de controllers";

  self.toggleClass = function(){
    self.toggled = !self.toggled;
  }

  GameService.getAllGames({
    onSuccess: function(result){
      // TODO: not use this.games in here, this creates a different scope
      //console.log(result);
      angular.forEach(result.data, function(value, key) {
        self.games[key] = value;
      })
      //self.games.push(result.data[0]);
      //this.games = result.data;
    },
    onError: function(err){
      console.log(err);
    }
  })

  self.createGame = function(newGame){
    console.log(newGame);
    GameService.createGame(JSON.stringify(newGame), {
      onSuccess: function(result){
        console.log(result.data);
        alert('Successfully added game with ID ' +  result.data._id);
      },
      onError: function(err){
        console.log(err);
      }
    })
  }

  self.getMyGames = function(){
    var query = '?createdBy=' + $localStorage.username;
    GameService.getMyGames(query, {
      onSuccess: function(result){
        angular.forEach(result.data, function(value, key) {
          self.games[key] = value;
        })
        console.log(result.data);
      },
      onError: function(err){
        console.log(err);
      }
    })
  }
}
