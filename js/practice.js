// Start the practice instance, getting the messages from json/practice.json.
function startPracticing(){
    var element = document.getElementsByTagName("p")[1];
    var mathProblem = getRandomMathProblem(getPracticeJSONProblems(), getPracticeEquationCookieName());
    setCookieValue(getPracticeVariableName(), "x");
    document.getElementById("start-button").remove();
    element.innerHTML = "";
    for (var i = 1; i < Object.keys(getPracticeJSONMessages()).length + 1; i++){
        var message = replaceEquationPlaceholders(getPracticeJSONMessages()[i], getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName(), true);
        element.innerHTML += message;
    }
    var intOneAnswer = replaceEquationPlaceholders("{ANSWER-1}", getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName(), false);
    var intTwoAnswer = replaceEquationPlaceholders("{ANSWER-2}", getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName(), false);
    var statementAnswer = replaceEquationPlaceholders("{EQUATION-STATEMENT}", getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName(), false);
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
    if (checkForCorrectAnswer(intOneValue, intTwoValue, statementValue)){
        var element = document.getElementsByTagName("p")[1];
        for (var i = 1; i < Object.keys(getPracticeJSONCorrect()).length + 1; i++){
            var message = replaceEquationPlaceholders(getPracticeJSONCorrect()[i], getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName(), false);
            element.innerHTML += message;
        }
    }else if (!(checkForCorrectAnswer(intOneValue, intTwoValue, statementValue))){
        var element = document.getElementsByTagName("p")[1];
        for (var i = 1; i < Object.keys(getPracticeJSONIncorrect()).length + 1; i++){
            var message = figureOutAllTheIncorrectStuff(getPracticeJSONIncorrect()[i], intOneValue, intTwoValue, statementValue);
            element.innerHTML += message;
        }
    }
    setUserInputs(intOneValue, intTwoValue, statementValue);
}

// This sets the input of the value back to what they set it to
// Because it gets removed everytime a new line is added or removed
function setUserInputs(intOneValue, intTwoValue, statementValue){
    document.getElementById("practiceIntervalValueOne").value = intOneValue;
    document.getElementById("practiceIntervalValueTwo").value = intTwoValue;
    document.getElementById("practiceStatementValue").value = statementValue;
}

// Basically check if they have all the answers correct or not.
function checkForCorrectAnswer(intOneValue, intTwoValue, statementValue){
    var intOneAnswer = replaceEquationPlaceholders("{ANSWER-1}", getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName(), false);
    var intTwoAnswer = replaceEquationPlaceholders("{ANSWER-2}", getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName(), false);
    var statementAnswer = replaceEquationPlaceholders("{EQUATION-STATEMENT}", getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName(), false);
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
        return true;
    }
    return false;
}

// Figures out the incorrect stuff i.e. interval one, interval two, statement, etc.
function figureOutAllTheIncorrectStuff(string, intOneValue, intTwoValue, statementValue){
    var incorrect = "";
    var intOneAnswer = replaceEquationPlaceholders("{ANSWER-1}", getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName(), false);
    var intTwoAnswer = replaceEquationPlaceholders("{ANSWER-2}", getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName(), false);
    var statementAnswer = replaceEquationPlaceholders("{EQUATION-STATEMENT}", getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName(), false);
    if (!(parseInt(intOneValue) == parseInt(intOneAnswer))){
        incorrect = incorrect.concat("The first interval value\n")
    }
    if (!(parseInt(intTwoValue) == parseInt(intTwoAnswer))){
        incorrect = incorrect.concat("The second interval value\n")
    }
    if (!(Levenshtein(statementAnswer, statementValue) < (statementAnswer.length * 0.25))){
        incorrect = incorrect.concat("The statement by... " + Levenshtein(statementAnswer, statementValue) + " characters...\n")
    }
    string = string.replace(/{INCORRECT}/gm, incorrect)
    string = string.replace(/(?:\r\n|\r|\n)/g, "<br>");
    return string;
}

// Shows the answer on the screen
function showAnswers(){
    var intOneValue = document.getElementById("practiceIntervalValueOne").value;
    var intTwoValue = document.getElementById("practiceIntervalValueTwo").value;
    var statementValue = document.getElementById("practiceStatementValue").value;
    document.getElementById("showAnswers").remove();
    var element = document.getElementsByTagName("p")[1];
    for (var i = 1; i < Object.keys(getPracticeJSONShowAnswer()).length + 1; i++){
        var message = replaceEquationPlaceholders(getPracticeJSONShowAnswer()[i], getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName(), false);
        element.innerHTML += message;
    }
    setUserInputs(intOneValue, intTwoValue, statementValue);
}


// Checks the answer by showing a Desmos graph and show that it is indeed correct
// despite being calculated with JavaScript's bad evaluator.
function checkAnswers(){
    document.getElementById("checkAnswers").remove();
    var intOneValue = document.getElementById("practiceIntervalValueOne").value;
    var intTwoValue = document.getElementById("practiceIntervalValueTwo").value;
    var statementValue = document.getElementById("practiceStatementValue").value;
    var element = document.getElementsByTagName("p")[1];
    for (var i = 1; i < Object.keys(getPracticeJSONCheckAnswer()).length + 1; i++){
        var message = replaceEquationPlaceholders(getPracticeJSONCheckAnswer()[i], getPracticeEquationCookieValue(), getPracticeVariableValue(), getPracticeIntervalOneName(), getPracticeIntervalTwoName(), false);
        element.innerHTML += message;
    }
    var elt = document.getElementById('calculator');
    var calculator = Desmos.GraphingCalculator(elt);
    calculator.setExpression({ id: 'equation', latex: "f(x)=" + replaceForDesmos(getPracticeEquationCookieValue()) });
    calculator.setExpression({ id: 'x1', latex: "x=" + getPracticeIntervalOneValue() });
    calculator.setExpression({ id: 'x2', latex: "x=" + getPracticeIntervalTwoValue() });
    calculator.setExpression({ id: 'x3', latex: "f(" + getPracticeIntervalOneValue() + ")" });
    calculator.setExpression({ id: 'x4', latex: "f(" + getPracticeIntervalTwoValue() + ")" });
    setUserInputs(intOneValue, intTwoValue, statementValue);
}

