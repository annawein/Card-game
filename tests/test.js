const shuffle = require('../bin/index.js');
const drawCard = require('../bin/index.js');


test('A new deck should contain 40 cards', () => {

    var newDeck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(newDeck).toHaveLength(40);

    }

);


test('When comparing cards, the greater card should win', () => {

    var card1 = 1;
    var card2 = 2;

    expect(card2).toBeGreaterThan(card1);

  });



test('If a player with an empty draw pile tries to draw a card, the discard pile is shuffled into the draw pile.', () => {

    var testDrawPile = [];
    var testDiscardPile = [1, 2, 3, 4, 5, 6, 7, 8];

    if (testDrawPile.length == 0) {

        testDrawPile.push(...testDiscardPile);

    }

    expect(testDrawPile).toHaveLength(8);

    expect(testDrawPile).toEqual(testDiscardPile);

});


test('When comparing cards, the greater card should win', () => {

    var card1 = 5;
    var card2 = 2;

    if (card1 > card2) {

        console.log("Player 1 wins this round \n");

    }

        expect(card1).toBeGreaterThan(card2);

  });


test('When comparing two cards of the same value, the winner of the next round should win 4 cards.', () => {

    var test3DrawPile = [5,6,3];
    var test4DrawPile = [5,2,7];
    var test3DiscardPile = [];
    var test4DiscardPile = [];
    var testTiePile = [];
    var test3Turn = 0;
    var test4Turn = 0;
    
    var count2rounds =0;

    while (count2rounds < 2) {

        count2rounds += 1;
        
        test3Turn = test3DrawPile[0];

        test4Turn = test4DrawPile[0];

        test3DrawPile.shift();

        test4DrawPile.shift();

        if (test3Turn == test4Turn) {

            console.log("No winner in this round \n");

            testTiePile.push(test3Turn);

            testTiePile.push(test4Turn);
        }

        else if (test3Turn > test4Turn) {

            console.log("Player 1 wins this round \n");

            test3DiscardPile.push(test3Turn);

            test3DiscardPile.push(test4Turn);

            test3DiscardPile.push(...testTiePile);

            testTiePile = [];

        }

        else if (test3Turn < test4Turn) { 

            console.log("Player 2 wins this round \n");

            test4DiscardPile.push(test3Turn);

            test4DiscardPile.push(test4Turn);

            test4DiscardPile.push(...testTiePile);

            testTiePile = [];

        }

}

expect(test3DiscardPile).toHaveLength(4);

expect(test4DiscardPile).toHaveLength(0);

});
