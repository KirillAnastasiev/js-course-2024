"use strict"

const purchases = []
const purchasesElement = getDomElementById('#purchases')
let stop = false

while (!stop) {
    const action = prompt('Оберіть дію: 1 - додати товар, 2 - видалити товар, 3 - відобразити список товарів')
    let purchase

    switch (action) {
        case '1':
            purchase = prompt('Введіть назву товару')
            addPurchase(purchase)
            break
        case '2':
            purchase = prompt('Введіть назву товару')
            removePurchase(purchase)
            break
        case '3':
            showPurchases()
            break
        default:
            stop = true
    }
}

function addPurchase(purchase) {
    purchases.push(purchase)
}

function removePurchase(purchase) {
    const idx = purchases.indexOf(purchase)
    if (idx !== -1) {
        purchases.splice(idx, 1)
    }
}

function showPurchases() {
    purchasesElement.innerHTML = purchases
}