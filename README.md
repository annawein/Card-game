# Objective

The task was to build a card game for 2 players played on the command line (not a web application).

## Gameplay

The game is designed to play automatically once it runs in the terminal and the question of whether the player wants to play has been answered with a "y."

### Draw cards

The game commences by creating a deck of a total of 40 cards containing 4 cards each with values between 1 and 10. The deck is shuffled using the Fisher-Yates Shuffle Algorithm to ensure a deck with cards in random order. Each player receives 20 cards face-down from the shuffled deck for their respective draw piles. Both players also start with an empty discard pile each.

### Playing a turn

Whenever a turn is played, the players see how many cards are in their possession (draw and discard pile) and which card they have drawn. The player who has the card with the higher value wins the cards played by both players in the respective round and places them into his/her discard pile. The game will show in this case which player has won. If both players have drawn cards with the same face value, the game shows that no player wins the round. Instead both played cards land in a separate tie pile. The winner of the next round wins the content of the tie pile as well as the cards played in the last round.

### Having no cards to draw from drawing pile

If the drawing pile is empty, the game will transfer the cards from the discard pile to the draw pile from the player and shuffle the pile before the round continues.

### Winning the game

At some point, one player will have no cards in neither draw and discard pile and therefore loses the game. The other player with cards left in draw and/or discard pile wins the game!

## Technologies

- JavaScript
- Testing: JEST

## Files

1. index.js: File containing the code for the game.
2. test.js: File containing all unit-tests.

## Install dependencies

For testing purposes you need to install JEST library by using the following command: `npm install --save-dev jest`

## Execute the game

To execute the game, you need to type `node bin` into the terminal and answer the question with `y`.

## Testing

The following unit-tests have been implemented to ensure that the game works accurately every time it is played:

- Test 1: A new deck should contain 40 cards.
- Test 2: A shuffle function should shuffle a deck.
- Test 3: If a player with an empty draw pile tries to draw a card, the discard pile is shuffled into the draw pile.
- Test 4: When comparing two cards, the higher card should win.
- Test 5: When comparing two cards of the same value, the winner of the next round should win 4 cards.

The unit-tests are using parts of the game code to check whether the desired outcome is obtained. Basis for the unit-tests is the JEST library. If you want to run all the tests, you need to type `npm test` into the terminal.
