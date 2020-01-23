// Gets the statement required, checks if they're lower and higher than 0.
// Having 0 as a value will render it as invalid (because I'm not sure if it counts).
function getStatement(mathEquation, variableName, intervalOne, intervalTwo){
  var value1 = eval(setupEquation(mathEquation, variableName, intervalOne));
  var value2 = eval(setupEquation(mathEquation, variableName, intervalTwo));
  var highest = checkInteger(value1, value2, "highest");
  var lowest = checkInteger(value1, value2, "lowest");
  if (((highest <= 0) && (lowest <= 0)) || ((highest >= 0) && (lowest >= 0))){
    return "A zero cannot be verified on the intervals with the Intermediate Value Theorem.";
  }
  else if ((highest > 0) && (lowest < 0)){
    return "Since f(x) is continuous over (" + intervalOne + "," + intervalTwo + ") and f(" + intervalOne + ") < f(c) < f(" + intervalTwo + "), there exists AT LEAST one value 'c' such that f(c) = <b>the output you are trying to prove exists on the interval by the Intermediate Value Theorem.</b>";    
  }
}

// Gets the opposite statement of the correct statement.
function getOppositeStatement(mathEquation, variableName, intervalOne, intervalTwo){
  var value = getStatement(mathEquation, variableName, intervalOne, intervalTwo);
  if (value == "A zero cannot be verified on the intervals with the Intermediate Value Theorem."){
    return "Since f(x) is continuous over (" + intervalOne + "," + intervalTwo + ") and f(" + intervalOne + ") < f(c) < f(" + intervalTwo + "), there exists AT LEAST one value 'c' such that f(c) = <b>the output you are trying to prove exists on the interval by the Intermediate Value Theorem.</b>";    
  }
  return "A zero cannot be verified on the intervals with the Intermediate Value Theorem.";
}