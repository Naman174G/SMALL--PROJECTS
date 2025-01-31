// Questions Array
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correct: 2, // Index of correct answer
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: 1,
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
    correct: 1,
  },
];

// DOM Elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const quizEl = document.getElementById("quiz");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

let currentQuestion = 0;
let score = 0;

// Load Question
function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;

  // Clear previous options
  optionsEl.innerHTML = "";

  // Display new options
  currentQuiz.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    optionsEl.appendChild(button);
  });
}

// Check Answer
function checkAnswer(selectedIndex) {
  const currentQuiz = quizData[currentQuestion];
  if (selectedIndex === currentQuiz.correct) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Show Result
function showResult() {
  quizEl.style.display = "none";
  resultEl.style.display = "block";
  scoreEl.textContent = `Your score is: ${score} / ${quizData.length}`;
}

// Initialize Quiz
loadQuestion();
