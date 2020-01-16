function getCurrentEquation(){
  return getCookieValue("eq");
}

function setupEquation(variable, valueInput){
  value1 = getCookieValue("iA");
  var re = /(?![\+\-\*\/\(\)\^\s])([a-zA-Z0-9]+)\^([a-zA-Z0-9]+)/gm;
  var str = getCurrentEquation();
  var subst = 'Math.pow($1,$2)';
  var result = str.replace(re, subst);
  return result.replaceAll(variable, valueInput).toString();
}

/*
function setupNegativeNumbers(variable){
  var re = /^-\d+$/gm;
  var str = variable;
  var subst = '$1() ';
  var result = str.replace(re, subst);
  return result;
}
*/
