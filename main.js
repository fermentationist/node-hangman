const Game = require("./game.js");
const inquirer = require("inquirer");

//create instance of Game
let game = new Game();

//this function will be called recursively while game.over is false
function gameLoop(game){
	if(!game.over){
		//clear screen
		process.stdout.write('\033c');
		//show puzzle
		console.log("\n" + game.display() + "\n");
		//show guessed letters
		console.log("letters guessed: " + game.lettersGuessed.join(", ") + "\n");
		//show guesses remaining
		console.log(game.guessesLeft + " guesses remaining\n");

		//prompt player for guess
		inquirer.prompt({
			type: "input",
			message: "Guess a letter",
			name: "guess"
		}).then(function(answer){
			game.guess(answer.guess);
			gameLoop(game);
		});
	}
}

//invoking gameLoop starts the game
gameLoop(game);



// for(obj in game){
// 	console.log(obj);
// }