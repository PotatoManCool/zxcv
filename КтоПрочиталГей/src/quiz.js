function mainus(){
    let quizData = [
        {
            "question" : "Для чего создали компьютер?",
            "answers" : [
                {"text":"1. Человек создал компьютер для облегчения работы с информацией.", "correct":true},
                {"text":"2. Человек создал компьютер для того, чтобы играть на нем.", "correct":false},
                {"text":"3. Человек создал компьютер, потому что было скучно.", "correct":false},
                {"text":"4. Человек создал компьютер тапать хомячка.", "correct":false}
            ]
        },
        {
            "question" : "Windows — это одна из самых распространённых операционных систем. Как переводится это слово на русский язык?",
            "answers" : [
                {"text":"1. Дверь", "correct":false},
                {"text":"2. Окно", "correct":true},
                {"text":"3. Ячейка", "correct":false},
                {"text":"4. Квадрат", "correct":false}
            ]
        },
        {
            "question" : "Сколько битов в 62 байтах?",
            "answers" : [
                {"text":"1. 488", "correct":false},
                {"text":"2. 432", "correct":false},
                {"text":"3. 584", "correct":false},
                {"text":"4. 496", "correct":true}
            ]
        },
        {
            "question" : "Какая клавиша включает заглавные буквы?",
            "answers" : [
                {"text":"1. NumLock", "correct":false},
                {"text":"2. CapsLock", "correct":true},
                {"text":"3. Enter", "correct":false},
                {"text":"4. Insert", "correct":false}
            ]
        },
        {
            "question" : "Как называется структура, которая представляет собой последовательность действий, повторяющихся многократно?",
            "answers" : [
                {"text":"1. Ветвление", "correct":false},
                {"text":"2. Функция", "correct":false},
                {"text":"3. Цикл", "correct":true},
                {"text":"4. Рекурсия", "correct":false}
            ]
        },
        {
            "question" : "Что определяет индекс массива?",
            "answers" : [
                {"text":"1. Положение элементов массива относительно друг друга", "correct":false},
                {"text":"2. Номер элемента в массиве ", "correct":true},
                {"text":"3. Количество элементов", "correct":false},
                {"text":"4. Номера и количество элементов", "correct":false}
            ]
        },
        {
            "question" : "Что такое переменная?",
            "answers" : [
                {"text":"1. Ячейка памяти, хранящая в себе ту или иную информацию", "correct":true},
                {"text":"2. Функция программы, выполняющая определённую роль ", "correct":false},
                {"text":"3. Необязательная чаcть кода, выполняющая заданное действие", "correct":false},
                {"text":"4. Обязательная часть кода, отвечающая за перемещение", "correct":false}
            ]
        },
        {
            "question" : "Что такое массив?",
            "answers" : [
                {"text":"1. Совокупность конечного числа данных различных типов", "correct":false},
                {"text":"2. Совокупность конечного числа данных одного типа", "correct":true},
                {"text":"3. Скалярный тип данных", "correct":false},
                {"text":"4. Совокупность начального чиcла данных любого типа", "correct":false}
            ]
        },
        {
            "question" : "Какой из преведённых символов можно использовать в имени переменной?",
            "answers" : [
                {"text":"1. Собака", "correct":false},
                {"text":"2. Плюс", "correct":false},
                {"text":"3. Подчёркивание ", "correct":true},
                {"text":"4. Пробел", "correct":false}
            ]
        },
        {
            "question" : "На каком этапе создания программы нужно составить блок-схему?",
            "answers" : [
                {"text":"1. До начала составления программы ", "correct":true},
                {"text":"2. Во время составления программы", "correct":false},
                {"text":"3. После составления программы", "correct":false},
                {"text":"4. Она не нужна", "correct":false}
            ]
        },
        {
            "question" : "Разработкой алгоритма решения задачи принято называть...",
            "answers" : [
                {"text":"1. Определение последовательности действий, ведущих к получению результата ", "correct":true},
                {"text":"2. Точное описание данных звдвчи, условия и полного решения", "correct":false},
                {"text":"3. Сведение задачи к математической модели, для которой известен метод решения", "correct":false},
                {"text":"4. Разделение задачи на ярусы, и их последовательное решение", "correct":false}
            ]
        },
        {
            "question" : "Как называется алгоритм, действия в котором выполняются друг за другом, не повторяясь?",
            "answers" : [
                {"text":"1. Разветвлённый", "correct":false},
                {"text":"2. Линейный", "correct":true},
                {"text":"3. Циклический", "correct":false},
                {"text":"4. Такого алгоритма не сущетсвует", "correct":false}
            ]
        },
        {
            "question" : "Чем характеризуется переменная?",
            "answers" : [
                {"text":"1. Именеем, типом, значением ", "correct":true},
                {"text":"2. Именем и значением", "correct":false},
                {"text":"3. Значением и типом", "correct":false},
                {"text":"4. Только именем", "correct":false}
            ]
        },
        {
            "question" : "Служебное слово в языке Pascal, открывающее раздел операторов -",
            "answers" : [
                {"text":"1. start", "correct":false},
                {"text":"2. began", "correct":false},
                {"text":"3. code", "correct":false},
                {"text":"4. begin ", "correct":true}
            ]
        },
        {
            "question" : "Разработкой алгоритма решения задачи принято называть",
            "answers" : [
                {"text":"1. Определение последовательности действий, ведущих к получению ", "correct":true},
                {"text":"2. Точное описание данных звдвчи, условия и полного решения", "correct":false},
                {"text":"3. Сведение задачи к математической модели, для которой известен метод решения", "correct":false},
                {"text":"4. Разделение задачи на ярусы, и их последовательное решение", "correct":false}
            ]
        },
]

let currectQuectionId = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerForm = document.getElementById('answer-form');
const resultContainer =document.getElementById('results-container');
const resultElement = document.getElementById('results');
const submitButton = document.getElementById('submit-btn');

let rndm = [];
for (let i=0;i<5;i++){
    rndm[i]=Math.random()*(15-1)+0;
}

console.log(rndm);
let i2=0;
function showQuestion(){

        const currentQuestion = quizData[rndm[i2]];

        console.log(rndm[i2])
        console.log(quizData[0].question)

        document.getElementById("question").textContent = quizData[0].question;
        //answerForm.innerHTML = '';
        
        currentQuestion.answers.forEach(answer=>{
            const answerLabel =document.createElement('label');
            answerLabel.innerHTML=`<input type="radio" name="answer" value=${answer.text} class="radio_input">${answer.text}<br>`;
            answerForm.appendChild(answerLabel);
})};
function checkAnswer(){
    const selectedAnswer=document.querySelector('input[name"answer"]:checked');
    if (!selectedAnswer)return;

    const answerText=selectedAnswer.ariaValueMax;
    const currectQuestion=quizData[currectQuectionIndex];

    if(answerText==currentQuestion.answers.find(answer=>answer.correct).text){
        score++;
    }
    currectQuectionIndex++;
    if(currectQuectionIndex<quize.lenght){
        showQuestion();
    }else{
        showResults();    }
}
function showResults(){
    questionElement.style.display='none';
    answerForm.style.display='none';

    submitButton.style.display='none';
    resultsContainer.style.display='block'
    
    resultsElement.textContent=`Вы набрали ${score} из ${quizData.length}` ;
}
function numb(){
    i2++;
}
submitButton.addEventListener('click',checkAnswer,numb);
showQuestion()
}


mainus()
