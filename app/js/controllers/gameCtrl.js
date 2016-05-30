/**
*
* Single game controllers
*
**/

module.exports = function ($scope, GameService, $localStorage) {
  console.log('gameCtrl');
  var self = this;

  self.toggled;

  self.gameId = "5541fc5b1872631100678bb4"; // @use for sprint 2.

  self.matchedTiles = [];

  self.toggleClass = function () {
    self.toggled = !self.toggled;
  }

  /**
  * Get tiles for game with id
  * @param  id: gameId
  **/
  self.getGameTiles = function(id) {
    GameService.getGameTiles(id, {
      onSuccess: function(result) {
        self.tiles = result.data;
      },
      onError: function(err) {
        console.log(err);
      }
    })
  }

  /**
  * Select tile for match.
  * @param tile: tile obj
  **/
  self.selectTileForMatch = function(tile) {
    if(self.matchedTiles.length < 2) {
      self.matchedTiles.push(tile);
    } else {
      self.matchedTiles[0] = tile;
    }
    console.log(self.matchedTiles);
  }

  /**
  * Remove tile from matchedTiles
  * @param tile: tile obj
  **/
  self.removeTileFromMatch = function(tile) {
    self.matchedTiles.splice(self.matchedTiles.indexOf(tile),1);
  }

  /**
  * Submit matchedTiles to API
  * @param matchedTiles: array[tile]
  **/
  self.submitMatchedTiles = function(matchedTiles) {
    var tiles = {
      tile1Id: matchedTiles[0]._id,
      tile2Id: matchedTiles[1]._id
    }
    console.log(tiles);
    GameService.checkMatchedTiles(self.gameId, tiles, {
      onSuccess: function(result){
        console.log(result.data);
      },
      onError: function(err) {
        alert(err.data.message);
        self.matchedTiles = [];
        console.log(err);
      }
    })
  }

  self.getGameTiles(self.gameId);
}
