'use strict';
const getFormFields = require('../../../lib/get-form-fields');
const gameApi = require('./gameApi');
const gameUi = require('./gameUi');
const game = require('./game');
let viewUserGames;
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

const onShowAllGames = function (event) {
  event.preventDefault();
  let userGames = gameUi.gameId;
  viewUserGames = userGames;
  gameApi.gamesShow(userGames)
    .done(gameUi.showAllSuccess)
    .fail(gameUi.failure);
};
// const onShowGame = function (event) {
//   event.preventDefault();
//   let bookId = $('#book-id').val();
//
//   if (bookId.length === 0) {
//     libraryApi.index()
//       .done(ui.onSuccess)
//       .fail(ui.onError);
//   } else {
//     libraryApi.show(bookId)
//       .done(ui.onSuccess)
//       .fail(ui.onError);
//   }
// };

//const onGetBooks = function(event) {
  //event.preventDefault();
//bookId gets the number value from the text box
//   let bookId = $('.book-id').val();
// //if bookId has a value, the library-api.js function 'show' is called.
// //this will run the GET ajax method and pass in bookId as a parameter,
// //the correct url for the requested book.
// //Next, ui.onSuccess calls the onSuccess function from ui.js.
//   if (bookId.length === 0) {
//     libraryApi.index()
//       .done(ui.onSuccess)
//       .fail(ui.onError);
//     } else {
//     libraryApi.show(bookId)
//       .done(ui.onSuccess)
//       .fail(ui.onError);
//   }
// };

const addGameHandlers = () => {
  $('.create-game').on('click',game.startGame);
  $('.create-game').on('click',onCreateGame);
  $('.show-all-games').on('click',onShowAllGames);
  $('.show-all-games').on('click',function() {
    alert(viewUserGames);
  });
};


module.exports = {
  addGameHandlers,
};
