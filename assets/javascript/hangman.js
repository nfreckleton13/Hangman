var officeThings = ["paper", "beats", "jim", "pam", "angela", "kelly", "ryan", "documentary", "dwight", "oscar", "creed", "toby", "phylis", "chili", "diversity", "scranton", "warehouse", "pranks", "jello"];


var word = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];
var letterGuessed = "";
var numGuesses = 10;
var winCounter = 0;
var lossCounter = 0;


function startGame() {

  numGuesses = 10;

  word = officeThings[Math.floor(Math.random() * officeThings.length)];

  lettersInWord = word.split("");

  numBlanks = lettersInWord.length;

  blanksAndSuccesses = [];

  wrongGuesses = [];

  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  document.getElementById("guesses-left").innerHTML = numGuesses;
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {

  var letterInWord = false;

  for (var i = 0; i < numBlanks; i++) {

    if (word[i] === letter) {

      letterInWord = true;
    }
  }

  if (letterInWord) {

    for (var j = 0; j < numBlanks; j++) {

      if (word[j] === letter) {

        blanksAndSuccesses[j] = letter;
      }
    }

    console.log(blanksAndSuccesses);
  }

  else {

    wrongGuesses.push(letter);
    numGuesses--;

  }

}

function roundComplete() {

  document.getElementById("guesses-left").innerHTML = numGuesses;
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  if (lettersInWord.toString() === blanksAndSuccesses.toString()) {
    winCounter++;
    alert("You did it! (That's what she said.)");
    document.getElementById("win-counter").innerHTML = winCounter;
    startGame();
  }

  else if (numGuesses === 0) {
    lossCounter++;
    alert("You lose, quit being such a Toby Flenderson!");
    document.getElementById("loss-counter").innerHTML = lossCounter;

    startGame();

  }

}

startGame();

document.onkeyup = function(event) {
  letterGuessed = String.fromCharCode(event.which).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();
};