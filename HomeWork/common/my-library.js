"use strict"

function getNumericValue(message) {
    let val = null
    do {
        val = prompt(message)
    } while (isNaN(+val) || val === '' || val == null)
    return Number(val)
}

function getDomElementById(id) {
    return document.querySelector(id)
}

