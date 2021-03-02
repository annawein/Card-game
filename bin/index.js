#!/usr/bin/env node

const readline = require('readline');

const rl = readline.createInterface({

  input: process.stdin,
  output: process.stdout

});

function shuffle(array) {

  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

  randomIndex = Math.floor(Math.random() * currentIndex);

  currentIndex -= 1;

  temporaryValue = array[currentIndex];

   array[currentIndex] = array[randomIndex];

  array[randomIndex] = temporaryValue;

  }
  
  return array;
  
}

function drawCard(drawPile) {

    if (drawPile.length == 0) {

    shuffle(discardPile);

    } }


  const testdraw = () =>  {

    if (testDrawPile.length == 0) {

        shuffle(testDiscardPile);

        testDrawPile.push(...testDiscardPile);

        testDiscardPile = [];

        return testDrawPile;

    } };


rl.question('Type "y" to start the game! \n', (userInput) => {

    if (userInput.trim() == 'y') {

      var newDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      shuffle(newDeck);
     
      var player1DrawPile = newDeck.slice(0, 20);
      var player2DrawPile = newDeck.slice(20, 40);

      var player1DiscardPile = [];
      var player2DiscardPile = [];
      var tiePile = [];

      var player1Count = player1DrawPile.length + player1DiscardPile.length; 
      var player2Count = player2DrawPile.length + player2DiscardPile.length; 

      var counter = 0;

      while (player1Count > 0 && player2Count > 0) {

          counter += 1;

        if (player1DrawPile.length == 0) {

          shuffle(player1DiscardPile);

          player1DrawPile.push(...player1DiscardPile);

          player1DiscardPile = [];

          } 

      
        if (player2DrawPile.length == 0) {

          shuffle(player2DiscardPile);

          player2DrawPile.push(...player2DiscardPile);

          player2DiscardPile = [];

          } 

          var player1Turn = player1DrawPile[0];
          var player2Turn = player2DrawPile[0];

          player1DrawPile.shift();
          player2DrawPile.shift();
          
          console.log('Player 1 (' + player1Count + ' cards): ' + player1Turn);
          console.log('Player 2 (' + player2Count + ' cards): ' + player2Turn);

          if (player1Turn > player2Turn) {

            console.log("Player 1 wins this round \n");

            player1DiscardPile.push(player1Turn);

            player1DiscardPile.push(player2Turn);

            player1DiscardPile.push(...tiePile);

            tiePile = [];

          }

          else if (player1Turn < player2Turn) {

            console.log("Player 2 wins this round \n");

            player2DiscardPile.push(player1Turn);

            player2DiscardPile.push(player2Turn);

            player2DiscardPile.push(...tiePile);

            tiePile = [];

          }

          else if (player1Turn == player2Turn) {

            console.log("No winner in this round \n");

            tiePile.push(player1Turn);

            tiePile.push(player2Turn);

          }

          player1Count = player1DrawPile.length + player1DiscardPile.length; 
          player2Count = player2DrawPile.length + player2DiscardPile.length;

          if (player1Count == 0) {

            console.log("Player 1 lost!");

          }

          if (player2Count == 0) {

            console.log("Player 2 lost!");

          }


      }


    }

    rl.close();  


});

module.exports = shuffle;
module.exports = drawCard;
module.exports = testdraw; 
