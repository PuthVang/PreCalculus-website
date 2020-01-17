function startWriting(){
    var app = document.getElementById("content-wrapper");
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: 69
    });
    var mathProblem = getRandomMathProblem();
    for (var i = 1; i < Object.keys(jsonMessages[0].messages.tutorial).length + 1; i++){
        var message = replaceTutorialExample(jsonMessages[0].messages.tutorial[i], mathProblem);
        typewriter.typeString(message).start();
    }
    typewriter.stop();
}

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
