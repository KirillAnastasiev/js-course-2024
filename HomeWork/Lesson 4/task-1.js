let playersScore = 0
let computersScore = 0;

const figureInput = getDomElementById('#figureInput')
const playBtn = getDomElementById('#playBtn')
playBtn.onclick = () => play()


function play() {
    const computersFigure = getComputersFigure()
    const playersFigure = getPlayersFigure()
    const resultMessage = getWinnerMessage(playersFigure, computersFigure)

    showResult(resultMessage)
    showScore()
}

function getComputersFigure() {
    return Math.floor(Math.random() * 3)
}

function getPlayersFigure() {
    return parseInt(figureInput.value)
}

function getWinnerMessage(playersFigure, computersFigure) {
    const figures = ['stone', 'scissors', 'paper']

    if (isDraw(playersFigure, computersFigure)) {
        return `It's draw. Computer's figure was ${figures[computersFigure]}`
    } else if (isPlayerWinner(playersFigure, computersFigure)) {
        playersScore++
        return `You win. Computer's figure was ${figures[computersFigure]}`
    } else {
        computersScore++
        return `You lose. Computer's figure was ${figures[computersFigure]}`
    }
}

function isDraw(playersFigure, computersFigure) {
    return playersFigure === computersFigure
}

function isPlayerWinner(playersFigure, computersFigure) {
    if (playersFigure === 0) {
        return computersFigure === 1
    } else if (playersFigure === 1) {
        return computersFigure === 2
    } else if (playersFigure === 2) {
        return computersFigure === 0
    } else {
        throw new Error('Unknown figure\'s number')
    }
}

function showResult(message) {
    const resultElem = getDomElementById('#result')
    resultElem.innerHTML = message
}

function showScore() {
    const scoreElem = getDomElementById('#score')
    scoreElem.innerHTML = `Total score: player - ${playersScore}, computer - ${computersScore}`
}