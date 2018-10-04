
// list of the words that will be guessed and availible letters

var bowlWords = ["bumpers", "strike", "turkey", "spare", "guttel", "split", "bowling", "lane", "pins"];
var wins = 0;
var guessesLeft = 9;
var correctGuess = [];
var wrongGuessLetters = [];
var chosenWord = " ";
var placeHolder = [];





var wordSelection = document.getElementById("word-selection");
var usedLetters = document.getElementById("used-letters");
var numberWins = document.getElementById("number-wins");
var guessesRemaining = document.getElementById("guesses-remaining")






//computer randdomly selects a word for player to guess
 wordSelection = bowlWords[Math.floor(Math.random() * bowlWords.length)]; {
 console.log(wordSelection)

 for(var i = 0; i < wordSelection.length; i++) {
     if(wordSelection[i] === " "){
     placeHolder.push(" ");
    } else {
        placeHolder.push ("_")
    }
}
    wordSelection.textContent = placeHolder.join("");
    guessesRemaining.textContent = guessesLeft; 
        

 }


 








 //word shows on screen with "_ _ _" in replacement of word
// var correctLetter = [];
// for(var i = 0; i < bowlWords.length; i ++) {
//     correctLetter[i] = "_";

//     if ()
// }
//     console.log(correctLetter)


 // when player guesses wrong letter, that letter will go into
 















