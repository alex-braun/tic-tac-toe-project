'use strict';
const gameUi = require('./gameUi');
//arrays and variables
const gameArray = ['R1C1','R1C2','R1C3','R2C1','R2C2','R2C3','R3C1','R3C2','R3C3'];
const player_x = 'x';
const player_o = 'o';
//let turnCount = 0;
let turnCount = 0;
let cells = [];
let xPicks = [];
let oPicks = [];
let over = false;


//Resets the game variables and events after pressing the "Reset Game" button
let resetGame = function() {
  $('.grid').empty();
  $('.message-board').empty();
  over = false;
  cells = [];
  turnCount = 0;
  xPicks = [];
  oPicks = [];
};


//The game logic is contained within this function
//const startGame() {

const playGame = function() {
  let player = 0;
  if (turnCount % 2 === 0) {
    player = player_x;
  } else {
    player = player_o;
  }

  $(this).append(player).off();

  let gridLocation = $(this).data('value');
  let gridNumber = gameArray.indexOf(gridLocation);
  cells[gridNumber] = player;

  if (player === player_x) {
    xPicks.push(gridNumber);
  } else if (player === player_o) {
    oPicks.push(gridNumber);
  }
  turnCount++;

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
  }
  //++turnCount;
  console.log(gameUi.listOfUserGames);
  console.log(turnCount);
  return cells;
  };

//});
let startGame = function() {
  $('.grid').on('click',playGame);
};

$('.reset-game').on('click',resetGame);
// $('.show-all-games').on('click', function() {
//   for (let i = 0; i < gameUi.listOfUserGames.length; i++) {
//     alert(gameUi.listOfUserGames[i]);
//   }
// });
//};
module.exports = {
  startGame,
  //addGameHandlers,
  //resetGame,
};
