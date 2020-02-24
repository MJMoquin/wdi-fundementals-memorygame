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
let wins = 0;

function resetBoard() {
  let cardBoard = document.getElementById('game-board');
  while (cardBoard.firstChild) {
    cardBoard.removeChild(cardBoard.lastChild);
  }
  cardsInPlay = [];
}

function createBoard () {
  resetBoard();
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

function checkForMatch () {
  document.getElementsByTagName('img')[cardID].setAttribute('src', cards[cardID].cardImage)
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      wins += 1;
      alert("Winner, winner, chicken dinner! Total wins: " + wins);
    }
    else {
      alert("Not a match. Try again.")
    }
  }
}

function flipCard () {
  cardID = this.getAttribute('data-id');
  console.log(cardID);
  cardsInPlay.push(cards[cardID].rank);
  console.log("User flipped " + cards[cardID].rank);
  console.log(cards[cardID].cardImage);
  console.log(cards[cardID].suit);
  checkForMatch();
}

createBoard();
