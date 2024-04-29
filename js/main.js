const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const multiplyButtons = document.querySelectorAll('.multiply');
const plusButtons = document.querySelectorAll('.plus');
const minusButtons = document.querySelectorAll('.minus');
const calculateButton = document.querySelector('.calculate');
const clearButton = document.querySelector('.clear');
const percentButton = document.querySelector('.percent');

let currentInput = '0';
let operator = '';
let previousInput = '';
let storedInputs = []; 


function updateDisplay() {
    display.value = currentInput;
}


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput === '0') {
            currentInput = '';
        }
        currentInput += button.textContent;
        updateDisplay();
    });
});


operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput !== '0') {
            storedInputs.push(currentInput);
        }
        operator = button.textContent;
        currentInput = '0';
        updateDisplay();
    });
});


multiplyButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput !== '0') {
            storedInputs.push(currentInput); 
        }
        operator = '*';
        currentInput = '0';
        updateDisplay();
    });
});

plusButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput !== '0') {
            storedInputs.push(currentInput);
        }
        operator = '+';
        currentInput = '0';
        updateDisplay();
    });
});


minusButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentInput !== '0') {
            storedInputs.push(currentInput); 
        }
        operator = '-';
        currentInput = '0';
        updateDisplay();
    });
});


percentButton.addEventListener('click', () => {
    currentInput = String(parseFloat(currentInput) / 100);
    updateDisplay();
});


calculateButton.addEventListener('click', () => {
    storedInputs.push(currentInput); 
    let expression = storedInputs.join(operator);
    currentInput = eval(expression); 
    storedInputs = []; 
    operator = '';
    updateDisplay();
});


clearButton.addEventListener('click', () => {
    currentInput = '0';
    operator = '';
    previousInput = '';
    storedInputs = []; 
    updateDisplay();
});


updateDisplay();