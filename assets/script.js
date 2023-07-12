// Add all Variables on the top
var beginBTN = document.querySelector("#beginQuizButton")
var startScreen = document.querySelector("#startScreen")
var quizContent = document.querySelector("#quizContent")
var answersEl = document.querySelector("#choices")
var feedbackEl = document.querySelector("#feedback")
var finalScreen = document.querySelector("#finalScreen")
var finalScoreEl = document.querySelector("#score")
var initialsEl = document.querySelector("#initials")
var timerEl = document.querySelector("#Timer")
var submitBTN = document.querySelector("#Submit")

var questions = [
    {
        questionTitle: "Commonly used data types DO NOT include:",
        choices: ["strings","booleans","alerts","numbers"],
        answer: "alerts"
    }, 

    {
        questionTitle: "What is the type of pop up boxes available in JavaScript?",
        choices: ["alert","prompt","confirm","all of the above"],
        answer: "all of the above"
    },

    {
        questionTitle: "String values must be enclosed with:",
        choices: ["Nothing","Single quotes","Double Quotes","Both B and C"],
        answer: "Both B and C"
    },

    {
        questionTitle: "The condition in an if / else statement is enclosed within ____.",
        choices: ["square brackets", "quotes", "parentheses", "curly brackets"],
        answer: "parentheses"
    },
]


var time = questions.length * 15
var timerID;
var currentQuestionIndex = 0;
function clockTick() {
    time --;
    timerEl.textContent = time;

    if (time <= 0) {
        quizEnd();
    }
}

//Event Listener to start quiz
beginBTN.addEventListener("click",startQuiz);

//Start Quiz Function
function startQuiz(){
    startScreen.setAttribute("class","hidden");
    
    quizContent.removeAttribute("class")

    timerId = setInterval(clockTick, 1000);
    timerEl.textcontent = time;

    showQuestion ();
}

//Show Questions
function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];

    var titleEl = document.getElementById("question-title")
    titleEl.textContent = currentQuestion.questionTitle;

    answersEl.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i){
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class","choices")
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + ". " + choice;

        choiceNode.onclick = choiceButtons;
        answersEl.appendChild(choiceNode);
    });
}

function choiceButtons(){
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 15;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;
        feedbackEl.textContent = "Wrong!";
        feedbackEl.style.color = "red";
        feedbackEl.style.fontSize = "200%";
      } else {
        feedbackEl.textContent = "Correct!";
        feedbackEl.style.color = "green";
        feedbackEl.style.fontSize = "200%";
      }
      currentQuestionIndex++;

      if (currentQuestionIndex === questions.length) {
        quizEnd();
      } else {
        showQuestion();
      }
}
function quizEnd() {

    clearInterval(timerId);
  
    quizScreen.setAttribute("class","hidden")

    var finalScreen = document.getElementById("finalScreen");
    finalScreen.removeAttribute("class");
  
    var finalScoreEl = document.getElementById("score");
    finalScoreEl.textContent = time;
  
  }

