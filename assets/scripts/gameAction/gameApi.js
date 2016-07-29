'use strict';
const app = require('../app');
const gameUi = require('./gameUi');

  // const gamesIndex = () => $.ajax({
  //   url: app.api + '/games',
  //   method: 'GET',
  //   headers: {
  //     Authorization: 'Token token=' + app.user.token,
  //   },
  // });
  const gameCreate = () => $.ajax({
      url: app.api + '/games',
      method: 'POST',
      data: '',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    });


  const gamesShowAll = (data) => $.ajax({
    // return $.ajax({
      url: app.api + '/games/',
      method: 'GET',
      data,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  });

  const gameShow = (data) => $.ajax({
      url: app.api + '/games/' + data.game.id,
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  });

  // success: function(data){
  //
  // jsonObject = JSON.stringify(data);
  // alert(jsonObject);
  // }
  // success: function(data){
  // alert(data.user.games);
  // }
// };


//   const show = function (bookId) {
//   return $.ajax({
//     url: app.host + '/books/' + bookId,
//     method: 'GET',
//   });
// };
/*
  const gamesUpdate = (data) => $.ajax({
      url: app.api + '/games/' + app.user.id,
      method: 'PATCH',
      data,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  });


/*If a player does not make a selection and hits the selection button, issue an
error.
If a player picks a spot that has already been selected, this choice is not possible.
If a player runs out of space, the game is over.
If a player gets 3 of their player types in a row, that player wins.
*/

module.exports = {
  //gamesIndex,
  gameCreate,
  gamesShowAll,
  gameShow,
};
