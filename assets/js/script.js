var startButton = document.querySelector(".start");
var timerElement = document.querySelector(".timer-count");
var answerBtn = document.querySelector(".answer");

const questions = [
    {
        question: "This is question 1",
        answers: [
            {text: "answer option 1", correct: true},
            {text: "answer option 2", correct: false},
            {text: "answer option 3", correct: false},
            {text: "answer option 4", correct: false}
        ],

        question: "This is question 2",
        answers: [
            {text: "answer option 1", correct: false},
            {text: "answer option 2", correct: true},
            {text: "answer option 3", correct: false},
            {text: "answer option 4", correct: false}
        ],

        question: "This is question 3",
        answers: [
            {text: "answer option 1", correct: true},
            {text: "answer option 2", correct: false},
            {text: "answer option 3", correct: false},
            {text: "answer option 4", correct: false}
        ],
        
        question: "This is question 4",
        answers: [
            {text: "answer option 1", correct: false},
            {text: "answer option 2", correct: false},
            {text: "answer option 3", correct: false},
            {text: "answer option 4", correct: true}
        ]
    },
]

// let questionOne = ["text for question one", "answer option 1_1", "answer option 2_1", "answer option 3_1", "answer option 4_1", "answer option 1_1", ];
// let questionTwo = ["text for question two", "answer option 1_2", "answer option 2_2", "answer option 3_2", "answer option 4_2", "answer option 5_2"];
// let questionThree = ["text for question three", "answer option 1_3", "answer option 2_3", "answer option 3_3", "answer option 4_3", "answer option 5_3"];
// let questionFour = ["text for question four", "answer option 1_4", "answer option 2_4", "answer option 3_4", "answer option 4_4", "answer option 5_4"];
// let questionFive = ["text for question five", "answer option 1_5", "answer option 2_5", "answer option 3_5", "answer option 4_5", "answer option 5_5"];

// let userSelection = { userAnswer1: " "};

var timer;
var timerCount;
timerCount = 60;


//This function starts the game once the user presses the 'start' button on the webpage
//This function will...
//1. Start the timer 2. Display the hidden buttons 3. Display content on the buttons 
// function startGame(){ 
//     timerCount = 60
//     startTimer();
//     buttonsVisible();
//     buttonText1();
//     userClick()
// }

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
    answerBtn.setAttribute("style", " visibility: visible");
}

// function buttonText1(){
//     big_text.textContent = questionOne[0];
//     answer1.textContent = questionOne[1];
//     answer2.textContent = questionOne[2];
//     answer3.textContent = questionOne[3];
//     answer4.textContent = questionOne[4];
//     start.textContent = "Submit"
// }

// //Function that checks to see which answer the user clicked and send that information to userSelection
// function userClick(){
//     answer1.addEventListener("click", () => (userSelection.userAnswer1 = answer1.textContent));
//     answer2.addEventListener("click", () => (userSelection.userAnswer1 = answer2.textContent));
//     answer3.addEventListener("click", () => (userSelection.userAnswer1 = answer3.textContent));
//     answer4.addEventListener("click", () => (userSelection.userAnswer1 = answer4.textContent));
//     checkAnswer();
//     console.log(userSelection) 
//  }

// function checkAnswer(){
//     if (userSelection.userAnswer1 === questionOne[5]){
//         console.log("you're right!")
//     }
// }

startButton.addEventListener("click",() => startTimer());


