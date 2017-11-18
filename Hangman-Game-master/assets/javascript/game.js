var wordList = ["sports", "hockey", "soccer", "tennis", "boxing"];
var colorList = ["#f20c1b", "#071ff7", "#db690b", "#3dba50", "#9f27db", "#aeba10"];
var wins = 0;
var losses = 0;
var gameInProgress = false;
var lettersRemaining;

var revealedWord;
var hiddenWord;
var guessesRemaining;
var guessedLetters;

var GUESSES_REMAINING = 8;

// When page is done loading
function ready() {
	document.getElementById("numWins").innerHTML = wins;
	document.getElementById("numGuesses").innerHTML = GUESSES_REMAINING;
	colorizeHtmlElement('directionsText');
	colorizeHtmlElement('winsText');
	colorizeHtmlElement('currentWordText');
	colorizeHtmlElement('numGuessesText');
	colorizeHtmlElement('lettersGuessedText');
	initializeNewGame();
};

document.onkeyup = function (event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var isCorrect = false;
	var alreadyGuessed = false;
	var isAlphabet = checkUserInputIsAlphabet(userGuess);

	if (isAlphabet){
		for (var i = 0; i < guessedLetters.length; i++){
			if (guessedLetters[i] == userGuess){
				alreadyGuessed = true;
			}
		}
	}
	// Dont process non alphabetic input
	else{
		alreadyGuessed = true;
	}

	// A new correct letter
	if (!alreadyGuessed){
		//See if guessed letter is in word
		for (var letterIndex = 0; letterIndex < revealedWord.length; letterIndex++){
			// If guess is correct
			if (hiddenWord[letterIndex] == userGuess)
			{
				isCorrect = true;

				revealedWord[letterIndex] = userGuess;
				lettersRemaining--;
			}
		}

		// Add guessed letter
		guessedLetters.push(userGuess);	
		document.getElementById("guessedLetters").innerHTML = guessedLetters.join(", ");
		if (isCorrect){
			updateRevealedWord();
			// User won
			if (lettersRemaining == 0){
				wins++;
				document.getElementById("numWins").innerHTML = wins;
				alert("You won! Word was " + revealedWord.join(""));
				initializeNewGame();
			}
		}
		//Made a wrong guess
		else{
			var currentPicture = "assets/images/hangman" + --guessesRemaining + ".png";
			document.getElementById("hangmanPicture").setAttribute("src", currentPicture);
			document.getElementById("numGuesses").innerHTML = guessesRemaining;

			// User lost
			if(guessesRemaining == 0){
				losses++;
				initializeNewGame();
			}
		}
	}
};

function initializeNewGame(){
	guessesRemaining = GUESSES_REMAINING;
	document.getElementById("numGuesses").innerHTML = guessesRemaining;
	document.getElementById("guessedLetters").innerHTML = "";

	document.getElementById("hangmanPicture").setAttribute("src","assets/images/hangman8.png");
	//Pick a new word from the list
	var currentWord = wordList[Math.floor(Math.random() * wordList.length)];
	lettersRemaining = currentWord.length;

	//Reset character arrays to be 0 length
	revealedWord = [];
	hiddenWord = [];
	guessedLetters = [];

	//Convert string word into array
	for (var letterIndex = 0; letterIndex < currentWord.length; letterIndex++) {
		revealedWord[letterIndex] = "_";
		hiddenWord[letterIndex] = currentWord.charAt(letterIndex);
	}

	//Display hidden word as underscores.
	updateRevealedWord();
};

function updateRevealedWord(){
	document.getElementById("revealedWord").innerHTML = revealedWord.join(" ");
};

function colorizeHtmlElement(elementId){
	var html = document.getElementById(elementId).innerHTML;
	var coloredHTML = "";
	
	for(var letterIndex = 0; letterIndex < html.length; letterIndex++){
		coloredHTML += "<span style='white: "; 
		coloredHTML += colorList[Math.floor(Math.random() * colorList.length)] +";'>";
		coloredHTML += html.charAt(letterIndex) + "</span>"; 
	}
    document.getElementById(elementId).innerHTML = coloredHTML
}

function checkUserInputIsAlphabet(userGuess){
	var isAlphabet = false;

	switch(userGuess){
		case "a":
			isAlphabet = true;
			break;
		case "b":
			isAlphabet = true;
			break;
		case "c":
			isAlphabet = true;
			break;
		case "d":
			isAlphabet = true;
			break;
		case "e":
			isAlphabet = true;
			break;
		case "f":
			isAlphabet = true;
			break;
		case "g":
			isAlphabet = true;
			break;
		case "h":
			isAlphabet = true;
			break;
		case "i":
			isAlphabet = true;
			break;
		case "j":
			isAlphabet = true;
			break;
		case "k":
			isAlphabet = true;
			break;
		case "l":
			isAlphabet = true;
			break;
		case "m":
			isAlphabet = true;
			break;
		case "n":
			isAlphabet = true;
			break;
		case "o":
			isAlphabet = true;
			break;
		case "p":
			isAlphabet = true;
			break;
		case "q":
			isAlphabet = true;
			break;
		case "r":
			isAlphabet = true;
			break;
		case "s":
			isAlphabet = true;
			break;
		case "t":
			isAlphabet = true;
			break;
		case "u":
			isAlphabet = true;
			break;
		case "v":
			isAlphabet = true;
			break;
		case "w":
			isAlphabet = true;
			break;
		case "x":
			isAlphabet = true;
			break;
		case "y":
			isAlphabet = true;
			break;
		case "z":
			isAlphabet = true;
			break;
	}

	return isAlphabet;
}