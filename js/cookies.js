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
	var cookie = document.cookie;
	if (!(cookie.includes(cookieID))){
		var cookie = document.cookie;
		document.cookie = cookieID + "=" + cookieValue + ";"
	}
	else if (cookie.includes(cookieID)){
		var cookieSplit = cookie.split(" ");
		var s;
		var cookieString = "";
		for (s of cookieSplit){
			var sSplit = s.split("=");
			if (sSplit[0] == null || sSplit[1] == null){
				sSplit[0] = cookieID
				sSplit[1] = cookieValue			
			}
			if (sSplit[0] == cookieID && sSplit[1] != cookieValue){
				sSplit[1] = cookieValue
			}
			if (sSplit[0] != null && sSplit[1] != null){
				cookieString = sSplit[0] + "=" + sSplit[1] + ";"
				if (cookieString != null){
					document.cookie = cookieString;
				}
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
                if (sSplit[1].charAt(sSplit[1].length-1) == ";"){
                    return sSplit[1].substring(0, sSplit[1].length - 1)
                }
                return sSplit[1]
            }
		}
    }
    return null;

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