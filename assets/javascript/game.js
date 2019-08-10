//Array with words for computer to randomly throw at the user
var words = [
    "pancake", 
    "cat", 
    "airport", 
    "lake", 
    "watch", 
    "table"
    ];
    
    //Code to pick a random word 

var word = words[Math.floor(Math.random() * words.length)];

//empty array, for each random word that computer picks, add in the array a "_" for the same number of letters that this specific word has, also, add 1. Repeat with each word. 
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

// Equal the number of letters that each word has to a variable, this is to keep track of how many more guesses the player has left. Each time the player guesses a letter, this should decrease by 1. 
var remainingLetters = word.length;

//Game loop
while (remainingLetters > 0) {
  alert(answerArray.join(" ")); //Tells player how many letters they are supposed to guess and will diplay those that have been guessed.
  var guess = prompt("Press a letter of choice to guess the word. To stop playing, press cancel."); //Prompt user to play or exit
  if (guess === null) { //If the guess is empty or they click on cancel, stop loop.
  break;
  } else if (guess.length !== 1) { //If they press more than 1 letter, say this:
  alert("You may only guess one letter at a time.");
} else {
  for (var j = 0; j < word.length; j++) {
  if (word[j] === guess) { //This loop compares the the user's entry against the letter of the currently displayed word and this is how we know if they nailed it. 
    if (word[j] === guess) { 
    answerArray[j] = guess; //This store's the user's guess inside of the answer array, saves it on the index that is belongs to.
    remainingLetters--;
    }
  }
}
}
}
    alert(answerArray.join(" "));
    alert("Nicely done! The answer was " + word)
