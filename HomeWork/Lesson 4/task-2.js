const operations = ['+', '-', '*', '\\']
let a = null
let b = null
let op = null

let correctAnswers = 0
let wrongAnswers = 0

const taskElement = getDomElementById('#task')
const answerElement = getDomElementById('#answer')
const resultElement = getDomElementById('#result')
const scoreElement = getDomElementById('#score')
const checkBtn = getDomElementById('#checkBtn')
checkBtn.onclick = () => {
    const answer = getAnswer()
    checkAnswer(answer)
    generateTask()
}

play()

function play() {
    generateTask()
}

function generateTask() {
    a = generateNumber()
    b = generateNumber()
    op = generateOperation()
    taskElement.innerHTML = `${a} ${operations[op]} ${b} = `
}

function generateNumber() {
    return Math.floor(Math.random() * 11);
}

function generateOperation() {
    return Math.floor(Math.random() * 4)
}

function getAnswer() {
    return Number(answerElement.value);
}

function checkAnswer(answer) {
    let correctAnswer = getCorrectAnswer()
    if (Math.abs(answer - correctAnswer) < 0.001) {
        showResult(`Correct answer`)
        correctAnswers++
    } else {
        showResult(`Wrong answer. Correct: ${correctAnswer}`)
        wrongAnswers++
    }
    showScore()
}

function getCorrectAnswer() {
    switch (op) {
        case 0:
            return a + b
        case 1:
            return a - b
        case 2:
            return a * b
        case 3:
            return (a / b).toFixed(2)
        default:
            throw new Error('Unknown operation')
    }
}

function showResult(result) {
    resultElement.innerHTML = result
}

function showScore() {
    scoreElement.innerHTML = `Correct answers: ${correctAnswers}, wrong answers: ${wrongAnswers}`
}