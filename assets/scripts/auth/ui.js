'use strict';
const app = require('../app');

const success = (data) => {
  console.log(data);
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('.player-id').text("Hello, user: " + data.user.id);
  console.log(app);
};

const signOutSuccess = () => {
  delete app.user;
  console.log(app);
};
const failure = (error) => {
  console.error(error);

};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  app,
};
