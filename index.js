// get a Factory Function instance
const wordChecker = WordChecker();

// get reference to all the DOM elements
const checkBtn = document.querySelector(".checkBtn");
const word = document.querySelector(".word");
const result = document.querySelector(".result");

// add behaviour to the elements
checkBtn.addEventListener("click", function () {
	result.innerHTML = word.value
});
