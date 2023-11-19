var startButton = document.querySelector("#start");
var timerElement = document.querySelector(".timer-count");

var timer;
var timerCount;

function startGame(){
    startButton.addEventListener("click", function() {
        console.log("you've started the quiz");
        timerCount = 60
        startTimer();
    })
}

function startTimer() {
    var timeLeft = 60;
    var timeInterval = setInterval(function (){
        timeLeft--;
        timerElement.textContent = timeLeft + " seconds left";

    if (timeLeft === 0){
        clearInterval(timeInterval); 
    }
    }, 1000);
}

startGame();