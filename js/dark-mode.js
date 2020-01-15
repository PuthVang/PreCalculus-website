function enableDarkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode");
    var element = document.documentElement.querySelectorAll(".card");
    for (s of element){
        if (s.classList.contains("bg-white")){
            s.classList.remove("bg-white");
            s.classList.add("text-white");
            s.classList.add("bg-dark");
        }
        else{
            s.classList.remove("bg-dark");
            s.classList.remove("text-white");
            s.classList.add("bg-white");
        }
    }
    var element = document.documentElement.querySelectorAll(".card-footer");
    for (s of element){
        if (s.classList.contains("bg-white")){
            s.classList.remove("bg-white");
            s.classList.add("text-white");
            s.classList.add("bg-dark");
        }
        else{
            s.classList.remove("bg-dark");
            s.classList.remove("text-white");
            s.classList.add("bg-white");
        }
    }
}