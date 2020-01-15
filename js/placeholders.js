
function replacedSolvedEquations(string){
  string = string.replace("{SOLVED-EQUATION-VALUE-1}", getCurrentEquation().replaceAll("x", getCookieValue("iA")) + "=" + eval(setupEquation("x", getCookieValue("iA"))));
  string = string.replace("{SOLVED-EQUATION-VALUE-2}", getCurrentEquation().replaceAll("x", getCookieValue("iB")) + "=" + eval(setupEquation("x", getCookieValue("iB"))));
  return string;
}

function replaceDigits(string){
    if (getCookieValue("iA") == null){
        setCookieValue("iA", getRandomInteger());
    }
    if (getCookieValue("iB") == null){
        setCookieValue("iB", getRandomInteger());
    }
    valueA = getCookieValue("iA");
    valueB = getCookieValue("iB");
    value1 = checkInteger(valueA, valueB, "lowest");
    value2 = checkInteger(valueA, valueB, "highest");
    string = string.replace("{VALUE-1}", value1);
    string = string.replace("{VALUE-2}", value2);
    return string;
}

function replaceTutorialExample(string, mathProblem){
    if (string.includes("{VALUE-1}") || string.includes("{VALUE-2}")){
        string = replaceDigits(string);
    }
    if (string.includes("{ANSWER-1}")){
      string = string.replaceAll("{ANSWER-1}", eval(setupEquation("x", getCookieValue("iA"))))
    }
    if (string.includes("{ANSWER-2}")){
      string = string.replaceAll("{ANSWER-2}", eval(setupEquation("x", getCookieValue("iB"))))
    }
    if (string.includes("{SOLVED-EQUATION-VALUE-1}") || string.includes("{SOLVED-EQUATION-VALUE-2}")){
      string = replacedSolvedEquations(string);
    }
    if (string.includes("{EQUATION-STATEMENT}")){
      string = string.replace("{EQUATION-STATEMENT}", getStatement());
    }
    if (string.includes("{OPPOSITE-EQUATION-STATEMENT}")){
      string = string.replace("{OPPOSITE-EQUATION-STATEMENT}", getOppositeStatement());
    }
    string = string.replaceAll("{TUTORIAL-EXAMPLE}", mathProblem);
    string = string.replaceAll("\n", "<br>");
    string = string.replaceAll("+-", "-");
    string = string.replaceAll("*(", "(");
    return string;
}

function replaceTextToSpeechExample(string, mathProblem){
    if (string.includes("{VALUE-1}") || string.includes("{VALUE-2}")){
        string = replaceDigits(string);
    }
    string = string.replaceAll("\n", "");
    string = string.replaceAll("{TUTORIAL-EXAMPLE}", mathProblem);
    string = string.replaceAll("*(", " ");
    string = string.replaceAll("(", " ");
    string = string.replaceAll(")", " ");
    string = string.replaceAll("+-", " negative ");
    string = string.replaceAll("+", " plus ");
    string = string.replaceAll("-", " minus ");
    string = string.replaceAll("*", " times ");
    string = string.replaceAll("/", " divided by ");
    string = string.replaceAll("x^2", " ex squared");
    string = string.replaceAll("x^3", " ex cubed");
    return string;
}
