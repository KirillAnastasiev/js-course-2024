"use strict"

const data = {
    getWeather: async function(city) {
        // https://api.weatherapi.com/v1/current.json?key=5776c444d70144afa7e111054250303&q=Kyiv&aqi=no

        const paramsObj = {
            key: '5776c444d70144afa7e111054250303',
            aqi: 'no',
            lang: 'uk',
            q: city
        }
        const params = new URLSearchParams(paramsObj)
        const url = `https://api.weatherapi.com/v1/current.json?${params}`
        try {
            const resp = await fetch(url)
            if (!resp.ok) {
                throw new Error(`Response status: ${resp.status}`)
            }

            return resp.json()
        } catch (err) {
            console.log(err.message)
            return null
        }
    }
}