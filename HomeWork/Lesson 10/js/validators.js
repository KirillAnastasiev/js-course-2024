const validators = {}

validators.required = {
    isValid: function(element) {
        const required = element.dataset.required === 'true'
        if (!required) return true

        return element.value.trim().length > 0
    }
}

validators.pattern = {
    isValid: function(element) {
        const value = element.value
        const regex = new RegExp(element.dataset.pattern)
        return regex.test(value)
    }
}

validators.duplicales = {
    isValid: function(element) {
        const duplicatesAllowed = element.dataset.duplicatesAllowed === 'true'
        if (duplicatesAllowed) return true

        const property = element.name
        const value = element.value
        const isBookInList = data.getBooks().some(book => book[property] === value)
        return !isBookInList
    }
}

validators.minValue = {
    isValid: function(element) {
        const minValue = +element.dataset.minValue
        const currentValue = +element.value
        return currentValue >= minValue
    }
}

validators.maxValue = {
    isValid: function(element) {
        const maxValue = +element.dataset.maxValue
        const currentValue = +element.value
        return currentValue <= maxValue
    }
}