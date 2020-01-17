function skipWriting(){
    setCookieValue("sk", getCookieValue("sk") == "true" ? false : true);
}