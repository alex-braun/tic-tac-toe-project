'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events');
//const gameLogic = require('./gameAction/game');
const gameEvents = require('./gameAction/gameEvents');
// On document ready
$(() => {
  authEvents.addHandlers();
  gameEvents.addGameHandlers();
  //gameLogic.gameHandlers();
  //gameLogic.addGameHandlers();
});
