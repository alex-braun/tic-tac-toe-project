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
  $('.create-game').css('visibility','visible');
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
  $('.create-game').css('visibility','hidden');
  $('.reset-game').hide();
  let player = 0;
  if (turnCount % 2 === 0) {
    player = player_x;
    $(this).prepend('<img src="http://i.imgur.com/iRgTEZU.jpg" title="source: imgur.com" height="100%" width="100%">').off();
  } else {
    player = player_o;
    $(this).prepend('<img src="http://i.imgur.com/6L4IMCz.gif" title="source: imgur.com" height="100%" width="100%">').off();
  }
// $('#test').empty().append('<img src="/static/on.png" height="64px" width="64px">')
  // $(this).prepend('<img src="../images/letter-x_318-26692.png" height="125px" width="125px">').off();

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
      $('.reset-game').show();

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
//     console.log(gameUi.showAll.user.games);
//});

module.exports = {
  startGame,
  //addGameHandlers,
  //resetGame,
};
