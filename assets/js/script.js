
var timerElement = document.querySelector(".timer-count");
var timer;
var timerCount;

var question = document.querySelector("#question")
var allAnswers = document.querySelector(".all-answers");
var answer = document.querySelector(".answer");
var next = document.querySelector(".next")
var start = document.querySelector(".start")

//create variables to store question index (for future loop) and score 
let questionIndex = 0;
let score = 0;

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
        ],

        question: "This is question 5",
        answers: [
            {text: "answer option 1", correct: false},
            {text: "answer option 2", correct: false},
            {text: "answer option 3", correct: false},
            {text: "answer option 4", correct: true}
        ]
    },
]

// let userSelection = { userAnswer1: " "};


//This function starts the game once the user presses the 'start' button on the webpage
//This function will...
//1. Start the timer 2. Display the hidden buttons 3. Display content on the buttons 
function startQuiz(){ 
    timerCount = 60; //start the timer at 60 seconds
    startTimer(); //function to start the timer 
    questionIndex = 0; //start the question index at 0
    next.innerHTML = "Next"; //set the html text in the next button to 'next'
    questionVisible(); //function to make the questions visible
    // buttonText1();
    // userClick()
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

function questionVisible(){
    allAnswers.setAttribute("style", "display:block");
    question.setAttribute("style", "display:block");
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

start.addEventListener("click",() => startQuiz());


