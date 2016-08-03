'use strict';
//const gameUi = require('./gameUi');
const gameApi = require('./gameApi');


//arrays and variables
const gameArray = ['R1C1','R1C2','R1C3','R2C1','R2C2','R2C3','R3C1','R3C2','R3C3'];
let turnCount = 0;
let over = false;
let gridLocation;
let player = 'x';
let xPicks = [];
let oPicks = [];
let gridNumber;


//checks for playerTurn and adds the correct card on the grid spot.
const playerTurn = function() {
  if (turnCount % 2 === 0) {
    player = 'x';
    $(this).prepend('<h2>&times</h2>').off();
  } else {
    player = 'o';
    $(this).prepend('<h3>&cir;</h3>').off();
  }
  turnCount++;
  return player;
};

//finds the grid location
const findGridLocation = function () {
  gridLocation = $(this).data('spot');
  gridNumber = gameArray.indexOf(gridLocation);
  $(this).data().value = player;
};

//checks if there is a winner or a tie after every turn
const checkStatus = function () {
  if (player === 'x') {
    xPicks.push(gridNumber);
  } else if (player === 'o') {
    oPicks.push(gridNumber);
  }
  if (xPicks.includes(0)&& xPicks.includes(1)&& xPicks.includes(2)||
      xPicks.includes(3)&& xPicks.includes(4)&& xPicks.includes(5)||
      xPicks.includes(6)&& xPicks.includes(7)&& xPicks.includes(8)||
      xPicks.includes(0)&& xPicks.includes(3)&& xPicks.includes(6)||
      xPicks.includes(1)&& xPicks.includes(4)&& xPicks.includes(7)||
      xPicks.includes(2)&& xPicks.includes(5)&& xPicks.includes(8)||
      xPicks.includes(0)&& xPicks.includes(4)&& xPicks.includes(8)||
      xPicks.includes(2)&& xPicks.includes(4)&& xPicks.includes(6)) {

        $('.message-board').text("Player X WINS");
        over = true;

  } else if (oPicks.includes(0)&& oPicks.includes(1)&& oPicks.includes(2)||
      oPicks.includes(3)&& oPicks.includes(4)&& oPicks.includes(5)||
      oPicks.includes(6)&& oPicks.includes(7)&& oPicks.includes(8)||
      oPicks.includes(0)&& oPicks.includes(3)&& oPicks.includes(6)||
      oPicks.includes(1)&& oPicks.includes(4)&& oPicks.includes(7)||
      oPicks.includes(2)&& oPicks.includes(5)&& oPicks.includes(8)||
      oPicks.includes(0)&& oPicks.includes(4)&& oPicks.includes(8)||
      oPicks.includes(2)&& oPicks.includes(4)&& oPicks.includes(6)) {

        $('.message-board').text("Player O WINS");
        over = true;
  }

    else if (turnCount === 9) {
        $('.message-board').text("It's a TIE");
        over = true;
  }


  if (over === true) {
      $('.grid').off();
      $('.reset-game').show();
  }

  //THIS IS THE UPDATE POINT FOR THE PATCH REQUEST
  gameApi.gameUpdate(gridNumber, player, over);

  return over;
  };

//this function resets the game whenever the 'reset game' button is pressed
  let resetGame = function() {
    over = true;
    $('.grid').empty();
    $('.message-board').empty();
    $('.grid').on('click', playerTurn);
    $('.grid').on('click', findGridLocation);
    $('.grid').on('click', checkStatus);
    $('.grid').removeData('value');
    over = false;
    turnCount = 0;
    xPicks = [];
    oPicks = [];
    player = 'x';
    return playerTurn;
  };

$('.grid').on('click', playerTurn);
$('.grid').on('click', findGridLocation);
$('.grid').on('click', checkStatus);
$('.reset-game').on('click',resetGame);


module.exports = {

  playerTurn,
  findGridLocation,
  checkStatus,
  resetGame,
};
