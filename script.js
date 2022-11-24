let firstNum = "";
let secondNum = "";
let operatorChoice = undefined;
let clearScreen = false;

//query selectors
//screen display
const previous = document.querySelector("#previous");
const current = document.querySelector("#current");

//buttons
const numberBtns = document.querySelectorAll("#number");
const operatorBtns = document.querySelectorAll("#operator");
const clearBtn = document.querySelector("#clearBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const decimalBtn = document.querySelector("#decimalBtn");
const equalBtn = document.querySelector("#equalBtn");


numberBtns.forEach((button) =>
    button.addEventListener('click', () =>
        appendNumber(button.textContent))
);

operatorBtns.forEach((button) =>
    button.addEventListener('click', () =>
        appendNumber(button.textContent)

        /* store current number into first operand;
        then 
        if add is pressed
            then change operator choice to add
            etc
        clear current number 
        update current number display

        */
    )
);


function clearDisplay() {
    current.innerHTML = "";
    previous.innerHTML = "";
};

clearBtn.addEventListener('click', clearDisplay);

function backSpace() {
    current.innerText = current.innerText.slice(0, -1);
};

deleteBtn.addEventListener('click', backSpace);

function appendNumber(number) {
    if (current.textContent === '0' || clearScreen)
        updateDisplay();
    current.textContent += number
};

function updateDisplay() {
    current.innerText = '';
    clearScreen = false;
}


//operator functions
function add(a, b) {
    return a + b
};

function substract(a, b) {
    return a - b
};

function multiply(a, b) {
    return a * b
};

function divide(a, b) {
    if (b == 0) {
        return "-_-";
    } else
        return a / b
};

// decimalBtn.addEventListener('click', numChoice)

// function decimal(number) {
//     if (number === '.' && current.textContent.includes('.')) return
//     current = current.toString() + number.toString()
// }
