function setDefaultCookies(){
	setCookieValue("correctValuas", "ahuethaetthioeahohohiehthitpttipt")
	setCookieValue("correctValuaaes", "10")
	setCookieValue("correctValuaaaes", "10")
	setCookieValue("correctValuaaaas", "10")
	setCookieValue("correctValuaaaaaes", "10")
	setCookieValue("correctValuaaaaaaes", "10")
	setCookieValue("correctValuaaaaaaes", "25")
	console.log(getCookieValue("correctValuas"))
	console.log(getCookieValue("aaaaa"))
}

function setCookieValue(cookieID, cookieValue){
	//console.log("Cookie ID " + cookieID)
	//console.log("Cookie VALUE " + cookieValue)
	var cookie = document.cookie;
	if (!(cookie.includes(cookieID))){
		var cookie = document.cookie;
		//console.log("Cookies 1 " + document.cookie)
		document.cookie = cookieID + "=" + cookieValue + ";"
		//console.log("Cookies 2 " + document.cookie)
	}
	else if (cookie.includes(cookieID)){
		var cookieSplit = cookie.split(" ");
		//console.log(cookieSplit);
		var s;
		var cookieString = "";
		for (s of cookieSplit){
			var sSplit = s.split("=");
			//console.log("A " + sSplit);
			if (sSplit[0] == null || sSplit[1] == null){
				//console.log("B ")
				sSplit[0] = cookieID
				sSplit[1] = cookieValue			
			}
			if (sSplit[0] == cookieID && sSplit[1] != cookieValue){
				//console.log("C ")
				sSplit[1] = cookieValue
			}
			if (sSplit[0] != null && sSplit[1] != null){
				//console.log("D " + sSplit);
				cookieString = sSplit[0] + "=" + sSplit[1] + ";"
				if (cookieString != null){
					document.cookie = cookieString;
				}
				//console.log("E " + cookieString)
			}
		}
	}
}

function getCookieValue(cookieID){
	var cookie = document.cookie;
	if (cookie.includes(cookieID)){
		var s;
		var cookieSplit = cookie.split(" ");
		for (s of cookieSplit){
			var sSplit = s.split("=");
			if (sSplit[0] == cookieID){
				return sSplit[1].substring(0, sSplit[1].length - 1)
			}
		}
	}

}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}