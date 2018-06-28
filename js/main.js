//store our survey answers in this array
var surveyArray = new Array;

// function to check user submission
function submitForm() {
	// select all elements with class="question1"
	var checks  = document.getElementsByClassName("question1");
	// select all elements with class="question2"
	var selects = document.getElementsByClassName("question2");
	// select all elements with class="question2"
	var radios  = document.getElementsByClassName("question3");

	// store element by id to display results later
	var results = document.getElementById("results");

	// create array for checkbox answers this will become the value for var answer1
	var checkboxesArray = new Array;

	// create variables to eventually hold the users answers
	var answer1, answer2, answer3;

	// loop through all checkboxes
	for(var i = 0; i < checks.length; i++) {
		// check if the current checkbox has been checked by the user, then do this
		if(checks[i].checked) {
			// add item to checkBoxesArray
			checkboxesArray.push(checks[i].value);
		};

		// set answer 1 variable equal to the checkbox array
		answer1 = checkboxesArray;
	};

	// stop function if no data for question 1
	if(answer1.length == 0) {
		// add a class of success to results
		results.className = "failure";
		// update the text content of results
		results.textContent = "you forgot to answer question 1";

		// stop function if no answer
		return;
	};

	// confirm answer 1 value
	console.log("answer 1: " + answer1);

	// loop through select options
	for(var i = 0; i < selects.length; i++) {
		// check which was selected by the user, do this
		if(selects[i].selected) {
			// set value of answer 2 to the value in the selected item
			answer2 = selects[i].value;
		};
	};

	// stop function if no data for question 2
	if(answer2 == "") {
		// add a class of success to results
		results.className = "failure";
		// update the text content of results
		results.textContent = "you forgot to answer question 2";

		// stop function if no answer
		return;
	};

	// confirm answer 2 value
	console.log("answer 2: " + answer2);

	// loop through radio options
	for(var i = 0; i < radios.length; i++) {
		// if the radio was selected by the user, do this
		if(radios[i].checked) {
			// set value of answer 3 to the value in the radio item
			answer3 = radios[i].value;
		};
	};

	// stop function if no data for question 3
	if(answer3 == undefined) {
		// add a class of success to results
		results.className = "failure";
		// update the text content of results
		results.textContent = "you forgot to answer question 3";

		// stop function if no answer
		return;
	};

	// confirm answer 3 value
	console.log("answer 3: " + answer3);

	// create an object from user answers
	var surveyAnswers = {
		checked: answer1,
		selected: answer2,
		radio: answer3
	};

	// add a class of success to results
	results.className = "success";
	// update the text content of results upon survey completion
	results.textContent = "thanks for completing the survey!";

	// confirm new objects existence
	console.log("current survey answers: #1 " + surveyAnswers.checked + " #2 " + surveyAnswers.selected + " #3 " + surveyAnswers.radio);

	// // add surveyAnswers to survey array
	surveyArray.push(surveyAnswers);

	// check survey array to confirm new object
	console.log(surveyArray);

	// reset form for next user
	form.reset();
};

// add event to submitButton
document.getElementById("submitButton").addEventListener("click", submitForm, false);
