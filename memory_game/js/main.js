console.log("Up and running!");

//array with four cards in it
var cards = ["queen", "queen", "king", "king"];

//array with cards that have been selected
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length < 2) {
		return;
	}
	else if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

var flipCard = function(cardId) {

console.log("User flipped " + cards[cardId]);

cardsInPlay.push(cards[cardId]);

checkForMatch();
}

flipCard(0);
flipCard(2);