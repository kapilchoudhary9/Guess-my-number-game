'use strict';
//Handling click event
//We are defining the secret number in the start of programme so that it will be calculated at the very start of the game.
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;
const displayMessage = function(message){
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    //When there is no input
    // document.querySelector('.message').textContent = 'Please insert an number';
    displayMessage( 'Please insert an number')
  } //We used !guess because it is executed when condition is true.if we dont put a number then guess becomes 0 and 0 is the the falsy value.So we used !guess here so that the falsy value can be changed to true to execute the if statement.
  else if (secretNumber === guess) {
    //When the player wins
    let highscore = Number(document.querySelector('.highscore').textContent);
    if (score > highscore) {
      document.querySelector('.highscore').textContent = score;
    } else if (score < highscore) {
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent =
    //   'Wohoo that was the correct guess!';
    displayMessage('Wohoo that was the correct guess!')
    //Below are the inline css not the external or internal css.
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').disabled = true;
  }
  else if (guess !== secretNumber) { //When guess is wrong.
    //When input is grater than generated number
    if (score > 1) {
      //We did the score > 1 because

      // document.querySelector('.message').textContent = guess > secretNumber ? 'sorry, your guess was too high!': 'sorry your guess was too low!';
      displayMessage(guess > secretNumber ? 'sorry, your guess was too high!': 'sorry your guess was too low!')
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   '💥Sorry you lost the game';
      displayMessage('💥Sorry you lost the game')
      document.querySelector('.score').textContent = 0;
    }
   } 
});



//1.
document.querySelector('.again').addEventListener('click', function () {
  // location.reload(); It just reloads the page. So we will not use it
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...')
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
});
document.querySelector('.reset').addEventListener('click', function () {
  location.reload(); // Reloads the page
});
