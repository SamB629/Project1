let currentOperand = '';
let previousOperand = '';
let operation = null;

// Updates the display with the current operand
function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentOperand || '0';
}

// Appends a number or decimal point to the current operand
function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return; // Prevent multiple dots
    currentOperand += number;
    updateDisplay();
}

// Chooses an operation (+, -, *, /) and moves the current operand to previousOperand
function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') calculate();
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

// Performs the calculation based on the operation
function calculate() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (isNaN(prev) || isNaN(current)) return; // Ignore if either operand is invalid

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentOperand = result.toString();
    operation = null;
    previousOperand = '';
    updateDisplay();
}

// Clears the current operand
function clearDisplay() {
    currentOperand = '';
    updateDisplay();
}

// Resets the entire calculator
function resetCalculator() {
    currentOperand = '';
    previousOperand = '';
    operation = null;
    updateDisplay();
}
