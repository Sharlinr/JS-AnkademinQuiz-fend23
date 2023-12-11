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
const resetBtn = document.getElementById('resetBtn');

const startQuiz = () => {
    questions.forEach((question, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <legend>${index + 1}. ${question.question}</legend>
        <label>
        <input type="radio" name='${index}' value='true'>True
        </label>
        <label>
        <input type="radio" name='${index}' value='false'>False
        </label>
        `;
       questionsUl.appendChild(li);
        });
    }
    //startQuiz();

const showFinalResult = () => {
    const playerAnswers = Array.from(document.querySelectorAll('input[type="radio"]:checked'))
                                .map(input => input.value === 'true');
    
    const correctAnswers = questions.filter((question, index) => question.answer === playerAnswers[index]);
    const score = (correctAnswers.length / questions.length) * 100;
    
    resultDiv.innerHTML = `<p>Du fick ${correctAnswers.length} av ${questions.length} rätt!</p>`

    const resultList = document.createElement('ul');
    correctAnswers.forEach((question, index) => {
    const li = document.createElement('li');
    li.textContent = ` ${index + 1}. ${question.question}`;
    li.classList.add(question.answer ? 'correct' : 'incorrect');
     resultList.appendChild(li);
});

    resultDiv.appendChild(resultList);
    
    let msg = '';
    if (score<50) {
    msg = 'Underkänd!';
        resultContainer.style.color = "red";
    } else if (score>=50 && score<=75) {
        msg = 'Bra!';
          resultContainer.style.color = "orange";
    } else {
         msg = 'Riktigt bra!';
            resultContainer.style.color = "green";
    }
        resultMsg.textContent = msg;
    }; 
    
const resetQuiz = () => {
    resultMsg.textContent = "";
    resultDiv.innerHTML = "";
    questionsUl.innerHTML = "";
    startQuiz();
};
//Event listener for submitBtn
resultBtn.addEventListener('click', showFinalResult);
resetBtn.addEventListener('click', resetQuiz);

startQuiz();