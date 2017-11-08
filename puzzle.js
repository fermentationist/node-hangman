const PuzzleModule = (function(){
	const quotes = require("./quotes.js");
	const LetterModule = require ("./letter.js");
	function Puzzle(){
		const that = this;
		let displayArray = [];
		let randQuote = randomQuote();
		this.quoteAuthor = randQuote.author;
		this.currentPuzzle = randQuote.quote;
		this.charArray = this.currentPuzzle.split ("");
		this.charArray.forEach (function (char, i){
			let letter = new LetterModule.Letter(char);
			that.charArray.splice (i, 1, letter);
			displayArray.push(letter.displayed);
		});
		this.display = function(){
			let updated = [];
			that.charArray.forEach(function (letter){
				updated.push(letter.displayed);
			})
			return updated.join(" ");
		}
	}
	function randomQuote(){
		let length = quotes.length;
		let rnd = Math.floor(Math.random() * (length + 1));
		let quote = quotes[rnd].quote;
		let author = quotes[rnd].author;
		return {quote:quote, author:author}
		// return "Careful man, there's a beverage here!";
	}
	return {Puzzle: Puzzle}
})();

module.exports = PuzzleModule;
