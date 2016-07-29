'use strict';
const app = require('../app');
let showAll = {};
let createdGame;

const createSuccess = function (data) {
  createdGame = data.game.id;
  if (data.game) {
    console.log(data.game);
  }
  app.user.id = data.game.id;
  return createdGame;
};

// const showAllSuccess = function (data) {
//   showAll = data.user;
//   if (data) {
//     console.log(data);
//     alert(JSON.stringify(data));
//   }
// };

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
  // showAllSuccess,
  showGameSuccess,


};
