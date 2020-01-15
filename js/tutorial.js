function startWriting(){
    var app = document.getElementById("content-wrapper");
    var typewriter = new Typewriter(app, {
        loop: false,
        delay: 56
    });
    var mathProblem = getRandomMathProblem();
    for (var i = 1; i < Object.keys(jsonMessages[0].messages.tutorial).length + 1; i++){
        var message = replaceTutorialExample(jsonMessages[0].messages.tutorial[i], mathProblem);
        var voiceMessage = replaceTextToSpeechExample(jsonMessages[0].messages.tutorial[i], mathProblem);
//        var voice = texttospeech(voiceMessage);
        typewriter.typeString(message).start();
    }
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

function texttospeech(string){
	var voice = responsiveVoice.speak(string, "US English Male", {rate: 1.1});
    return voice;
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
