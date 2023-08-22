'use strict';
// console.log(document.querySelector('.message').textContent); //textcontent gives the text inside the element tag
// document.querySelector('.message').textContent = 'Correct Number!';//we can also set the textcontent or any other element
// document.querySelector('.guess').value = 34; //input is of type number nad hence it's we are accessing its value
//addeventlistener takes two parameters(event,a function to call when the event happens)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = "#222";
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = "15rem";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('🏁 Start guessing...'); 
    document.querySelector('.number').textContent = '?'; 
    document.querySelector('.guess').value = ' ';

});

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);
    //when player gives no input
    if (!guess) {
        displayMessage('❌ No number!');
     
    }
    //when player wins
    else if (guess === secretNumber) 
    {   displayMessage( '✅ Correct Number!'); 
        document.querySelector('body').style.backgroundColor = "#82CD47";
        document.querySelector('.number').style.width = "30rem";
        document.querySelector('.number').textContent = secretNumber; 
    //to keep track of highscores
    if(highscore < score){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
}
   //when guess is too high
    else if (guess > secretNumber) 
        {
        if (score > 1) { 
            displayMessage( guess > secretNumber ? '⬇️  Lower your expectation!' :'⬆️ It is ok to want more!');
        score = score - 1;
        document.querySelector('.score').textContent = score;
    }
        else {
            displayMessage('YOU LOSE 😞');
        }
    }
   
  //DOM can also change the CSS styles
    //everytime we are guessing wrong number,score will decrease
});

