let questions = [
    {
        question: 'Scotland’s national animal is a unicorn?', 
        answer: true
    },
    {
        question: 'Bats are blind?',
        answer: false
    },
    {
        question: 'The blue whale is the biggest animal to have ever lived?',
        answer: true
    },
    {
        question: 'Strawberries are not actually berries?',
        answer: true
    },
    {
        question: 'Tomatoes are vegetables?',
        answer: false
    },
    {
        question: 'In Greek mythology Cupid is the god of love?',
        answer: false
    },
    {   
        question: 'A human brain is the organ with the most fat?',
        answer: true
    },
    {
        question: 'The human body has three lungs?',
        answer: false
    },
    {
        question: 'Greenland is three times the size of the state of Texas?',
        answer: true
    },
    {
        question: 'I have blue eyes?',
        answer: false
    },
]

const quizContainer = document.getElementById('quizContainer');
const questionsUl = document.getElementById('questionsUl');
const resultContainer = document.getElementById('resultContainer');
const resultBtn = document.getElementById('resultBtn');

const startQuiz = () => {
    questions.forEach((question, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <span>${index + 1}. ${question.question}</span>
        <label>
        <input type="radio" name="${index}" value="true">True
        </label>
        <label>
        <input type="radio" name="${index}" value="false">False
        </label>
        `;
       questionsUl.appendChild(li);
        });
    }
    startQuiz();
