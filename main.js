const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  operator: null,
};

function updateDisplay() {
  // select the element with class of `calculator-screen`
  const display = document.querySelector(".calculator-screen");
  // update the value of the element with the contents of `displayValue`
  display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
  // Access the clicked element
  const { target } = event;

  // Check if the clicked element is a button.
  // If not, exit from the function
  if (!target.matches("button")) {
    return;
  }

  if (target.classList.contains("operator")) {
    // console.log("operator", target.value);
      handleOperator(target.value);
      updateDisplay();

    return;
  }

  if (target.classList.contains("decimal")) {
    // console.log("decimal", target.value);
      inputDecimal(target.value);
      updateDisplay();
    return;
  }

  if (target.classList.contains("all-clear")) {
    // console.log("clear", target.value);
      resetCalculator();
      updateDisplay();
    return;
  }

//   console.log("digit", target.value);
    inputDigit(target.value);
    updateDisplay();
});

// display digits
function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
    if (waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        // Overwrite `displayValue` if the current value is '0' otherwise append to it
        calculator.displayValue =
            displayValue === "0" ? digit : displayValue + digit;
    }
  console.log(calculator)
}

// display decimal
function inputDecimal(dot) {
    if (calculator.waitingForSecondOperand === true) {
      calculator.displayValue = "0.";
      calculator.waitingForSecondOperand = false;
      return;
    }
    // if the 'displayValue' doesn't cony=tain a decimal point
    if(!calculator.displayValue.includes(dot)) {
        // append the decimal point
        calculator.displayValue += dot;
    }
}

// handle Operators
function handleOperator(nextOperator) {
  // Destructure the properties on the calculator object
  const { firstOperand, displayValue, operator } = calculator;
  // `parseFloat` converts the string contents of `displayValue`
  // to a floating-point number
    const inputValue = parseFloat(displayValue);
    
     if (operator && calculator.waitingForSecondOperand) {
       calculator.operator = nextOperator;
       console.log(calculator);
       return;
     }

  // verify that `firstOperand` is null and that the `inputValue`
  // is not a `NaN` value
  if (firstOperand === null && !isNaN(inputValue)) {
    // Update the firstOperand property
    calculator.firstOperand = inputValue;
  } else if (operator) {
    const result = calculate(firstOperand, inputValue, operator);

    calculator.displayValue = String(result);
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator)
}

// when operatoe and second operand is clicked calculate
function calculate(firstOperand, secondOperand, operator) {
  if (operator === "+") {
    return firstOperand + secondOperand;
  } else if (operator === "-") {
    return firstOperand - secondOperand;
  } else if (operator === "*") {
    return firstOperand * secondOperand;
  } else if (operator === "/") {
    return firstOperand / secondOperand;
  }

  return secondOperand;
}
// reset calculator: allclear function  
function resetCalculator() {
  calculator.displayValue = "0";
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
  console.log(calculator);
}
