'use strict';
const app = require('../app');

const createSuccess = function (data) {
  if (data.game) {
    console.log(data.game);
  } else {
    console.table(data.games);
  }
};
const failure = (error) => {
  console.error(error);
};


module.exports = {
  failure,
  createSuccess,
};
