var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
gameOn = false;
var level = 0;

$(document).on("keydown", function() {
    if(gameOn === false) {
        $("#level-title").text("Level " + level);
        nextSequence();
        gameOn = true;
    };
});

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
} );


function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor((Math.random() * 4));
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    animatePress(randomChosenColor);
    playSound(randomChosenColor);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");

        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }

    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);

        $("h1").text("Game over, press any key to continue");
        startOver();
    }

};

function startOver() {
    level = 0;
    gamePattern = [];
    gameOn = false;
}