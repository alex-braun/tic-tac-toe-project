'use strict';
const getFormFields = require('../../../lib/get-form-fields');
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
  let data = getFormFields(this);
  event.preventDefault();
  gameApi.gameCreate(data)
    .done(gameUi.createSuccess)
    .fail(gameUi.failure);
};

const onShowGame = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  gameApi.gameCreate(data)
    .done(gameUi.createSuccess)
    .fail(gameUi.failure);
};


const addGameHandlers = () => {
  $('.create-game').on('click',game.startGame);
  $('.create-game').on('click',onCreateGame);

};


module.exports = {
  addGameHandlers,
};
