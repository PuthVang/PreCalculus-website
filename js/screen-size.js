// Checks for wonkyness and removes it. (This is a fix on minimizing windows)

function checkForMinimize(){
    console.log(window.innerWidth);
    var width = window.innerWidth;
    if (width < 991){
        var element = document.getElementById("wrapper");
        if (element.classList.contains("toggled")){
            element.classList.remove("toggled");
        }
    }
}