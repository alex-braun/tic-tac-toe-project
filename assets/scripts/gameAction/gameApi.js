'use strict';
const app = require('../app');
// const gameUi = require('./gameUi');


  const gameCreate = () => $.ajax({
      url: app.api + '/games',
      method: 'POST',
      data: '',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
    });


  const gamesShowAll = (data) => $.ajax({
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
      data,
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
  });


  const gameUpdate = function (gridLocation, player, over) {
      return $.ajax({
      url: app.api + '/games/' + app.user.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: {
                "game": {
                  "cell": {
                    "index": gridLocation,
                    "value": player,
                  },
                  "over": over,
                }
              },
  });
};


module.exports = {
  gameCreate,
  gamesShowAll,
  gameShow,
  gameUpdate,
};
