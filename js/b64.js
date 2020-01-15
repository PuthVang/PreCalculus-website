function initiateLoadPrompt(){
	swal("Write something here:", {
		content: "input",
		input: "",
	})
	.then((value) => {
		saveValue = value
		console.log("AAAA " + saveValue)
		if (saveValue != null || saveValue != "" || saveValue != "null"){
			var a = keyPromptDecrypt(saveValue)
			console.log("BBBBB " + a)
			var splitValues = a.split(" ")
			for (s of splitValues){
				console.log(s)
				document.cookie = s
			}
			console.log(saveValue)
			console.log(a)
		}
	});
}

function initiateSavePrompt(){
	var saveValue = document.cookie
	if (saveValue != null || saveValue != "" || saveValue != "null"){
		console.log("Save Value " + saveValue)
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
	// Encode the String
	var encodedString = LZString.compress(string);
	console.log("Encoded " + encodedString); // Outputs: "SGVsbG8gV29ybGQh"
	return encodedString
}

function keyPromptDecrypt(string){
		// Decode the String
	var decodedString = LZString.decompress(string);
	console.log("Decoded " + decodedString); // Outputs: "Hello World!"
	return decodedString
}