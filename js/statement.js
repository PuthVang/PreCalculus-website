function getStatement(){
  var value1 = eval(setupEquation("x", getCookieValue("iA")));
  var value2 = eval(setupEquation("x", getCookieValue("iB")));
  var highest = checkInteger(value1, value2, "highest");
  var lowest = checkInteger(value1, value2, "lowest");
  if (((highest < 0) && (lowest < 0)) || ((highest > 0) && (lowest > 0))){
    return "A zero cannot be vertified on the interval.";
  }
  else if ((highest > 0) && (lowest < 0)){
    return "Since f(x) is continuous over (" + getCookieValue("iA") + "," + getCookieValue("iB") + ") and f(" + getCookieValue("iA") + ") < f(c) < f(" + getCookieValue("iB") + "), there exists AT LEAST one value 'c' such that f(c) = the output you are trying to prove exists on the interval by the Intermediate Value Theorem.";    
  }
}

function getOppositeStatement(){
  var value = getStatement();
  if (value != "A zero cannot be vertified on the interval."){
    return "A zero cannot be vertified on the interval.";
  }
  return value;
}