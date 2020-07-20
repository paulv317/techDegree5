// get input from user

document.getElementById("search").addEventListener("keyup", getUserInput);

function getUserInput() {
    var text = document.getElementById("search");
    text.value = text.value.toLowerCase();
}


// get captions

var caption = document.getElementsByTagName("a")[0].getAttribute("data-title");

caption = caption.toLowerCase();