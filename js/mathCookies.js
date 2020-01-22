// TUTORIAL STUFF

function getTutorialEquationCookieName(){
    return "tEQ";
}

function getTutorialVariableName(){
    return "tVN";
}

function getTutorialIntervalOneName(){
    return "tIV1";
}

function getTutorialIntervalTwoName(){
    return "tIV2";
}

function getTutorialEquationCookieValue(){
    return getCookieValue("tEQ");
}

function getTutorialVariableValue(){
    return getCookieValue("tVN");
}

function getTutorialIntervalOneValue(){
    return getCookieValue("tIV1");
}

function getTutorialIntervalTwoValue(){
    return getCookieValue("tIV2");
}

function getTutorialJSONExamples(){
    return tutorialExamples[0].tutorial;
}

function getTutorialJSONMessages(){
    return tutorialMessages[0].tutorial;
}

// PRACTICE STUFF

function getPracticeEquationCookieName(){
    return "pEQ";
}

function getPracticeVariableName(){
    return "pVN";
}

function getPracticeIntervalOneName(){
    return "pIV1";
}

function getPracticeIntervalTwoName(){
    return "pIV2";
}

function getPracticeEquationCookieValue(){
    return getCookieValue("pEQ");
}

function getPracticeVariableValue(){
    return getCookieValue("pVN");
}

function getPracticeIntervalOneValue(){
    return getCookieValue("pIV1");
}

function getPracticeIntervalTwoValue(){
    return getCookieValue("pIV2");
}

function getPracticeJSONMessages(){
    return practiceMessages[0].practice;
}

function getPracticeJSONProblems(){
    return practiceProblems[0].practice;
}

function getPracticeJSONCorrect(){
    return practiceMessages[0].correct;
}

function getPracticeJSONIncorrect(){
    return practiceMessages[0].incorrect;
}

function getPracticeJSONCorrect(){
    return practiceMessages[0].correct;
}

function getPracticeJSONShowAnswer(){
    return practiceMessages[0].showAnswer;
}

function getPracticeJSONCheckAnswer(){
    return practiceMessages[0].checkAnswer;
}