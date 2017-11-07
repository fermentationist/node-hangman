function Letter (char){
	//the character
	this.value = char.toLowerCase();
	//has the letter been guessed by the player yet
	this.guessed = false;
	//unguessed letters are displayed as underscores
	this.displayed = "_";
	//these characters will be displayed, and set as guessed
	const exemptChars = [",", "'", ".", "!", ":", ";", "?", "-", "–", "&", "$", " " ];
	if(exemptChars.includes(char)){
		this.displayed = char;
		this.guessed = true;
	}
	//changes the state of a correctly guessed letter
	this.show = function (){
		this.displayed = this.value;
		this.guessed = true;
	}
}

module.exports = Letter;

