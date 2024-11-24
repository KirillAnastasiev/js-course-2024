
const dayOfWeek = getCurrentDayOfWeek()
const divMessage = getDomElementById("#message")
showResult(dayOfWeek, divMessage)

function getCurrentDayOfWeek() {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return weekDays[new Date().getDay()]
}

function showResult(dayOfWeek, element) {
    divMessage.innerHTML = dayOfWeek
}
