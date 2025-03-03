"use strict"

const weather = {
    render(container, data) {
        container.innerHTML = ''
        if (data === null) {
            console.log('No data')
            return
        }

        const weatherData = document.createElement('div')
        weatherData.classList.add('weather-data')

        weatherData.insertAdjacentHTML('beforeend', `<p>Місто: ${data.location.name}, ${data.location.region}, ${data.location.country}</p>`)
        weatherData.insertAdjacentHTML('beforeend', `<p>Дата: ${data.location.localtime}</p>`)
        weatherData.insertAdjacentHTML('beforeend', `<p>Температура: ${formatTemperature(data.current.temp_c)}</p>`)
        weatherData.insertAdjacentHTML('beforeend', `<p>Вологість: ${formatHumidity(data.current.humidity)}</p>`)
        weatherData.insertAdjacentHTML('beforeend', `<p>Швидкість вітру: ${formatWindSpeed(data.current.wind_kph)}</p>`)
        weatherData.insertAdjacentHTML('beforeend', `<p>${data.current.condition.text}</p>`)

        container.appendChild(weatherData)
    }
}