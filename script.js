const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement  = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () =>{
    //increments to next question
    currentQuestionIndex++
    setNextQuestion()
})


function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    //set to 0 to start at first questions array
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

// function to show a question
function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    //returns collection of answers
    Array.from(answerButtonsElement.children).forEach(button => {
        //checks whether the answer is correct
        setStatusClass(button, button.dataset.correct)
    });
    //checks if theres more questions
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide');
    } else{
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else{
        element.classList.add('wrong')
    }
}

//removes answer
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//declaring questions
const questions = [
    {
        question: '1.What is the correct way to declare a variable in JavaScript?',
        answers: [
            {text: 'a) var myVariable',correct: false},
            {text: 'b) variable myVariable',correct: false},
            {text: 'c) let myVariable',correct: true},
            {text: 'd) let myvariable',correct: false},
        ]
    },
    {
        question: '2.What is the following output of the code: Console log(3 + "2")',
        answers: [
            {text: 'a) 6',correct: false},
            {text: 'b) 5',correct: false},
            {text: 'c) 32',correct: true},
            {text: 'd) "32"',correct: false},
        ]
    },
    {
        question: '2.What is the following output of the code: Console log(3 + "2")',
        answers: [
            {text: 'a) 6',correct: false},
            {text: 'b) 32',correct: true},
            {text: 'c) 5',correct: false},
            {text: 'd) "32"',correct: false},
        ]
    },
    {
        question: '3.What is the result of the following expression? typeof null',
        answers: [
            {text: 'a) "null"',correct: false},
            {text: 'b) "object"',correct: true},
            {text: 'c) "undefined"',correct: false},
            {text: 'd) "string"',correct: false},
        ]
    },
    {
        question: '4.Which function is used to add an element to the end of an array in JavaScript?',
        answers: [
            {text: 'a) push()',correct: true},
            {text: 'b) unshift()',correct: false},
            {text: 'c) pop()',correct: false},
            {text: 'd) shift()',correct: false},
        ]
    },
    {
        question: '5.What is the purpose of the "addEventlistener" method in JavaScript',
        answers: [
            {text: 'a) To create a new element in the DOM',correct: true},
            {text: 'b) To remove an event listener from an element',correct: false},
            {text: 'c) To add an event listener to an element',correct: false},
            {text: 'd) To modify the styling of an element',correct: false},
        ]
    },
    {
        question: '6.What is the output of the following code: console.log(1 === "1")',
        answers: [
            {text: 'a) true',correct: false},
            {text: 'b) false',correct: true},
            {text: 'c) undefined',correct: false},
            {text: 'd) NaN',correct: false},
        ]
    },
    {
        question: '7.Which of the following  is not a valid JavaScript loop',
        answers: [
            {text: 'a) for loop',correct: false},
            {text: 'b) while loop',correct: false},
            {text: 'c) until',correct: true},
            {text: 'd) do...loop',correct: false},
        ]
    },
    {
        question: '8.How can you convert a string to an integer in JavaScript',
        answers: [
            {text: 'a) parseInt()',correct: true},
            {text: 'b) toString()',correct: false},
            {text: 'c) parseFloat()',correct: false},
            {text: 'd) toInteger()',correct: false},
        ]
    },
    {
        question: '9.What is the purpose of the "querySelector" method in JavaScript?',
        answers: [
            {text: 'a) To select an element from the DOM based on its ID',correct: false},
            {text: 'b) To select an elements from the DOM',correct: false},
            {text: 'c) To select an element from the DOM based on its class name',correct: true},
            {text: 'd) To select the first element from the element from the DOM that matches a specific CSS selector',correct: false},
        ]
    },
    {
        question: '10.What does the "JSON.parse()" function do in JavaScript',
        answers: [
            {text: 'a) Converts a JavaScript object to a JSON string',correct: true},
            {text: 'b) Converts a JSON string to a JavaScript object',correct: false},
            {text: 'c) Parses HTML code into a DOM tree',correct: false},
            {text: 'd) Encrypts data using the JSON format',correct: false},
        ]
    },

]


