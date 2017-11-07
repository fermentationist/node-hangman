function Puzzle(){
	const Letter = require ("./letter.js");
	const that = this;

	this.randomPuzzle = function (){
		//maybe use api call for content?
		return "Careful man there's a beverage here";
	}
	let displayArray = [];
	this.currentPuzzle = this.randomPuzzle ();
	this.charArray = this.currentPuzzle.split ("");
	this.charArray.forEach (function (char, i){
		let letter = new Letter (char);
		that.charArray.splice (i, 1, letter);
		displayArray.push(letter.displayed);
	});
	this.display = function(){
		let updated = [];
		that.charArray.forEach(function(letter){
			updated.push(letter.displayed);
		})
		return updated.join(" ");
	}
}

module.exports = Puzzle;