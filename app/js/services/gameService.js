module.exports = function($http){

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

  gameService.getAllGames = function(){
    return gameService.games;
  }

  return gameService;
}
