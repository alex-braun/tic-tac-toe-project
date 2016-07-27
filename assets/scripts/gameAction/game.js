'use strict';

// let player_x = 'x';
// let player_o = 'o';
// //let gameArray = ['','','','','','','','',''];
// //gameGrid = [0,1,2,3,4,5,6,7,8];
// let turnCount = 0;
// let playerTurn = '';

// const addHandlers = function() {
//   if (player === 1) {
//     $('.grid').on('click', function() {
//        $(this).html('x');
//      });
//     player -= 1;
// } else {
//     console.log('o');
//     player += 1;
// }
// };

//get the value from data with this
const gameArray = ['R1C1','R1C2','R1C3','R2C1','R2C2','R2C3','R3C1','R3C2','R3C3'];
const player_x = 'x';
const player_o = 'o';
let whoseTurn = 0;
//let gridLocation = '';
//let player = 0;
let cells = ['','','','','','','','',''];
//let turnCount = 0;
//let gridNumbers = [];
// const pickPlayer = function() {
//   if (turnCount === 0) {
//     player = player_x;
//     turnCount++;
//   } else if (turnCount % 2 === 0) {
//     player = player_x;
//   } else if( turnCount % 2 !== 0)
//let player = 0;
const playGame = function() {

$('.grid').click(function() {
  if (whoseTurn === 0) {
    $(this).append(player_x).off();
    let gridLocation = $(this).attr('id');
    let gridNumber = gameArray.indexOf(gridLocation);
    cells[gridNumber] = player_x;
    whoseTurn++;
    console.log(cells);
  }  else if (whoseTurn === 1) {
    $(this).append(player_o).off();
    let gridLocation = $(this).attr('id');
    let gridNumber = gameArray.indexOf(gridLocation);
    cells[gridNumber] = player_o;
    whoseTurn--;
    console.log(cells);
}
});
return cells;
};


//function playGame() {
  //if (whoseTurn === 0) {
  //  fillCells(player_x);
  //  whoseTurn++;
  //  console.log(whoseTurn);
//    return whoseTurn;
//  }
//  else {
//    fillCells(player_o);
//    whoseTurn--;
//  }
//}

const gameHandlers = () => {
$('.start-game').on('click', playGame);
};

//gridNumbers += gameArray.indexOf(gridLocation);
//$(this).html(gridLocation);
//alert(gridNumbers);
// function buildCellsArray(player) {
//   for (i = 0; i < gameArray.length; i++) {
//     if (gameArray[i] === gridLocation) {
//       cells[i] === player
//     }
//   }
// }


// function findWinner () {
//   for (let i = 0; i < gridNumbers.length; i++) {
//     if gridNumbers[i]
//   }


// }
// function playerArray(player) {
//   for (let i = 0; i < gameArray.length; i++) {
//     if (gameArray[i] === gridLocation) {
//       cells[i] = player
//   }
// }
// }









//   if (turnCount % 2 === 0) {
//     playerTurn = player_x;
//     turnCount++;
//     console.log(turnCount);
//   }
//   else if (turnCount % 2 !== 0) {
//     playerTurn = player_o;
//     turnCount++;
//     console.log(turnCount);
//   }
// }

/*
for the array, loop through it's contents and check for the first array value that is an empty string.
  If the array value is a string:
    check to see the turnCount.
      If the turnCount divisible by 2:
        It's player_x's turn.
          If player_x clicks on the div,
            Add the data attribute of that div to value x.
            Add x to that position of the gameArray
      Else
*/
// const addHandlers = () => {
//   $('.grid').on('click', function() {
//     $(this).html();
//   });
// };

/*$('.board .space').on('click', function() {
  if (spaceOne.hasClass('o')&&spaceTwo.hasClass('o')&&spaceThree.hasClass('o') ||
      spaceFour.hasClass('o')&&spaceFive.hasClass('o')&&spaceSix.hasClass('o') ||
      spaceOne.hasClass('o')&&spaceEight.hasClass('o')&&spaceNine.hasClass('o') ||
      spaceOne.hasClass('o')&&spaceFour.hasClass('o')&&spaceSeven.hasClass('o') ||
      spaceTwo.hasClass('o')&&spaceFive.hasClass('o')&&spaceEight.hasClass('o') ||
      spaceThree.hasClass('o')&&spaceSix.hasClass('o')&&spaceNine.hasClass('o') ||
      spaceOne.hasClass('o')&&spaceFive.hasClass('o')&&spaceNine.hasClass('o') ||
      spaceThree.hasClass('o')&&spaceFive.hasClass('o')&&spaceSeven.hasClass('o')) {
        //player_o wins
      }
      else if
     (spaceOne.hasClass('x')&&spaceTwo.hasClass('x')&&spaceThree.hasClass('x') ||
      spaceFour.hasClass('x')&&spaceFive.hasClass('x')&&spaceSix.hasClass('x') ||
      spaceOne.hasClass('x')&&spaceEight.hasClass('x')&&spaceNine.hasClass('x') ||
      spaceOne.hasClass('x')&&spaceFour.hasClass('x')&&spaceSeven.hasClass('x') ||
      spaceTwo.hasClass('x')&&spaceFive.hasClass('x')&&spaceEight.hasClass('x') ||
      spaceThree.hasClass('x')&&spaceSix.hasClass('x')&&spaceNine.hasClass('x') ||
      spaceOne.hasClass('x')&&spaceFive.hasClass('x')&&spaceNine.hasClass('x') ||
      spaceThree.hasClass('x')&&spaceFive.hasClass('x')&&spaceSeven.hasClass('x')) {
        //player_x wins
      }
      else if
      (turns === 9) {
        //tie game
      }


    });


function reset() {
      $('.board .space').removeClass('o');
      $('.board div').removeClass('x');
    }
};
*/
module.exports = {
  // gameProgress,
  gameHandlers,
};
