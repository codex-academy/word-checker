function WordChecker() {
	let currentMessage = "";
	let currentStyle;
	let words = [];

	function check(word) {
		words.push(word);

		if (word.length > 8) {
			currentMessage = "Perfect!";
			currentStyle = "green";
		} else if (word.length <= 8 && word.length > 3) {
			currentMessage = "Almost there!";
			currentStyle = "orange";
		} else {
			currentMessage = "Too short";
			currentStyle = "red";
		}
	}

	function message() {
		return currentMessage;
	}

	function style() {
		return currentStyle;
	}

	function wordCount() {
		return words.length
	}

	return {
		check,
		message,
		style,
		wordCount
	};
}
