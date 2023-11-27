
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

//create variables to store question index and score
let questionIndex = 0;
let score = 0;

//All questions, answers, and key value pairs for solution are held within the questions array 
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
    let questionNo = questionIndex + 1;
    //change the html text to reflect the question we are on
    question.innerHTML = questionNo + ". " + currentQuestion.question;

    //have answers options display using a for loop, pulling from the qustions array
    for (let i = 0; i < questions[questionIndex].answers.length; i++) {
        answer[i].textContent = questions[questionIndex].answers[i].text;
        //Assign each answer to corresponding key value pair. Keep in mind it will store a string (not a boolean)
        answer[i].value = questions[questionIndex].answers[i].correct; 
      }
//Disable next button after click and reset all answer buttons
    next.disabled = true;
    enableAnswerButtons();
    resetAnswerButtons();
}

//Reset all answers buttons to go back to original CSS by making a new function with a for loop
function resetAnswerButtons(){
    var elems = document.getElementsByClassName("answer");
    for (var i=0; i < elems.length; i++){
        elems[i].setAttribute("style", "background-color:transparent");
    }
}

//Have onclick run check answer function in HTML. This function will...
//Check to see if value is T/F
//if true, add time to timer, tell them correct with a green box, add to score 
//if wrong, subtract time to timer, tell them incorrect with a red box
//enable next button 
function checkAnswer(event){
    if (event.target.value == "true"){
        timeLeft += 30;
        timerElement.textContent = timeLeft + " seconds left"
        event.target.setAttribute("style", "background-color:green");
        next.disabled = false;
        score += 1;
        disableAnswerButtons();
        
    } 
    if (event.target.value == "false"){
        timeLeft -= 30;
        timerElement.textContent = timeLeft + " seconds left"
        event.target.setAttribute("style", "background-color:red");
        next.disabled = false;
        answers.disabled = true;
        disableAnswerButtons();
    }
}

//Disable answer buttons after an answer is clicked
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

//Add 1 to questionIndex and display new set of questions
//Display second set of questions and answers 
//If questions left, display the next question 
function nextQuestion(){
    questionIndex += 1;
    if (questionIndex < 5){
        questionVisible();
    } else {
        next.disabled = false;
        endGame();
    }
}

 //TO DO: get rid of endGame Function and combine into one 
function endGame(){
    allAnswers.setAttribute("style", "display:none");
    question.setAttribute("style", "display:none");
    next.setAttribute("style", "display:none");
    title.textContent = "Quiz Over! Your score is " + score;
    timeLeft = 0;
    timerElement.textContent = "0 seconds left" 
    
//Display the form 
    form.setAttribute("style", "display:block");
}

//Store form information in local storage
function scoreLocalStorage(){
    let finalScore = {
        score,
        initials: userInitials.value.trim()
    };
    localStorage.setItem("userScore", JSON.stringify(finalScore));
}

//DONE: Form where users enter initials and send to local storage 
//DONE: Put in a form that asks User for initials
//DONE: Store Initials and score in local storage

//Hide the form at start page 
form.setAttribute("style", "display:none");

start.addEventListener("click",() => startQuiz());

//TO DO: Make sure the timer doesn't display negative numbers

//TO DO: If no questions left, run end game function 
    //TO DO: change content on start button to reset so they can play again
//TO DO: Display the high scores 
