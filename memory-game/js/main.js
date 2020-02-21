let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

function checkForMatch () {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("Winner, winner, chicken dinner!")
    }
    else {
      console.log("Not a match. Try again.")
    }
  }
}

function flipCard (cardID) {
  cardsInPlay.push(cards[cardID]);
  console.log("User flipped " + cards[cardID]);
  checkForMatch();
}

flipCard(0);
flipCard(1);