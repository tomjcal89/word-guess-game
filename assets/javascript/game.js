
// list of the words that will be guessed and availible letters

var bowlingTerms = ["bumpers", "strike", "turkey", "spare", "gutter ball", "split", "bowling ball", "bowling lane", "perfect game", "bowling pins"];

// scoring and turns elements
var score = 0;
var remainGuess = 11;

var rand = bowlingTerms[Math.floor(Math.random() * bowlingTerms.length)];
