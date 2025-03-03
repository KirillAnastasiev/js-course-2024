"use strict"

const form = document.querySelector('#weather-form')
const cityNameInput = document.querySelector('#city-name')
const weatherContainer = document.querySelector('#city-weather')

form.addEventListener('submit', event => {
    event.preventDefault()

    const city = cityNameInput.value
    data.getWeather(city)
        .then(json => weather.render(weatherContainer, json))
})
