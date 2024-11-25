(function () {
    const messageElement = getDomElementById('#message')

    const yourWeight = getNumericValue('Enter your weight in kg')
    const yourHeight = getNumericValue('Enter your height in m')
    const imt = (weight, height) => weight / (height ** 2)

    const computeIMT = () => imt(yourWeight, yourHeight)
    const getCategory = () => {
        const yourIMT = computeIMT()
        if (yourIMT < 18.5) {
            return 'Less weight'
        } else if (yourIMT >= 18.5 && yourIMT < 25) {
            return 'Normal weight'
        } else if (yourIMT >= 25 && yourIMT < 30) {
            return 'Overweight'
        } else {
            return 'Obesity'
        }
    }

    messageElement.innerHTML = getCategory()
})()



