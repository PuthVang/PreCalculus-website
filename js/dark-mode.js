// This is dark mode, slow and inefficient but it works.
// Adding & removing classes source: https://codepen.io/anon/pen/GdaoXQ
function enableDarkMode(changeTheme){
    var elementA = document.getElementsByTagName("a");
    var element = document.body;
    if (changeTheme == "true"){
        setCookieValue("dm", getCookieValue("dm") == "true" ? false : true)
    }
    if (getCookieValue("dm") == "true"){
        element.classList.add("dark-mode");
        for (s of elementA){
            if (s.innerHTML.includes("<i class=\"fa fa-moon\"></i>Dark mode")){
                s.innerHTML = "<i class=\"fa fa-sun\"></i>Light mode";
            }
        }
    }else{
        element.classList.remove("dark-mode");
        for (s of elementA){
            if (s.innerHTML.includes("<i class=\"fa fa-sun\"></i>Light mode")){
                s.innerHTML = "<i class=\"fa fa-moon\"></i>Dark mode";
            }
        }
    }
    var element = document.documentElement.querySelectorAll(".card");
    for (s of element){
        if (s.classList.contains("bg-white") && getCookieValue("dm") == "true"){
            s.classList.remove("bg-white");
            s.classList.add("text-white");
            s.classList.add("bg-dark");
        }else{
            s.classList.remove("bg-dark");
            s.classList.remove("text-white");
            s.classList.add("bg-white");
        }
    }
    var element = document.documentElement.querySelectorAll(".card-footer");
    for (s of element){
        if (s.classList.contains("bg-white") && getCookieValue("dm") == "true"){
            s.classList.remove("bg-white");
            s.classList.add("text-white");
            s.classList.add("bg-dark");
        }else{
            s.classList.remove("bg-dark");
            s.classList.remove("text-white");
            s.classList.add("bg-white");
        }
    }
}