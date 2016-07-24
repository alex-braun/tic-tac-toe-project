'use strict';
const app = require('./app');

  const gamesIndex = () => $.ajax({
    url: app.api + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });

  const gamesCreate = (data) => $.ajax({
      url: app.api + '/games',
      method: 'POST',
      data,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    });

  const gamesShow = (data) => $.ajax({
      url: app.api + '/games/'+app.user.id,
      method: 'GET',
      data,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  });

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
  gamesIndex,
  gamesCreate,
  gamesShow,
  gamesUpdate,
};
