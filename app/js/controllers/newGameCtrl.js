/**
*
* Controller for a new game
*
**/

module.exports = function($scope, GameService, $state) {
  console.log('Were in newGameCtrl');
  var self  = this;

  self.gameTemplates = [];

  /**
  * Load all game template on controller
  **/
  GameService.getGameTemplates({
    onSuccess: function(result) {
      angular.forEach(result.data, function(value, key) {
        // self.gameTemplates[key] = { '_id' : value._id, 'id': value.id };
        self.gameTemplates[key] = value.id;
      });
      console.log(self.gameTemplates);
    },
    onError: function(err) {
      alert(err.data.message);
      console.log(err);
    }
  })

  /**
  * Create a new game.
  * @param newGame: obj { minPlayers, maxPlayers, templateName }
  * TODO: write unit test
  * TODO: on gameCreate $state.go(game, { id: result.data._id });
  **/
  self.createGame = function (newGame) {
    console.log(newGame);
    GameService.createGame(JSON.stringify(newGame), {
      onSuccess: function (result) {
        
        console.log(result.data);
        alert('Successfully added game with ID ' + result.data._id);
      },
      onError: function (err) {
        console.log(err);
      }
    })
  }

}
