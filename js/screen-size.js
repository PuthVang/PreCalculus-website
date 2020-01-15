function checkForMinimize(){
    console.log(window.innerWidth);
    var width = window.innerWidth;
    if (width < 991){
        var element = document.getElementById("wrapper");
        console.log("1");
        if (element.classList.contains("toggled")){
            console.log("2");
            element.classList.remove("toggled");
        }
    }
}