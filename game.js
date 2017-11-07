function Game(){
	const Puzzle = require("./puzzle.js");
	const that = this;
	this.puzzle = new Puzzle();
	this.lettersGuessed = [];
	this.guessesLeft = 7;
	this.over = false;
	this.display = function(){
		return this.puzzle.display();
	}

	this.guess = function(char){
		let correctGuess = false;
		let allGuessed = true;
		char = char.toLowerCase();
		if(!/[^_\d\W]?/.test(char)){
			return;//invalid input
		}
		if (this.lettersGuessed.includes(char)){
			return;//already guessed
		}else{
			this.lettersGuessed.push(char);
		}
		this.puzzle.charArray.forEach(function(letter, i){
			if(letter.value === char){
				letter.show();
				correctGuess = true;
			}
			if(letter.guessed === false){
				allGuessed = false;
			}
		});
		if(allGuessed === true){
			console.log("\nYou win!!\n");
			this.gameOver();
		}
		if(!correctGuess){
			this.guessesLeft --;
			if (this.guessesLeft < 1){
				this.gameOver();
			}
		}
	}
	this.gameOver = function(){
		this.over = true;
		return console.log("\n\nGame Over\n\n");
	}
}

module.exports = Game;

