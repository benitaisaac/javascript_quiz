var startButton = document.querySelector("#start");
var timerElement = document.querySelector(".timer-count");

let questionOne = ["text for question one", "answer option 1_1", "answer option 2_1", "answer option 3_1", "answer option 4_1", "answer option 5_1"];
let questionTwo = ["text for question two", "answer option 1_2", "answer option 2_2", "answer option 3_2", "answer option 4_2", "answer option 5_2"];
let questionThree = ["text for question three", "answer option 1_3", "answer option 2_3", "answer option 3_3", "answer option 4_3", "answer option 5_3"];
let questionFour = ["text for question four", "answer option 1_4", "answer option 2_4", "answer option 3_4", "answer option 4_4", "answer option 5_4"];
let questionFive = ["text for question five", "answer option 1_5", "answer option 2_5", "answer option 3_5", "answer option 4_5", "answer option 5_5"];

var timer;
var timerCount;

//This function starts the game once the user presses the 'start' button on the webpage
//This function will...
//1. Start the timer 2. Display the hidden buttons 3. Display content on the buttons 
function startGame(){ 
    timerCount = 60
    startTimer();
    buttonsVisible();
    buttonText1();
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
function buttonsVisible(){
    answer1.setAttribute("style", " visibility: visible");
    answer2.setAttribute("style", " visibility: visible");
    answer3.setAttribute("style", " visibility: visible");
    answer4.setAttribute("style", " visibility: visible");
}

function buttonText1(){
    big_text.textContent = questionOne[0];
    answer1.textContent = questionOne[1];
    answer2.textContent = questionOne[2];
    answer3.textContent = questionOne[3];
    answer4.textContent = questionOne[4];
}
function questionOneUser(){
}

function userSelection(){
    if ()
}

// function buttonText2(){
//     answer1.textContent = questionTwo[1];
//     answer2.textContent = questionTwo[2];
//     answer3.textContent = questionTwo[3];
//     answer4.textContent = questionTwo[4];
// }




startButton.addEventListener("click",() => startGame());