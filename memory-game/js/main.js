const cards = [
{
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
{
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
{
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
{
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"
}
];

let cardsInPlay = [];

function checkForMatch () {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("Winner, winner, chicken dinner!")
    }
    else {
      alert("Not a match. Try again.")
    }
  }
}

function flipCard (cardID) {
  cardsInPlay.push(cards[cardID].rank);
  console.log("User flipped " + cards[cardID].rank);
  console.log(cards[cardID].cardImage);
  console.log(cards[cardID].suit);
  checkForMatch();
}

flipCard(0);
flipCard(2);