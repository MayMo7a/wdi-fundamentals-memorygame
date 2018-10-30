//console.log("Up and running!");

//var cardOne = "queen";
//var cardTwo = "king";
//var cardThree = "queen";
//var cardFour = "king";

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardTwo);
/*var cardOne = [0];


 cardsInPlay.push('cardOne');
 cardsInPlay;
 console.log('User flipped queen');

 var cardTwo = [2];
 cardsInPlay.push('cardTwo');
 cardsInPlay;
 console.log('User flipped king');


if (cardsInPlay[0] === cardsInPlay[2]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}*/

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function (){
	if (cardsInPlay[0] === cardsInPlay[2]) {
	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	};
};

var flipCard = function (cardId){
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push('cards[cardId]');
    cardsInPlay;
    

};

flipCard([0]);
flipCard([2]);
checkForMatch();

