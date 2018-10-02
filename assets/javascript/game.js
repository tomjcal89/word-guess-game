
// list of the words that will be guessed and availible letters

var words = ["bumpers", "strike", "turkey", "spare", "gutter ball", "split", "bowling ball", "bowling lane", "perfect game", "bowling pins"];

// scoring and turns elements
var score = 0;
var guessLeft = 10;
var wrongLetters = [];
var correctLetters = [];

//staring the game

var rand = words[Math.floor(Math.random() * words.length)]
console.log(rand)


document.getElementById ("demo").innerHTMl = words; 
console.log(words)

var answer = [];
for (var i = 0; i < words.length; i++) {
    answer[i] = " _ ";
}
console.log (answer)





