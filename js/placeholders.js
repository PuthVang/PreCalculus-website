// The placeholder for the solved equation, i.e. f(x)=5(3^2)*2(3)
function replacedSolvedEquations(string, equationCookieValue, variableValue, intervalOneValue, intervalTwoValue){
  string = string.replace(/{SOLVED-EQUATION-INTERVAL-1}/g, equationCookieValue.replaceAll(variableValue, intervalOneValue) + "=" + eval(setupEquation(equationCookieValue, variableValue, intervalOneValue)));
  string = string.replace(/{SOLVED-EQUATION-INTERVAL-2}/g, equationCookieValue.replaceAll(variableValue, intervalOneValue) + "=" + eval(setupEquation(equationCookieValue, variableValue, intervalTwoValue)));
  return string;
}


// Random integer between -5 and 5.
function getRandomInteger(){
    var min=-5;
    var max=5;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
}

// Replaces the current interval digits to new ones.
function replaceDigits(string, replaceValues, intervalOneName, intervalTwoName){
    if (replaceValues){
        var lowest = getRandomInteger();
        var highest = getRandomInteger();
        for (var i = 1; i < 10; i++){
            if (lowest == highest){
                lowest = getRandomInteger();        
            }
        }
        setCookieValue(intervalOneName, checkInteger(highest, lowest, "lowest"));
        setCookieValue(intervalTwoName, checkInteger(highest, lowest, "highest"));
    }
    valueA = getCookieValue(intervalOneName);
    valueB = getCookieValue(intervalTwoName);
    string = string.replace(/{INTERVAL-1}/g, valueA);
    string = string.replace(/{INTERVAL-2}/g, valueB);
    return string;
}

// Replaces the things listed below with their stuff using regex and values.
// i.e.
// {INTERVAL-1} = the first invertal of (x, xx).
// In this case, it's x.
// {INTERVAL-2} = the second invertal of (x, xx)
// In this case, it's xx.
// and many more placeholders
function replaceEquationPlaceholders(string, equationCookieValue, variableValue, intervalOneName, intervalTwoName, replaceIntervals){
    if (string.includes("{INTERVAL-1}") || string.includes("{INTERVAL-2}")){
        string = replaceDigits(string, replaceIntervals, intervalOneName, intervalTwoName);
    }
    var intervalOneValue = getCookieValue(intervalOneName);
    var intervalTwoValue = getCookieValue(intervalTwoName);
    if (string.includes("{ANSWER-1}")){
        string = string.replace(/{ANSWER-1}/g, eval(setupEquation(equationCookieValue, variableValue, intervalOneValue)))
    }
    if (string.includes("{ANSWER-2}")){
        string = string.replace(/{ANSWER-2}/g, eval(setupEquation(equationCookieValue, variableValue, intervalTwoValue)))
    }
    if (string.includes("{SOLVED-EQUATION-INTERVAL-1}") || string.includes("{SOLVED-EQUATION-INTERVAL-2}")){
        string = replacedSolvedEquations(string, equationCookieValue, variableValue, intervalOneValue, intervalTwoValue);
    }
    if (string.includes("{EQUATION-STATEMENT}")){
        string = string.replace(/{EQUATION-STATEMENT}/g, getStatement(equationCookieValue, variableValue, intervalOneValue, intervalTwoValue));
    }
    if (string.includes("{OPPOSITE-EQUATION-STATEMENT}")){
        string = string.replace(/{OPPOSITE-EQUATION-STATEMENT}/g, getOppositeStatement(equationCookieValue, variableValue, intervalOneValue, intervalTwoValue));
    }
    string = string.replace(/{CURRENT-EQUATION}/g, equationCookieValue);
    string = string.replace(/(?:\r\n|\r|\n)/g, "<br>");
    string = string.replace(/\*\(/g, "(");
    return string;
}

// Replacing stuff for Desmos
// i.e. 5(x^3) - 4(x^2) + 2x - 6
// will be turned into
// 5x^3 - 4x^2 + 2x - 6
// because that's what we're used to
function replaceForDesmos(string){
  string = string.replace(/\*\(/g, "").replace(/\(/g, "").replace(/\)/g, "")
  return string;
}