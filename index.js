const questionNumber = document.querySelector("#question-number");
const questions = [
  {
    id: 1,
    question: "What does 'benevolent' mean?",
    options: ["Kind-hearted", "Mischievous", "Hostile"],
    answer: "Kind-hearted",
    feedback: "Correct! 'Benevolent' means kind-hearted.",
  },
  {
    id: 2,
    question: "Select the synonym of 'diligent.'",
    options: ["Lazy", "Hardworking", "Playful"],
    answer: "Hardworking",
    feedback: "Correct! 'Diligent' is synonymous with hardworking.",
  },
  {
    id: 3,
    question: "Identify the antonym of 'candid.'",
    options: ["Secretive", "Honest", "Kind"],
    answer: "Secretive",
    feedback: "Correct! 'Candid' is the opposite of secretive.",
  },
  {
    id: 4,
    question: "What is the synonym of 'gregarious'?",
    options: ["Sociable", "Shy", "Angry"],
    answer: "Sociable",
    feedback: "Correct! 'Gregarious' means sociable.",
  },
  {
    id: 5,
    question: "What is the antonym of 'profound'?",
    options: ["Superficial", "Deep", "Insightful"],
    answer: "Superficial",
    feedback: "Correct! 'Profound' is the opposite of superficial.",
  },
  {
    id: 6,
    question: "Which word means the same as 'obsolete'?",
    options: ["Outdated", "Modern", "Innovative"],
    answer: "Outdated",
    feedback: "Correct! 'Obsolete' means outdated.",
  },
  {
    id: 7,
    question: "What does 'prudent' mean?",
    options: ["Careful", "Reckless", "Impulsive"],
    answer: "Careful",
    feedback: "Correct! 'Prudent' means careful.",
  },
  {
    id: 8,
    question: "What is the antonym of 'arduous'?",
    options: ["Easy", "Difficult", "Challenging"],
    answer: "Easy",
    feedback: "Correct! 'Arduous' is the opposite of easy.",
  },
  {
    id: 9,
    question: "What does 'lucid' mean?",
    options: ["Clear", "Confused", "Dull"],
    answer: "Clear",
    feedback: "Correct! 'Lucid' means clear.",
  },
  {
    id: 10,
    question: "What is the synonym of 'pensive'?",
    options: ["Thoughtful", "Careless", "Joyful"],
    answer: "Thoughtful",
    feedback: "Correct! 'Pensive' means thoughtful.",
  },
  {
    id: 11,
    question: "What is the antonym of 'frugal'?",
    options: ["Wasteful", "Economical", "Thrifty"],
    answer: "Wasteful",
    feedback: "Correct! 'Frugal' is the opposite of wasteful.",
  },
  {
    id: 12,
    question: "What does 'voracious' mean?",
    options: ["Greedy", "Satisfied", "Full"],
    answer: "Greedy",
    feedback: "Correct! 'Voracious' means greedy or very hungry.",
  },
  {
    id: 13,
    question: "What is the synonym of 'benevolent'?",
    options: ["Kind-hearted", "Hostile", "Cruel"],
    answer: "Kind-hearted",
    feedback: "Correct! 'Benevolent' means kind-hearted.",
  },
  {
    id: 14,
    question: "What is the synonym of 'elated'?",
    options: ["Joyful", "Sad", "Angry"],
    answer: "Joyful",
    feedback: "Correct! 'Elated' means joyful or extremely happy.",
  },
  {
    id: 15,
    question: "What is the antonym of 'intricate'?",
    options: ["Simple", "Complex", "Detailed"],
    answer: "Simple",
    feedback: "Correct! 'Intricate' is the opposite of simple.",
  },
  {
    id: 16,
    question: "Which word means the same as 'meticulous'?",
    options: ["Careful", "Careless", "Hasty"],
    answer: "Careful",
    feedback: "Correct! 'Meticulous' means very careful or precise.",
  },
  {
    id: 17,
    question: "What does 'transient' mean?",
    options: ["Temporary", "Permanent", "Endless"],
    answer: "Temporary",
    feedback: "Correct! 'Transient' means temporary or short-lived.",
  },
  {
    id: 18,
    question: "What is the antonym of 'docile'?",
    options: ["Rebellious", "Obedient", "Passive"],
    answer: "Rebellious",
    feedback: "Correct! 'Docile' is the opposite of rebellious.",
  },
  {
    id: 19,
    question: "What does 'archaic' mean?",
    options: ["Old-fashioned", "Modern", "Innovative"],
    answer: "Old-fashioned",
    feedback: "Correct! 'Archaic' means old-fashioned or outdated.",
  },
  {
    id: 20,
    question: "What is the synonym of 'nimble'?",
    options: ["Quick", "Slow", "Clumsy"],
    answer: "Quick",
    feedback: "Correct! 'Nimble' means quick and light in movement.",
  },
  {
    id: 21,
    question: "What is the antonym of 'harmony'?",
    options: ["Conflict", "Peace", "Unity"],
    answer: "Conflict",
    feedback: "Correct! 'Harmony' is the opposite of conflict.",
  },
  {
    id: 22,
    question: "What does 'serene' mean?",
    options: ["Calm", "Chaotic", "Loud"],
    answer: "Calm",
    feedback: "Correct! 'Serene' means calm or peaceful.",
  },
  {
    id: 23,
    question: "Which word means the same as 'jubilant'?",
    options: ["Excited", "Sad", "Worried"],
    answer: "Excited",
    feedback: "Correct! 'Jubilant' means very excited or joyful.",
  },
];

console.log(questions.length);

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function displayQuestion() {
  const question = questions[currentQuestion];
  questionNumber.innerHTML = questions[currentQuestion].id;
  console.log(questions[currentQuestion]);
  questionElement.textContent = question.question;
  optionsElement.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(button);
  });

  feedbackElement.style.display = "none";
  nextButton.style.display = "none";
}

function checkAnswer(selectedOption) {
  const question = questions[currentQuestion];
  const options = document.querySelectorAll(".option");

  options.forEach((option) => {
    option.disabled = true;
    if (option.textContent === question.answer) {
      option.classList.add("correct");
    } else if (option.textContent === selectedOption) {
      option.classList.add("incorrect");
    }
  });

  if (selectedOption === question.answer) {
    score++;
    scoreElement.textContent = score;
    feedbackElement.textContent = question.feedback;
    feedbackElement.className = "feedback correct";
  } else {
    feedbackElement.textContent = "Incorrect. Try again!";
    feedbackElement.className = "feedback incorrect";
  }

  feedbackElement.style.display = "block";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    questionElement.textContent = `Quiz completed! Final score: ${score}/${questions.length}`;
    optionsElement.innerHTML = "";
    feedbackElement.style.display = "none";
    nextButton.style.display = "none";
  }
});

displayQuestion();
