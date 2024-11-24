"use strict"

const num = getNumericValue('Enter number')
const messageDiv = getDomElementById('#message')
showResult(num, messageDiv)

function isNumberEval(n) {
    return Math.abs(n % 2) === 0
}

function showResult(number, element) {
    if (isNumberEval(number)) {
        element.innerHTML = 'Number is eval'
    } else {
        element.innerHTML = 'Number is odd'
    }
}
