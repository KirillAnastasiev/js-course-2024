const validators = {}

validators.required = {
    isValid: function(element) {
        return element.value.trim().length > 0
    },
    errorMessage: 'Значення не може бути порожнім'
}

validators.pattern = {
    isValid: function(element) {
        const value = element.value
        const regex = new RegExp(element.dataset.pattern)
        return regex.test(value)
    },
    errorMessage: 'Значення не відповідає шаблону'
}

validators.noDuplicates = {
    isValid: function(element) {
        const property = element.name
        const value = element.value
        const isBookInList = data.getBooks().some(book => book[property] === value)
        return !isBookInList
    },
    errorMessage: 'Значення має бути унікальним'
}

validators.number = {
    isValid: function(element) {
        const value = element.value
        return  Number.isInteger(+value)
    },
    errorMessage: 'Значення має бути цілим числом'
}

validators.minValue = {
    isValid: function(element) {
        const minValue = +element.dataset.minValue
        const currentValue = +element.value
        return currentValue >= minValue
    },
    errorMessage: 'Значення менше за допустиме'
}

validators.maxValue = {
    isValid: function(element) {
        const maxValue = +element.dataset.maxValue
        const currentValue = +element.value
        return currentValue <= maxValue
    },
    errorMessage: 'Значення більше за допустиме'
}

validators.validate = function(element, errorMessage, validator) {
    const errorLabel = document.querySelector(`#${element.dataset.errorLabel}`)
    errorLabel.textContent = errorMessage

    element.classList.remove('valid')
    element.classList.remove('invalid')
    errorLabel.style.display = 'none'

    if (typeof validator === 'function' && validator(element)) {
        element.classList.add('valid')
        return true
    } else {
        element.classList.add('invalid')
        errorLabel.style.display = 'inline'
        return false
    }
}