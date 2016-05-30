/**
*
* All games controller.
*
*
**/

module.exports = function($scope, GameService, $localStorage) {
  console.log('Were in gamesCtrl');

  var self = this;

  self.games = [];
  self.myGames = [];

  /**
  * Get all current games
  **/
  self.getAllGames = function () {
    GameService.getAllGames({
      onSuccess: function (result) {
        angular.forEach(result.data, function (value, key) {
          self.games[key] = value;
        })
      },
      onError: function (err) {
        console.log(err);
      }
    })
  }

  self.getAllGames();

  

  /**
  * Get games that logged in user is in. username from $localStorage
  *
  **/
  self.getMyGames = function () {
    if(!$localStorage.username){
      alert('No user logged in');
      return;
    }
    var query = '?createdBy=' + $localStorage.username;
    GameService.getMyGames(query, {
      onSuccess: function (result) {
        angular.forEach(result.data, function (value, key) {
          self.myGames[key] = value;
        })
        console.log(result.data);
      },
      onError: function (err) {
        console.log(err);
      }
    })
  }

  self.getGameTiles = function(id) {
    console.log('Getting tiles for game with id ' + id);
    GameService.getGameTiles(id, {
      onSuccess: function(result) {
        console.log(result.data);
      },
      onError: function(err) {
        alert(err.data.message);
        console.log(err);
      }
    })
  }

  /**
  * Get players for game with ID
  * @param id: gameId
  * @return
  **/
  self.getPlayers = function (id) {
    GameService.getPlayers(id, {
      onSuccess: function (result) {
        var names = [];
        angular.forEach(result.data, function (value, key) {
          names.push(value.name);
        })
        alert(names);
      },
      onError: function (err) {
        console.log(err);
      }
    })
  }

  /**
  * Join game with ID
  * @param id: gameId
  **/
  self.joinGame = function (id) {
    GameService.joinGame(id, {
      onSuccess: function (result) {
        alert('Game joined');
        self.getAllGames();
      },
      onError: function (err) {
        if (err.status == 401) {
          alert('Please log in first');
          return;
        }
        alert(err.data.message);
      }
    })
  }

}
