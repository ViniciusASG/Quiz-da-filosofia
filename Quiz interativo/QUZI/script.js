const questions = [
    {
        question: "Quem disse a frase (so sei que nada sei)?",
        options: ["Aristóteles", "Platão", "Socrates", "Immanuel Kant"],
        correctAnswer: 3
    },
    {
        question: "Quem disse a frase (penso logo existo)?",
        options: ["Rene descartes", "Tales Mileto", "Platao", "Pitagoras"],
        correctAnswer: 1
    },
    {
        question: "onde aristóteles nasceu?",
        options: ["Grecia", "Italia", "Egito", "Mongolia"],
        correctAnswer: 1
    },
    {
        question: "Quem disse a frase(A coisa mais difícil do mundo é conhecer a nós mesmos e a mais fácil, falar mal dos outros.)?",
        options: ["Socrates", "Tales Mileto", "Platao", "Immanuel Kant"],
        correctAnswer: 2
    },
    {
        question: "Qual desses Nasceu na turquia?",
        options: ["Socrates", "Tales Mileto", "Platao", "Pitagoras"],
        correctAnswer: 2
    },
    // Adicione mais perguntas conforme necessário
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');

function showQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;

    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName('option')[i].textContent = q.options[i];
    }
}

function checkAnswer(option) {
    const q = questions[currentQuestion];

    if (option === q.correctAnswer) {
        score++;

        alert("Resposta Correta")
    }   else{
        alert("Resposta Incorreta")
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    let message = '';

    if (score <= 2) {
        message = 'Você acha que e sabio mais o sabio sabe que nao sabe nada';
    } else if (score <= 4) {
        message = 'Voce e um sabio mediano que acha que sabe medio mais o sabio de verdade sabe que nao sabe nada';
    } else {
        message = 'Voce e um sabio otimo que sabe que nao sabe nada';
    }

    resultElement.textContent = `Você acertou ${score} de ${questions.length} perguntas. ${message}`;
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    questionContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    showQuestion();
}

// Mostra a primeira pergunta ao carregar a página
showQuestion();