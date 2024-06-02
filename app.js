function testButton() {
    //console.log("Testing script for button press");
    var x = document.getElementById("buttonMsg");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function nameClick() {
    console.log("Clicked the name on the top");
}

// Opening new link on button link via JS
// "_blank" allows to open in new tab
function githubOpen(){
    window.open("https://github.com/ktruong1018", "_blank");
}

function odinRecipes (){
    window.open("https://ktruong1018.github.io/odin-recipes/index.html", "_blank");
}