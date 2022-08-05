$("button").click(function () {
    var buttoninnerHTML = this.innerHTML;
    addanimation(buttoninnerHTML);
});

$("body").keypress(function (event) {
    addanimation(event.key);
});

function switchcase(buttoninnerHTML) {
    switch (buttoninnerHTML) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}

function addanimation(button) {
    $("." + button).addClass("pressed");

    switchcase(button);

    setTimeout(function () {
        $("." + button).removeClass("pressed");
    }, 100);
}
