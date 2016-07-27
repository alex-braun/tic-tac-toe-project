'use strict';
//arrays and variables
const gameArray = ['R1C1','R1C2','R1C3','R2C1','R2C2','R2C3','R3C1','R3C2','R3C3'];
const player_x = 'x';
const player_o = 'o';
let whoseTurn = 0;
let cells = ['','','','','','','','',''];
let xPicks = [];
let oPicks = [];
let over = false;

//the game logic is contained within this function lines 13-68
const playGame = function() {
$('.grid').click(function() {
  if (whoseTurn % 2 === 0) {
    $(this).append(player_x).off();
    let gridLocation = $(this).attr('id');
    let gridNumber = gameArray.indexOf(gridLocation);
    xPicks.push(gridNumber);
    cells[gridNumber] = player_x;
    whoseTurn++;
    //console.log(cells);
    console.log(xPicks);
  }  else if (whoseTurn % 2 !== 0) {
    $(this).append(player_o).off();
    let gridLocation = $(this).attr('id');
    let gridNumber = gameArray.indexOf(gridLocation);
    oPicks.push(gridNumber);
    cells[gridNumber] = player_o;
    whoseTurn++;
    //console.log(cells);
    console.log(oPicks);
  } //conditional statements to determine winners or a tie
  if (xPicks.includes(0)&& xPicks.includes(1)&& xPicks.includes(2)||
      xPicks.includes(3)&& xPicks.includes(4)&& xPicks.includes(5)||
      xPicks.includes(6)&& xPicks.includes(7)&& xPicks.includes(8)||
      xPicks.includes(0)&& xPicks.includes(3)&& xPicks.includes(6)||
      xPicks.includes(1)&& xPicks.includes(4)&& xPicks.includes(7)||
      xPicks.includes(2)&& xPicks.includes(5)&& xPicks.includes(8)||
      xPicks.includes(0)&& xPicks.includes(4)&& xPicks.includes(8)||
      xPicks.includes(2)&& xPicks.includes(4)&& xPicks.includes(6)) {
        console.log("X wins!");
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
        console.log("O wins!");
        $('.message-board').text("Player O WINS");
        over = true;
  } else if (whoseTurn === 9) {
        console.log("Tie Game!!");
        $('.message-board').text("It's a TIE");
        over = true;
  }
  if (over === true) {
      $('.grid').off();
      //$('.start-game').off();
      //$('.reset-game').show('button');
  }
  console.log(cells);
  return cells;
});

$('.reset-game').on('click', function () {
  $('.start-game').on();
  $('grid').on();
  $('.grid').empty();
  $('.message-board').empty();
  over = false;
  cells = ['','','','','','','','',''];
  whoseTurn = 0;
  xPicks = [];
  oPicks = [];
});
};

const gameHandlers = () => {
$('.start-game').on('click', playGame);
};


module.exports = {

  gameHandlers,
};
