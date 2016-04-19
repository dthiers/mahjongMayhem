module.exports = function($http, API){

  var gameService = {};

  gameService.games = [
    {
      id: 1,
      name: 'game 1'
    },
    {
      id: 2,
      name: 'game 2'
    },
    {
      id: 3,
      name: 'game 3'
    },
    {
      id: 4,
      name: 'game 4'
    }
  ]

  gameService.game = {
    _id: "id",
    createdBy: {
      _id: ""
    }
  }

  return gameService = {
    // Get all games from the API
    getAllGames: function(options){
      $http.get(API.url + API.games).then(
        options.onSuccess, options.onError
      )
    }
  }
}
