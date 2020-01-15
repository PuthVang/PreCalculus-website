function getRandomInteger(){
    var min=-5;
    var max=5;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random;
}

function getRandomMathProblem(){
    var min=1;
    var max=Object.keys(jsonExamples[0].examples.tutorial).length;
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    setCookieValue("eq", jsonExamples[0].examples.tutorial[random].replaceAll(" ", ""));
    return getCookieValue("eq");
}
