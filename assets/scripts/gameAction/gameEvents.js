'use strict';

const gameApi = require('./gameApi');
const gameUi = require('./gameUi');
const game = require('./game');

// const onGetGames = function (event) {
//   event.preventDefault();
//   let gameId = $(event.target).find('[name="book[id]"]').val();
//   if (gameId.length === 0) {
//     gameApi.gamesIndex()
//       .done(ui.onSuccess)
//       .fail(ui.onError);
//   } else {
//     gameApi.show(event.target)
//       .done(gameUi.onSuccess)
//       .fail(gameUi.onError);
//   }
// };onCreateGame
const onCreateGame = function (event) {
  event.preventDefault();
  gameApi.gameCreate(event.target)
    .done(gameUi.createSuccess)
    .fail(gameUi.onError);
};

const addGameHandlers = () => {
  $('.create-game').on('click', function () {
    //onCreateGame();
    game.playGame();
});
};

module.exports = {
  addGameHandlers,
//  onGetGames,
  //onCreateGame,
};
