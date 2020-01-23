// Starts the tutorial by placing down text from json/tutorial.js
function startTutorial(){
    var app = document.getElementsByTagName("p")[2];
    app.innerHTML = "";
    setCookieValue(getTutorialVariableName(), "x");
    var mathProblem = getRandomMathProblem(getTutorialJSONExamples(), getTutorialEquationCookieName());
    for (var i = 1; i < Object.keys(tutorialMessages[0].tutorial).length + 1; i++){
        var message = replaceEquationPlaceholders(tutorialMessages[0].tutorial[i], getTutorialEquationCookieValue(), getTutorialVariableValue(), getTutorialIntervalOneName(), getTutorialIntervalTwoName(), true);
        app.innerHTML += message;
    }
}

// Starts Step One with JSON messages
function startStepOne(){
    var app = document.getElementsByTagName("p")[2];
    var inner = app.innerHTML.split("<br>");
    app.innerHTML = deleteButtons(inner);
    setCookieValue(getTutorialVariableName(), "x");
    for (var i = 1; i < Object.keys(tutorialMessages[0].step1).length + 1; i++){
        var message = replaceEquationPlaceholders(tutorialMessages[0].step1[i], getTutorialEquationCookieValue(), getTutorialVariableValue(), getTutorialIntervalOneName(), getTutorialIntervalTwoName(), false);
        app.innerHTML += message;
    }
}

// Starts Step Two with JSON messages
function startStepTwo(){
    var app = document.getElementsByTagName("p")[2];
    var inner = app.innerHTML.split("<br>");
    app.innerHTML = deleteButtons(inner);
    setCookieValue(getTutorialVariableName(), "x");
    for (var i = 1; i < Object.keys(tutorialMessages[0].step2).length + 1; i++){
        var message = replaceEquationPlaceholders(tutorialMessages[0].step2[i], getTutorialEquationCookieValue(), getTutorialVariableValue(), getTutorialIntervalOneName(), getTutorialIntervalTwoName(), false);
        app.innerHTML += message;
    }
}

// Starts Step Three with JSON messages
function startStepThree(){
    var app = document.getElementsByTagName("p")[2];
    var inner = app.innerHTML.split("<br>");
    app.innerHTML = deleteButtons(inner);
    setCookieValue(getTutorialVariableName(), "x");
    for (var i = 1; i < Object.keys(tutorialMessages[0].step3).length + 1; i++){
        var message = replaceEquationPlaceholders(tutorialMessages[0].step3[i], getTutorialEquationCookieValue(), getTutorialVariableValue(), getTutorialIntervalOneName(), getTutorialIntervalTwoName(), false);
        app.innerHTML += message;
    }
}
