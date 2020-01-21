// Cookies!

// This one set the values of an ID

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

// This one gets the value of a cookie ID

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

// This one delete things

function deleteCookie(cookieID) {
	var cookies = document.cookie.split(";");
    for (s of cookies){
		var cookieSplit = s.split(" ");
		for (s of cookieSplit){
			var sSplit = s.split("=");
			if (sSplit[0] == cookieID){
                document.cookie = sSplit[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
		}
    }
}

// This one delete every single thing
// Source: https://stackoverflow.com/a/179514

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}