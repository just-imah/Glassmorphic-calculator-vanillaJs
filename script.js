const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};
// console.log(calculator)

// update display
function updateDisplay() {
    // select the element with id of the working screen
    const display = document.getElementById('working-screen')
    // update the value of the element with the content of displayValue
    display.value = calculator.displayValue;
}
updateDisplay()

// handling the presses
const keys = document.querySelector('.calculator-keys');
keys.addEventListener("click", (event) => {
    const { target } = event;

    if (!target.matches('buttton')) {
        return;
    }
    if (!target.classList.contains('operator')) {
        console.log('operator', target.value)
    }
    //console.log('keys')
})












// let buttons = document.querySelectorAll('.btn');
// let screen = document.getElementById("working-screen");
// let clear = document.getElementById("clear");
// let remove = document.getElementById("backspace")
// let add = document.getElementById("plus")
// let equals = document.getElementById("data-equals")

// buttons.forEach(el => {
//     el.addEventListener("click", (e) => {
       
//         // console.log('button', e.target.id)
//         screen.innerHTML += e.target.id;
//         // console.log(buttons.length)
//         if (e.target.id.includes('.')) {
//         //    return = true
//          }
//     });
// }) 
// clear.addEventListener("click", (e) => {
//     screen.innerHTML = '';
// })

// remove.addEventListener("click", (e) => {
//     screen.innerHTML = e.target.id.slice(0, -1)
// })











// remove.addEventListener("click", (e) => {
//     // screen.innerHTML.slice(0, -1)
//     // console.log(screen.value)
//     //  screen.innerHTML = id.value.slice(0, -1);
//     // remove = documeent.buttons.value.slice(0, length-1);
//     // screen.innerHTML = remove;
//     screen.innerHTML = e.target.id.slice(0, -1)
// })





// const calculator = {
//     screenValue: '0',
//     firstOperand : null,
//     operator: null,
//     waitingForSecondOperand: false
// };

// function handleOperator(nextOperator) {
//     let { firstOperand, screenValue, operator } = calculator
//     let inputValue = parseFloat(screenValue);

//     if (operator && calculator.waitingForSecondOperand) {
//         calculator.operator = nextOperator;
//         console.log(calculator);
//         return;
//     }
// }
