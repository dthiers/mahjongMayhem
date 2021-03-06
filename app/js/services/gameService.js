/**
*
* GameService.
*
**/

module.exports = function ($http, API) {

  console.log('Here from the gameService');

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
    getAllGames: function (options) {
      $http.get(API.url + API.games).then(
        options.onSuccess, options.onError
      )
    },
    getMyGames: function (query, options) {
      console.log(query);
      $http.get(API.url + API.games + query).then(
        options.onSuccess, options.onError
      )
    },
    // Get all gameTemplates
    getGameTemplates: function(options) {
      $http.get(API.url + API.gameTemplates).then(
        options.onSuccess, options.onError
      )
    },
    // Create a game.
    createGame: function (gameParameters, options) {
      $http.post(API.url + API.games, gameParameters).then(
        options.onSuccess, options.onError
      )
    },
    // Join a game
    joinGame: function (id, options) {
      $http.post(API.url + API.games + '/' + id + '/Players').then(
        options.onSuccess, options.onError
      )
    },
    // Get players in a game
    getPlayers: function (id, options) {
      $http.get(API.url + API.games + '/' + id + '/Players').then(
        options.onSuccess, options.onError
      )
    },
    getGameTiles: function(id, options) {
      $http.get(API.url + API.games + '/' + id + '/Tiles').then(
        options.onSuccess, options.onError
      )
    },
    checkMatchedTiles: function(gameId, tiles, options) {
      $http.post(API.url + API.games + '/' + gameId + '/' + API.tiles + '/' + API.matches, tiles).then(
        options.onSuccess, options.onError
      );
    }
  }
}
