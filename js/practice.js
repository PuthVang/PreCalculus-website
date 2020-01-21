// Start the practice instance, getting the messages from json/practice.json.

function startPracticing(){
    var element = document.getElementsByTagName("p")[1];
    var mathProblem = getRandomMathProblem(getPracticeJSONProblems(), getPracticeEquationCookieName());
    setCookieValue(getPracticeVariableName(), "x");
    document.getElementById("start-button").remove();
    element.innerHTML = "";
    for (var i = 1; i < Object.keys(getPracticeJSONMessages()).length + 1; i++){
        var message = replaceEquationPlaceholders(getPracticeJSONMessages()[i], getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName());
        element.innerHTML += message;
    }
}


// Gets the values from the input boxes and checks to see if it's all correct.
// Levenshtein is used here because people forget about the statement
// So if they get 75% of the statement correct, they will get it correct.

function submitPracticeAnswers(){
    document.getElementById("submitAnswer").remove();
    var intOneValue = document.getElementById("practiceIntervalValueOne").value;
    var intTwoValue = document.getElementById("practiceIntervalValueTwo").value;
    var statementValue = document.getElementById("practiceStatementValue").value;
    document.getElementById("practiceIntervalValueOne").classList.add("disabled");
    document.getElementById("practiceIntervalValueTwo").classList.add("disabled");
    document.getElementById("practiceStatementValue").classList.add("disabled");
    var intOneAnswer = replaceEquationPlaceholders("{ANSWER-1}", getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName());
    var intTwoAnswer = replaceEquationPlaceholders("{ANSWER-2}", getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName());
    var statementAnswer = replaceEquationPlaceholders("{EQUATION-STATEMENT}", getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName());
    if (parseInt(intOneValue) == parseInt(intOneAnswer)){
        var valueOneCorrect = true;
    }
    if (parseInt(intTwoValue) == parseInt(intTwoAnswer)){
        var valueTwoCorrect = true;
    }
    if (Levenshtein(statementAnswer, statementValue) < (statementAnswer.length * 0.25)){
        var statementCorrect = true;
    }
    if (valueOneCorrect == true && valueTwoCorrect == true && statementCorrect == true){
        console.log('hi!');
    }

}
