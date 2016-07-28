'use strict';
const app = require('../app');


const createSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
  }
};

const showAllSuccess = function (userGames) {
  if (userGames) {
    console.log(userGames);
  }
};

const failure = (error) => {
  console.error(error);
};


module.exports = {
  failure,
  createSuccess,
  showAllSuccess,

};
