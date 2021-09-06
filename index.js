// get a Factory Function instance
const wordChecker = WordChecker();

// get reference to all the DOM elements
const checkBtn = document.querySelector(".checkBtn");
const word = document.querySelector(".word");
const result = document.querySelector(".result");
const output = document.querySelector(".output");
const wordsChecked = document.querySelector(".wordsChecked");

let wordCount = 0;

// add behaviour to the elements
checkBtn.addEventListener("click", function () {

/**
 * 
`Too short` if the word length is 3 or less in red,
`Almost there!` if the word length is less 8 or less and longer than 3 in orange,
`Perfect!` if the number is greater than 8 in green.
 */

	output.classList.remove('red');
	output.classList.remove('orange');
	output.classList.remove('green');
		
	wordChecker.check(word.value);
	
	result.innerHTML = wordChecker.message()
	output.classList.add(wordChecker.style());
	wordsChecked.innerHTML = wordChecker.wordCount();

});
