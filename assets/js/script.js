
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
            {text: "answer option 5", correct: false},
            {text: "answer option 6", correct: true},
            {text: "answer option 7", correct: false},
            {text: "answer option 8", correct: false}
        ],

        question: "This is question 3",
        answers: [
            {text: "answer option 9", correct: true},
            {text: "answer option 10", correct: false},
            {text: "answer option 11", correct: false},
            {text: "answer option 12", correct: false}
        ],
        
        question: "This is question 4",
        answers: [
            {text: "answer option 13", correct: false},
            {text: "answer option 14", correct: false},
            {text: "answer option 15", correct: false},
            {text: "answer option 16", correct: true}
        ],

        question: "This is question 5",
        answers: [
            {text: "answer option 17", correct: false},
            {text: "answer option 18", correct: false},
            {text: "answer option 19", correct: false},
            {text: "answer option 20", correct: true}
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
    //display all the questions, get rid of start button, and add next button
    allAnswers.setAttribute("style", "display:block");
    question.setAttribute("style", "display:block");
    next.setAttribute("style", "display:block");
    start.setAttribute("style", "display:none");

    //define local variable currentQuestion to display the question we are on 
    //within the questions array above
    let currentQuestion = questions[questionIndex]; 
    //define local variable questionNo to keep track of our question number
    //note that we add 1 because of index 0. I might take this out
    let questionNo = questionIndex + 1;
    //change the html text to reflect the question we are on
    question.innerHTML = questionNo + ". " + currentQuestion.question;

    //how do i get the text to display in the answers buttons using inner HTML?

}

start.addEventListener("click",() => startQuiz());


