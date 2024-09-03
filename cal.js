
const questions = [
    {
        question: "What city is known as The Eternal City",
        answers: [
            {text: "Rome", correct: true},
            {text: "Vatican", correct: false},
            {text: "Italy", correct: false},
            {text: "Greece", correct: false}
        ]
    },
    {
        question: "Which country has the most islands",
        answers: [
            {text: "Brazil", correct: false},
            {text: "Sweden", correct: true},
            {text: "Maldives", correct: false},
            {text: "Spain", correct: false}
        ]
    },
    {
        question: "How many stars are on the Chinese flag",
        answers: [
            {text: "9", correct: false},
            {text: "6", correct: false},
            {text: "5", correct: true},
            {text: "2", correct: false}
        ]
    },

    {
        question: "Which one is the biggest continent in the world",
        answers: [
            {text: "Europe", correct: false},
            {text: "Africa", correct: false},
            {text: "North America", correct: false},
            {text: "Asia", correct: true}
        ]
    },

    {
        question: "How many hearts does an octopus have",
        answers: [
            {text: "Seven", correct: false},
            {text: "Africa", correct: false},
            {text: "Three", correct: true},
            {text: "Five", correct: false}
        ]
    }
];

let questionElement = document.getElementById('showQuestion');
let answerBtn = document.getElementById('answer');
let nextBtn = document.getElementById('btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.style.display = "none"; // Hide Next button initially
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    // Clear previous answers
    answerBtn.innerHTML = '';
    currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");

    //Adding above button values to the HTML
    
    button.innerHTML = answer.text;
    button.classList.add("btn");
    button.addEventListener('click', () => selectAnswer(answer));
    answerBtn.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }

    // Disable buttons after selection
    Array.from(answerBtn.children).forEach(button => button.disabled = true);

    // Show Next button
    nextBtn.style.display = "block";
     
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        // Hide Next button again
        nextBtn.style.display = "none";
    } else {
        showResult();
    }
}

//Shows the result

function showResult() {
    questionElement.innerHTML = `Quiz completed! Your score is ${score} out of ${questions.length}.`;
    answerBtn.innerHTML = '';
    nextBtn.style.display = "none";
}

nextBtn.addEventListener('click', showNextQuestion);

// If we reload the page, again quizz will start
window.onload = startQuiz;
