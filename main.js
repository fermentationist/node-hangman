const GameModule = require("./game.js");
const inquirer = require("inquirer");

//this function will be called recursively while game.over is false
function gameLoop(game){
	//clear screen
	process.stdout.write('\033c');
	//title
	console.log("================| Programming Quotes Hangman |================\n\n");
	//author
	console.log("author of quote: " + game.puzzle.quoteAuthor);
	//show puzzle
	console.log("\n" + game.display() + "\n");
	//show guessed letters
	console.log("letters guessed: " + game.lettersGuessed.join(", ") + "\n");
	//show guesses remaining
	console.log(game.guessesLeft + " guesses remaining\n");
	if(!game.over){
		//prompt player for guess
		inquirer.prompt({
			type: "input",
			message: "Guess a letter",
			name: "guess"
		}).then(function(answer){
			game.guess(answer.guess.toLowerCase());
			gameLoop(game);
		});
	}else{
		//game is over. log whether the player won or lost
		if(game.win){
			console.log("\nYou win!!\n");
		}else{
			console.log("\nYou lose :(\n");
		}
		//ask player to play again
		inquirer.prompt({
			type: "list",
			message: "Would you like to play again?",
			choices: ["play again", "quit"],
			name: "again"
		}).then(function(answer){
			//if player wants another game, call startNewGame()
			if(answer.again === "play again"){
				startNewGame();
			}else{
				//else clear screen and exit program
				return process.stdout.write('\033c');
			}
		});
	}
}

//creates new instance of Game and calls gameLoop on it to start play
function startNewGame(){
	const game = new GameModule.Game();
	gameLoop(game);
}

startNewGame();
