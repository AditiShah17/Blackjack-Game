// 1. Create two variables, firstCard and secondCard. Set their values to a random number between 2-11
// Set their value to a random number between 2-11

//  2. Create a variable, sum, and set it to the sum of the two cards
// CASH OUT
// 1. Create a variable, hasBlackJack, and set it to false
// 2. Create a variable, isAlive, and set it to true
// 3. Create a variable, message, and set it to an empty string ("")

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
// IMPORTANT : Query selector is more powerful than get element by id,
// it can select any element in the document using CSS selectors
let cardEl = document.getElementById("card-el");

let player = {
  name: "Aditi",
  chips: 215,
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1; //random number between 1 and 13, random number between 0 and 0.9999
  // Math.floor rounds down the number to the nearest integer removing the decimal part, so we get a number between 1 and 13
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    isAlive = false;
    message = "You're out of the game!";
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
}
