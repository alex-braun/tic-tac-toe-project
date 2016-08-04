'use strict';
const getFormFields = require('../../../lib/get-form-fields');
const gameApi = require('./gameApi');
const gameUi = require('./gameUi');
// const game = require('./game');


const onShowGame = function (event) {
  let data = getFormFields(this);
  console.log(data);
  event.preventDefault();
  gameApi.gameShow(data)
    .done(gameUi.showGameSuccess)
    .fail(gameUi.failure);
};

const onCreateGame = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  gameApi.gameCreate(data)
    .done(gameUi.createSuccess)
    .fail(gameUi.failure);
};


const onShowAllGames = function (event) {
  event.preventDefault();
  let data = gameUi.gameId;
  console.log(data);
  gameApi.gamesShowAll(data)
    .done(gameUi.showAllSuccess)
    .fail(gameUi.failure);
};


const addGameHandlers = () => {
  $('.create-game').on('click', onCreateGame);
  $('.show-all-games').on('click', onShowAllGames);
  $('#show-game').on('submit', onShowGame);
  $('.search-game-button').click(function() {
  $('#show-game-modal').modal('hide');
  });
};


module.exports = {
  addGameHandlers,
};
