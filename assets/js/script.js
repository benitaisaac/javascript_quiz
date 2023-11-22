
var timerElement = document.querySelector(".timer-count");
var timer;
var timerCount;
var timeLeft = 60;

var question = document.querySelector("#question")
var allAnswers = document.querySelector(".all-answers");
var answer = document.querySelectorAll(".answer"); // This will return an array 
var answers = document.getElementsByClassName(".answer"); //this grabs all the elements
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
    },
    {
        question: "This is question 2",
        answers: [
            {text: "answer option 5", correct: false},
            {text: "answer option 6", correct: true},
            {text: "answer option 7", correct: false},
            {text: "answer option 8", correct: false}
        ],
    },
    {
        question: "This is question 3",
        answers: [
            {text: "answer option 9", correct: true},
            {text: "answer option 10", correct: false},
            {text: "answer option 11", correct: false},
            {text: "answer option 12", correct: false}
        ],
    },
    { 
        question: "This is question 4",
        answers: [
            {text: "answer option 13", correct: false},
            {text: "answer option 14", correct: false},
            {text: "answer option 15", correct: false},
            {text: "answer option 16", correct: true}
        ],
    },
    {  
        question: "This is question 5",
        answers: [
            {text: "answer option 17", correct: false},
            {text: "answer option 18", correct: false},
            {text: "answer option 19", correct: false},
            {text: "answer option 20", correct: true}
        ]
    } 
    
]

function startQuiz(){ 
    timerCount = 60; //start the timer at 60 seconds
    startTimer(); //function to start the timer 
    questionIndex = 0; //start the question index at 0
    questionVisible(); //function to make the questions visible 
}

function startTimer() {
    var timeInterval = setInterval(function (){
        timeLeft--;
        timerElement.textContent = timeLeft + " seconds left";

    if (timeLeft <= 0){
        clearInterval(timeInterval); 
        timeLeft = 0;
        timerElement.textContent = timeLeft + " seconds left";
        endGame();
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
    //ask tutor for help with this
    for (let i = 0; i < questions[questionIndex].answers.length; i++) {
        answer[i].textContent = questions[questionIndex].answers[i].text;
        //Assign each answer to corresponding key value pair. Keep in mind it will store a string (not a boolean)
        answer[i].value = questions[questionIndex].answers[i].correct; 
      }
//DONE: Disable next button after click 
    next.disabled = true;
    enableAnswerButtons();
    resetAnswerButtons();

//DONE: Reset all answers buttons to go back to original CSS 
      //DONE: create a new function -- resetAnswerButtons
      //DONE: create a for loop which will reset all formatting on css buttons
}

function resetAnswerButtons(){
    var elems = document.getElementsByClassName("answer");
    for (var i=0; i < elems.length; i++){
        elems[i].setAttribute("style", "background-color:transparent");
    }
}

//DONE: Have onclick run check answer function 
function checkAnswer(event){
//DONE: Acess button that was clicked (this or event.target)
//DONE: conditional, check to see if value is T/F
//DONE: if true, add time to timer, tell them correct, add to score 
//DONE: if wrong, subtract time to timer, tell them incorrect
//DONE: enable next button 
    if (event.target.value == "true"){
        console.log("you're right!");
        timeLeft += 30;
        timerElement.textContent = timeLeft + " seconds left"
        event.target.setAttribute("style", "background-color:green");
        next.disabled = false;
        disableAnswerButtons();
        
    } 
    if (event.target.value == "false"){
        console.log("you're wrong!")
        timeLeft -= 30;
        timerElement.textContent = timeLeft + " seconds left"
        event.target.setAttribute("style", "background-color:red");
        next.disabled = false;
        answers.disabled = true;
        disableAnswerButtons();
    }
}

//DONE: Disable answer buttons after an answer is clicked
function disableAnswerButtons(){
    var elems = document.getElementsByClassName("answer");
    for(var i=0; i < elems.length;i++){
        elems[i].disabled=true;
    }
}

function enableAnswerButtons(){
    var elems = document.getElementsByClassName("answer");
    for(var i=0; i < elems.length;i++){
        elems[i].disabled=false;
    }
}

//DONE: Add 1 to questionIndex and display new set of questions
//DONE: Display second set of questions and answers 
function nextQuestion(){
    console.log("I just pressed next");
    questionIndex = questionIndex + 1
    questionVisible();
}

function endGame(){
    console.log("you've run out of time!");
}


start.addEventListener("click",() => startQuiz());


//TO DO: If questions left, display the next question 

//DONE: Make sure the timer doesn't display negative numbers 

//TO DO: If no questions left, run end game function 
    //TO DO: create an endGame function 
    //TO DO: figure out what to display on endGame function 
    //TO DO: change content on start button to reset so they can play again
//TO DO: Form where users enter initials and send to local storage 
//TO DO: Display the high scores 
