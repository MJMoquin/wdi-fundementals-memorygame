let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];
let cardOne = cards[0];
cardsInPlay.push(cardOne);
let cardTwo = cards[1];
cardsInPlay.push(cardTwo);


if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("Winner, winner, chicken dinner!")
  }
  else {
    alert("Not a match. Try again.")
  }
}

console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);