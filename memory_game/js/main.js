console.log("Up and running!");

//array with four cards in it
var cards = ["queen", "queen", "king", "king"];

//array with cards that have been selected
var cardsInPlay = [];

//selects card one as the first in the cards array
var cardOne = cards[0];
//places cardOne into the cardsInPlay array
cardsInPlay.push(cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

//checks that the length of cards in cardsInPlay is 2
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} 
	else {
		alert("Sorry, try again.");
	}
}