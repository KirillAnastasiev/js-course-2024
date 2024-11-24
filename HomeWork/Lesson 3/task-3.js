"use strict"

const year = getNumericValue('Enter a year')
const messageDiv = getDomElementById('#message')
showResult(year, messageDiv)

function showResult(year, element) {
    if (isYearLeap(year)) {
        messageDiv.innerHTML = 'Year is leap'
    } else {
        messageDiv.innerHTML = 'Year isn\'t leap'
    }
}

function isYearLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}