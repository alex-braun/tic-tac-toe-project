'use strict';

const winningCombo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const gameArray = [0,1,2,
                  3,4,5,
                  6,7,8];

let playerX = [x,y];
let playerO = [x,y];

const findPlayerChoice = function (gameMatrix,playerChoice) {
    let result = '';
    for (let i = 0; i < gameMatrix.length; i++) {
  result = gameMatrix[3 * playerChoice[i][0] + playerChoice[i][1]];
}
    return result;
};








winTwo = [3,4,5];
winThree = [6,7,8];
winFour = [0,3,6];
winFive = [1,4,7];
winSix = [2,5,8];
winSeven = [0,4,8];
winEight = [2,4,6];
/*If a player does not make a selection and hits the selection button, issue an
error.
If a player picks a spot that has already been selected, this choice is not possible.
If a player runs out of space, the game is over.
If a player gets 3 of their player types in a row, that player wins.
*/
