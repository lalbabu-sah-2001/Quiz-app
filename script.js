const questions = [
    {
        question: "Which is largest animal in the World?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Shark", correct: false },
            { text: "Shark", correct: false },
        ]
    },
    {
        question: "Which is largest mauntain in the india's?",
        answers: [
            { text: "Nanda devi", correct: false },
            { text: "Kanchenjunga", correct: true },
            { text: "Nilgiri Mountains", correct: false },
            { text: "Aravalli Range", correct: false },
        ]
    },
    {
        question: "Which is largest river in the India?",
        answers: [
            { text: "Kosi", correct: false },
            { text: "Ganga", correct: true },
            { text: "Yamuna", correct: false },
            { text: "krishna", correct: false },
        ]
    },
    {
        question: "Which is Smallest continent in the World?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {

    currentDQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}
startQuiz();
showQuestion();