'use strict';
const app = require('../app');
let completedGames = 0;
let createdGame;


const createSuccess = function (data) {
  createdGame = data.game.id;
  if (data.game) {
    console.log(data.game);
  }
  app.user.id = data.game.id;
  return createdGame;
};

const showAllSuccess = function (data) {
  if (data) {
    console.log(data.games.length);
    for (let i = 0; i < data.games.length; i++) {
      if (data.games[i].over === true) {
        completedGames++;
      }
    }
    $('.completed-games-count').text('You have finished ' + completedGames + ' out of ' + data.games.length + ' games.');
    return completedGames;
  }
};

const showGameSuccess = (data) => {
  app.game = data.game;
  console.log(app);
};

const failure = (error) => {
  console.error(error);
};


module.exports = {
  failure,
  createSuccess,
  showAllSuccess,
  showGameSuccess,



};
