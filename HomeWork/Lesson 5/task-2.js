const messageElement = getDomElementById('#message')

const circlePerimeter = r => 2 * Math.PI * r
const circleArea = r => r ** 2 * Math.PI
const rectanglePerimeter = (a, b) => 2 * (a + b)
const rectangleArea = (a, b) => a * b
const trianglePerimeter = (a, b, c) => a + b + c
const triangleArea = (a, b, c) => {
    const p = trianglePerimeter(a, b, c) / 2
    return Math.sqrt(p * (p - a) * (p - b) * (p - c))
}

run()


function run() {
    const figure = getFigureType()
    const resultMessage = computeFigureResult(figure)
    showResult(resultMessage)
}

function getFigureType() {
    const figures = ['circle', 'rectangle', 'triangle']
    let figureNumber = null
    do {
        figureNumber = getNumericValue('Enter figure type: 0 - circle, 1 - rectangle, 2 - triangle')
    } while (figureNumber !== 0 && figureNumber !== 1 && figureNumber !== 2)
    return figures[figureNumber]
}

function computeFigureResult(figure) {
    let perimeterFunc
    let areaFunc

    switch (figure) {
        case 'circle': {
            const r = getNumericValue('r = ')
            perimeterFunc = () => circlePerimeter(r)
            areaFunc = () => circleArea(r)
            break;
        }
        case 'rectangle': {
            const a = getNumericValue('a = ')
            const b = getNumericValue('b = ')
            perimeterFunc = () => rectanglePerimeter(a, b)
            areaFunc = () => rectangleArea(a, b)
            break;
        }
        case 'triangle': {
            const a = getNumericValue('a = ')
            const b = getNumericValue('b = ')
            const c = getNumericValue('c = ')
            perimeterFunc = () => trianglePerimeter(a, b, c)
            areaFunc = () => triangleArea(a, b, c)
            break;
        }
        default:
            throw new Error('Unknown figure')
    }
    return getResultMessage(perimeterFunc, areaFunc)
}

function getResultMessage(perimeterFunc, areaFunc) {
    return `P = ${perimeterFunc().toFixed(2)}, S = ${areaFunc().toFixed(2)}`
}

function showResult(message) {
    messageElement.innerHTML = message
}

