'use strict';
const app = require('../app');
let showAll = {};
let createdGame;

const createSuccess = function (data) {
  createdGame = data.game.id;
  if (data.game) {
    console.log(data.game);
  }
  return createdGame;
};

const showAllSuccess = function (data) {
  showAll = data.user;
  if (data) {
    console.log(data);
    alert(JSON.stringify(data));
  }
};

const showSuccess = () => {

    console.log(createdGame);
  };


const failure = (error) => {
  console.error(error);
};


module.exports = {
  failure,
  createSuccess,
  showAllSuccess,
  showSuccess,


};
