function Game(){
	const Puzzle = require("./puzzle.js");
	const that = this;
	this.puzzle = new Puzzle();
	this.lettersGuessed = [];
	this.guessesLeft = 7;
	this.over = false;
	this.win;
	this.display = function(){
		return this.puzzle.display();
	}

	this.guess = function(char){
		let correctGuess = false;
		let allGuessed = true;
		//restrict guess to one character
		char = char.toLowerCase().slice(0,1);
		//data validation- exit function if invalid
		if(!/[^_\d\W]/.test(char)){
			return;
		}
		//exit function if letter was already guessed
		if (this.lettersGuessed.includes(char)){
			return;
		}else{
			//add letter to array of previously guessed letters
			this.lettersGuessed.push(char);
		}
		//iterate through puzzle to find letter matching guess
		this.puzzle.charArray.forEach(function(letter, i){
			//if match found, reveal letter and register a correct guess
			if(letter.value === char){
				letter.show();
				correctGuess = true;
			}
			//if any of the letters remain unguessed, allGuessed is false 
			//meaning the player has not won the game this round
			if(letter.guessed === false){
				allGuessed = false;
			}
		});
		//if all letters have been guessed successfully, the player has won the game
		if(allGuessed === true){
			console.log("You win!!");
			this.gameOver(true);
		}
		//if guess is incorrect (and not a duplicate or invalid), subtract one from guesses remaining
		if(!correctGuess){
			this.guessesLeft --;
			//if that was the last remaining guess, the player has lost the game
			if (this.guessesLeft < 1){
				console.log("\nYou lose :(\n");
				this.gameOver(false);
			}
		}
	}
	//when game is over, execution will resume in the gameLoop function defined in main.js,
	//with a recursive call to gameLoop
	this.gameOver = function(win){
		this.over = true;
		this.win = win;
		return;
	}
}

module.exports = Game;

