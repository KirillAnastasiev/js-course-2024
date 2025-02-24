"use strict"

const marks = [5, 18, 50, 90, 100, 36]
const avgMarkElement = getDomElementById('#avg_mark')
const maxMarkElement = getDomElementById('#max_mark')
const minMarkElement = getDomElementById('#min_mark')

for (let i = 0; i < 5; i++) {
    const newMark = getNumericValue('Введіть оцінку від 0 до 100')
    marks.push(newMark)
}

avgMarkElement.innerHTML = `Середня оцінка: ${averageMark(marks)}`
maxMarkElement.innerHTML = `Найвища оцінка: ${maxMark(marks)}`
minMarkElement.innerHTML = `Найнижча оцінка: ${minMark(marks)}`

function averageMark(marks) {
    return marks.reduce((prev, cur) => prev + cur, 0) / marks.length
}

function maxMark(marks) {
    return Math.max(...marks)
}

function minMark(marks) {
    return Math.min(...marks)
}