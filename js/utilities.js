// A simple replaceAll function because JavaScript doesn't have one
// Source: https://stackoverflow.com/a/16438422
String.prototype.replaceAll = function (stringToFind, stringToReplace) {
    if (stringToFind === stringToReplace) return this;
    var temp = this;
    var index = temp.indexOf(stringToFind);
    while (index != -1) {
        temp = temp.replace(stringToFind, stringToReplace);
        index = temp.indexOf(stringToFind);
    }
    return temp;
};

// Checks for the highest or lowest integer between the two integers
function checkInteger(int1, int2, string){
  if (string == "highest"){
    if (int1 > int2){
      return int1;
    }
    else{
      return int2;
    }
  }
  if (string == "lowest"){
    if (int1 < int2){
      return int1;
    }
    else{
      return int2;
    }
  }
}

// Remove buttons!
function deleteButtons(inner){
    for (s of inner){
        if (s.includes("button")){
            delete inner[inner.indexOf(s)]
        }
    }
    return inner.join("<br>");
}
