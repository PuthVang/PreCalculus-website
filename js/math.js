
// Sets up the equation by changing 5(x^2) to 5(Math.pow(x, 2)) so it can evaluate and give answers

function setupEquation(mathEquation, variableRegex, valueInput){
  var re = /(?![\+\-\*\/\(\)\^\s])([a-zA-Z0-9]+)\^([a-zA-Z0-9]+)/gm;
  var str = mathEquation;
  var subst = 'Math.pow($1,$2)';
  var result = str.replace(re, subst);
  return result.replace(RegExp(variableRegex, "g"), valueInput).toString();
}

// Gets a random math problem based on their json location and node.

function getRandomMathProblem(jsonArrayList, equationCookieName){
    var min=1;
    var max=Object.keys(jsonArrayList).length;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    setCookieValue(equationCookieName, jsonArrayList[random].replaceAll(" ", ""));
    return getCookieValue(equationCookieName);
}