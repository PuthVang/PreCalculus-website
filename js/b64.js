function initiateLoadPrompt(){
	swal("Write something here:", {
		content: "input",
		input: "",
	})
	.then((value) => {
		saveValue = value
		if (saveValue != null || saveValue != "" || saveValue != "null"){
			var a = keyPromptDecrypt(saveValue)
			var splitValues = a.split(" ")
			for (s of splitValues){
				document.cookie = s
			}
		}
	});
}

function initiateSavePrompt(){
	var saveValue = document.cookie
	if (saveValue != null || saveValue != "" || saveValue != "null"){
		var encryptedValue = keyPromptEncrypt(saveValue)
		copyTextToClipboard(encryptedValue)
		swal({
			title: "Copied to clipboard!",
			text: "The save code has been copied to the clipboard!",
			icon: "success",
			button: "Close",
		});
	}
}

function keyPromptEncrypt(string){
	var encodedString = LZString.compress(string);
	return encodedString
}

function keyPromptDecrypt(string){
	var decodedString = LZString.decompress(string);
	return decodedString
}