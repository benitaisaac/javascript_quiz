
var timerElement = document.querySelector(".timer-count");
var timer;
var timerCount;
var timeLeft = 60;

var question = document.querySelector("#question")
var allAnswers = document.querySelector(".all-answers");
var answer = document.querySelectorAll(".answer"); // This will return an array 
var answers = document.getElementsByClassName(".answer"); //this grabs all the elements
var next = document.querySelector(".next");
var start = document.querySelector(".start");
var title = document.querySelector("#big_text");
var form = document.querySelector("#form");

var userInitials = document.querySelector("#userInitials");

//create variables to store question index (for future loop) and score 
let questionIndex = 0;
let score = 0;

//TO DO: Insert questions and answers 
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            {text: " <script> ", correct: true},
            {text: " <scripting> ", correct: false},
            {text: " <js> ", correct: false},
            {text: " <javascript> ", correct: false}
        ],
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: [
            {text: " alertBox(\"Hello World\"); ", correct: false},
            {text: " alert(\"Hello World\"); ", correct: true},
            {text: " msgBox(\"Hello World\"); ", correct: false},
            {text: " msg(\"Hello World\") ", correct: false}
        ],
    },
    {
        question: "How do you create a function in Javascript?",
        answers: [
            {text: "function myFunction()", correct: true},
            {text: "function = myFunction()", correct: false},
            {text: "function:myFunction()", correct: false},
            {text: "function myFunction{}", correct: false}
        ],
    },
    { 
        question: "How do you call a function named \"myFunction\"?",
        answers: [
            {text: "call function myFunction()", correct: false},
            {text: "call myFunction()", correct: false},
            {text: "myFunction{}", correct: false},
            {text: "myFunction()", correct: true}
        ],
    },
    {  
        question: "How do you write an IF statement in Javascript?",
        answers: [
            {text: "if i = 5 then", correct: false},
            {text: "if i = 5", correct: false},
            {text: "if i == 5 then", correct: false},
            {text: "if (i == 5)", correct: true}
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
//TO DO: Add to score global variable when user gets an answer correct

    if (event.target.value == "true"){
        console.log("you're right!");
        timeLeft += 30;
        timerElement.textContent = timeLeft + " seconds left"
        event.target.setAttribute("style", "background-color:green");
        next.disabled = false;
        score += 1;
        console.log(score); //check score in console 
        disableAnswerButtons();
        
    } 
    if (event.target.value == "false"){
        console.log("you're wrong!")
        timeLeft -= 30;
        timerElement.textContent = timeLeft + " seconds left"
        event.target.setAttribute("style", "background-color:red");
        next.disabled = false;
        answers.disabled = true;
        console.log(score); //check score in console
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
//DONE: If questions left, display the next question 
function nextQuestion(){
    console.log("I just pressed next");
    questionIndex += 1;
    if (questionIndex < 5){
        questionVisible();
    } else {
        next.disabled = false;
        endGameScreen();
    }
}

//DONE: Display a new screen 
//DONE: create an endGame function 

function endGame(){
    console.log("you've run out of time!");
    endGameScreen();
}

function scoreLocalStorage(){
    //Store form information in local storage
    let finalScore = {
        score,
        initials: userInitials.value.trim()
    };
    localStorage.setItem("userScore", JSON.stringify(finalScore));
}

//DONE: Form where users enter initials and send to local storage 
//DONE: Put in a form that asks User for initials
//DONE: Store Initials and score in local storage

function endGameScreen(){
    allAnswers.setAttribute("style", "display:none");
    question.setAttribute("style", "display:none");
    next.setAttribute("style", "display:none");
    title.textContent = "Quiz Over! Your score is " + score;
    timeLeft = 0;
    timerElement.textContent = "0 seconds left" 
    
//Display the form 
    form.setAttribute("style", "display:block");
}

//Hide the form at start page 
form.setAttribute("style", "display:none");

start.addEventListener("click",() => startQuiz());

//TO DO: Make sure the timer doesn't display negative numbers

//TO DO: If no questions left, run end game function 
    //TO DO: change content on start button to reset so they can play again
//TO DO: Display the high scores 
