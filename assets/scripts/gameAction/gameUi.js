'use strict';
const app = require('../app');
const game = require('./game');

let createdGame;


const createSuccess = function (data) {
  createdGame = data.game.id;
  if (data.game) {
    console.log(data.game);
  }
  app.user.id = data.game.id;
  return createdGame;
};


const showAllSuccess = function (data) {
  // let oWon = 0;
  // let xWon = 0;
  // let tie = 0;
  let completedGames = 0;
  if (data) {
    console.log(data);
    for (let i = 0; i < data.games.length; i++) {

      // console.log(data.games[i].cells) ;
      if (data.games[i].over === true) {
        completedGames++;
        $('.completed-games-count').text('You have finished ' + completedGames +
        ' out of ' + data.games.length + ' games.');
      }

    }
    return completedGames;
  }
};
        // for (let j = 0; j < data.games[i].cells.length; j++) {
        //   let xPicks = [];
        //   let oPicks = [];
        //   let gridNumber;
        //   if (data.games[i].cells[j] === 'x') {
        //     gridNumber = data.games[i].cells.indexOf(data.games[i].cells[j]);
        //     xPicks.push(gridNumber);
        //   } else if (data.games[i].cells[j] === 'o') {
        //     oPicks.push(gridNumber);
        //   }
        //   if (xPicks.includes(0)&& xPicks.includes(1)&& xPicks.includes(2)||
        //       xPicks.includes(3)&& xPicks.includes(4)&& xPicks.includes(5)||
        //       xPicks.includes(6)&& xPicks.includes(7)&& xPicks.includes(8)||
        //       xPicks.includes(0)&& xPicks.includes(3)&& xPicks.includes(6)||
        //       xPicks.includes(1)&& xPicks.includes(4)&& xPicks.includes(7)||
        //       xPicks.includes(2)&& xPicks.includes(5)&& xPicks.includes(8)||
        //       xPicks.includes(0)&& xPicks.includes(4)&& xPicks.includes(8)||
        //       xPicks.includes(2)&& xPicks.includes(4)&& xPicks.includes(6)) {
        //
        //         xWon++;
        //
        //   } else if (oPicks.includes(0)&& oPicks.includes(1)&& oPicks.includes(2)||
        //       oPicks.includes(3)&& oPicks.includes(4)&& oPicks.includes(5)||
        //       oPicks.includes(6)&& oPicks.includes(7)&& oPicks.includes(8)||
        //       oPicks.includes(0)&& oPicks.includes(3)&& oPicks.includes(6)||
        //       oPicks.includes(1)&& oPicks.includes(4)&& oPicks.includes(7)||
        //       oPicks.includes(2)&& oPicks.includes(5)&& oPicks.includes(8)||
        //       oPicks.includes(0)&& oPicks.includes(4)&& oPicks.includes(8)||
        //       oPicks.includes(2)&& oPicks.includes(4)&& oPicks.includes(6)) {
        //
        //         oWon++;
        //   } else {
        //         tie++;
        //     }
          // }
          // return completedGames;
//       }
//
//     }
//     console.log(xWon, oWon, tie);
//
// };


// let iterateEachGame = function() {
//   for (let j = 0; j < data.games[i].cells.length; j++)
// }

const showGameSuccess = (data) => {
  app.game = data.game;
  console.log(app);
  for (let i = 0; i < data.game.cells.length; i++) {

  }
  console.log(data.game.cells.length);
};

const failure = (error) => {
  console.error(error);
};


module.exports = {
  failure,
  createSuccess,
  showAllSuccess,
  showGameSuccess,
};
