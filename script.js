const questions = [
    {
        question: "Qual país ganhou a Copa do Mundo de 2014?",
        options: ["Alemanha", "Brasil", "Argentina", "França"],
        answer: "Alemanha"
    },
    {
        question: "Quem é o maior artilheiro da história das Copas do Mundo?",
        options: ["Ronaldo", "Pelé", "Marta", "Miroslav Klose"],
        answer: "Miroslav Klose"
    },
    {
        question: "Qual clube possui mais títulos da UEFA Champions League?",
        options: ["Barcelona", "Real Madrid", "Bayern de Munique", "Liverpool"],
        answer: "Real Madrid"
    }
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');

function startGame() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hidden');
    resultElement.classList.add('hidden');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('option-button');
        button.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (selectedOption === currentQuestion.answer) {
        alert("Correto!");
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
            nextButton.classList.remove('hidden');
        } else {
            showResult("Parabéns! Você completou o quiz!");
        }
    } else {
        showResult("Você errou! Tente novamente.");
        nextButton.classList.add('hidden');
    }
}

function showResult(message) {
    resultElement.innerText = message;
    resultElement.classList.remove('hidden');
}

nextButton.addEventListener('click', startGame);
startGame();