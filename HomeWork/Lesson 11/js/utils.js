function formatWindSpeed(kphSpeed) {
    const mpsSpeed = kphSpeed / 3.6
    return new Intl.NumberFormat('uk-UA',
        {
            maximumSignificantDigits: 3,
            style: 'unit',
            unit: 'meter-per-second'
        }).format(mpsSpeed)
}

function formatHumidity(humidity) {
    return new Intl.NumberFormat('uk-UA',
        {
            style: 'unit',
            unit: 'percent'
        }).format(humidity)
}

function formatTemperature(tempC) {
    return new Intl.NumberFormat('uk-UA',
        {
            style: 'unit',
            unit: 'celsius'
        }).format(tempC)
}