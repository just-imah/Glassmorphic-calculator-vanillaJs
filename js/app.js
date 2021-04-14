const resultField = document.getElementById('result')
const digits = document.getElementsByClassName('calculator-keys')
const operators = document.getElementsByClassName('operators')

const calcBtn = document.getElementById('equals')
const clearBtn = document.getElementById('clear')
const backspaceBtn = document.getElementById('backspace')
const percentBtn = document.getElementById('percent')

let firstValue, secondValue, clickedOperator
let clearState = false
let dotClicked = false

for (let i = 0; i <= digits.length - 1; i++) {
    const digit = digits[i]
    digit.addEventListener('click', (e) => {
        const value = e.target.dataset.number
        if (clearState) resultField.innerText = null;
        if (!resultField.innerText) dotClicked = false
        if (resultField.innerText === '0' && value === '0') return
        if (value === '.' && dotClicked) return
        if (value === '.') dotClicked = true
        writeToResultField(value)
    })
}

calcBtn.addEventListener('click', () => {
    calculate(true)
})

percentBtn.addEventListener('click', () => {
    resultField.innerText = resultField.innerText && parseFloat(resultField.innerText) / 100
})

backspaceBtn.addEventListener('click', () => {
    const value = resultField.innerText
    resultField.innerText = value.slice(0, -1)
})

clearBtn.addEventListener('click', () => {
    secondValue = null;
    firstValue = null;
    clickedOperator = null;
    clearState = true
    resultField.innerText = null
})

for (let i = 0; i <= operators.length - 1; i++) {
    const operator = operators[i]
    operator.addEventListener('click', (e) => {
        if (firstValue && clickedOperator) calculate()
        firstValue = resultField.innerText
        clickedOperator = e.target.dataset.action
        clearState = true
    })
}

function writeToResultField(val) {
    const oldValue = resultField.innerText
    const newValue = oldValue + val
    const firstChar = newValue.charAt(0)
    resultField.innerText = firstChar === '0' ? newValue.substring(1) : newValue
    clearState = false
    if (firstValue) secondValue = resultField.innerText;
}

function calculate(equals = false) {
    let result
    // if (operator === '+') result = first + second
    // if (operator === '-') result = first - second
    // if (operator === '*') result = first * second
    // if (operator === '/') result = first / second
    switch(clickedOperator) {
        case '+':
            result = parseFloat(firstValue) + parseFloat(secondValue)
            break;
        case '-':
            result = firstValue - secondValue
            break;
        case '*':
            result = firstValue * secondValue
            break;
        case '/':
            result = firstValue / secondValue
            break;
    }

    if (secondValue && firstValue) resultField.innerText = result; secondValue = undefined

    if (equals) secondValue = null; firstValue = null; clickedOperator = null; clearState = true

}