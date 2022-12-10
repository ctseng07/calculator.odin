let previousValue = '';
let currentValue = '';
let operator = null;

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//query selectors//
//screen display
const previous = document.querySelector("#previous");
const current = document.querySelector("#current");

//buttons
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const clearBtn = document.querySelector("#clearBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const decimalBtn = document.querySelector("#decimalBtn");
const equalBtn = document.querySelector("#equalBtn");

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//button choices//

numberBtns.forEach((number) =>
    number.addEventListener('click', (e) => {
        numSelection(e.target.textContent);
        current.textContent = currentValue;
    }));

function numSelection(num) {
    if (previousValue !== '' && currentValue !== "" && operator === "") {
        previousValue = "";
        current.textContent = currentValue;
    }
    if (currentValue.length <= 11) {
        currentValue += num;
        current.textContent = currentValue;
    };
};


operatorBtns.forEach((op) => {
    op.addEventListener('click', (e) => {
        handleOperator(e.target.textContent)
        previous.textContent = previousValue + ' ' + operator;
        current.textContent = currentValue;
    });
});

function handleOperator(op) {
    if (previousValue === '') {
        previousValue = currentValue;
        operatorSelection(op);
    } else {
        operate();
        operator = op;
        current.textContent = '0';
        previous.textContent = previousValue + ' ' + operator;
    }
}

function operatorSelection(test) {
    operator = test;
    previous.textContent = previousValue + ' ' + operator;
    current.textContent = '0';
    currentValue = '';

}
equalBtn.addEventListener('click', () => {
    if (currentValue !== '' && previousValue !== '') {
        operate()
    }
});

// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// //functionality//

function operate() {
    previousValue = Number(previousValue); //used this to convert to a number
    currentValue = Number(currentValue); //used this to convert to a number

    if (operator === "+") {
        previousValue += currentValue
    } else if (operator === "-") {
        previousValue -= currentValue
    } else if (operator === "x") {
        previousValue *= currentValue;
    } else if (operator === "÷") {
        if (currentValue <= 0) {
            previousValue = "Error";

            return;
        }
        previousValue /= currentValue;
    }
    currentValue = roundNumber(previousValue);
    previousValue = previousValue.toString();  //changing back into string
    currentValue = previousValue.toString();  //changing back into string
    displayResults();
};

function roundNumber(num) {
    return Math.random(num * 100000) / 100000;
};

function displayResults() {
    if (previousValue.length <= 11) {
        current.textContent = previousValue // allows equal button to stop after one click

    } else {

        current.textContent = previousValue.slice(0, 11) + "...";
    }
    previous.textContent = '';
    operator = '';
    currentValue = ''; //executes the value after pressing equal
};

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
//clear and delete//

function clearDisplay() {
    currentValue = '';
    previousValue = '';
    operator = null;
    current.innerHTML = "";
    previous.innerHTML = "";
};

clearBtn.addEventListener('click', clearDisplay);

function backSpace() {
    current.innerText = current.innerText.slice(0, -1);
};

deleteBtn.addEventListener('click', backSpace);

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
decimalBtn.addEventListener('click', addDecimal);

function addDecimal() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
        current.textContent = currentValue;
    };
    console.log(currentValue);
};