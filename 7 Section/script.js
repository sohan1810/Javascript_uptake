"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// document.querySelector(".guess").value = 20;
/////// Number display ///////
document.querySelector(".number").textContent = secretNumber;

/////// check Number///////
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";

    // When player Too high
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    /////// Number display ///////
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    ///////display highscore ///////
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    } //else if (guess !== secretNumber) {
    // }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " You lost the game ";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff3200";
    }

    // When player Too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " You lost the game ";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff3200";
    }
  }
});

/////////////Again!//////////

document.querySelector(".again").addEventListener("click", function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".score").textContent = score;

  // document.querySelector(".number").textContent = "?";
  document.querySelector(".number").textContent = secretNumber;

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  // document.querySelector(".number").style.width = "15rem";
});

// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

////////////////////////////////////////////////////////////////////////////////
const messageElement = document.querySelector(".message");
const guessInput = document.querySelector(".guess");
const btnCheck = document.querySelector(".check");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const scoreElement = document.querySelector(".score");
const highscoreElement = document.querySelector(".highscore");
const messageDisplay = document.querySelector(".message");
const numberDisplay = document.querySelector(".number");

function displayMessage(message) {
  messageElement.textContent = message;
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModalWindow() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnCheck.addEventListener("click", function () {
  const guess = Number(guessInput.value);

  if (guess === secretNumber) {
    openModal();

    modal.querySelector('h1').textContent = `You won 😍 Score: ${score}`;
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }

  scoreElement();
});

closeModalWindow();

closeModal.addEventListener("click", closeModalWindow);
overlay.addEventListener("click", closeModalWindow);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    }
  }
});
