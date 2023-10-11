'use strict';

const check = document.querySelector('.check');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const again = document.querySelector('.again');
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let currentScore = 20;
let highScores = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
  document.querySelector('.score').textContent = number;
};
// add event click
check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ No number');
    // when guess win
  } else if (guess === randomNumber) {
    displayNumber(guess);
    displayMessage('correct number 🏆');
    document.querySelector('body').style.backgroundColor = 'green';
    number.style.width = '30rem';
    // get highscore
    if (highScores < currentScore) {
      highScores = currentScore;
      document.querySelector('.highscore').textContent = highScores;
    }
  } else if (guess !== randomNumber) {
    if (currentScore > 1) {
      displayMessage(guess > randomNumber ? 'to high 📈' : 'too low 📉');
      currentScore--;
      displayScore(currentScore);
    } else {
      displayMessage('You lost the game 😭');
      displayScore(0);
    }
  }
});
// implement play again btn
again.addEventListener('click', () => {
  displayMessage('start guessing ...');
  displayNumber('?');
  displayScore(20);
  currentScore = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
