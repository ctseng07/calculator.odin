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
        // current.textContent = currentValue;
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
        // console.log(current);
    }
    // previous.textContent = `${previousValue} ${operator} ${currentValue} =`;
    // } if
    //     (current.textContent = previousValue);
    // operator = null

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
    // operator = '';
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
decimalBtn.addEventListener('click', () => {
    if (current.textContent.includes('.')) {
        return;

    } else current.textContent += '.';
});

decimalBtn.addEventListener('click', addDecimal);

function addDecimal() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
        current.textContent = currentValue;
    };
};

/* 1. have equal button stop after one click
    2. fix bug with decimal code and stop after one click
    3. figure out how to chain operators together
    4. find a way to have current value to continue or delete after equal button is pushed // equation sticks on new entry after equal button
/*

/* store current number into first operand;
then
if add is pressed
    then change operator choice to add
    etc
clear current number
update current number display

// */
// let previousValue = '';
// let currentValue = '';
// let operator = '';

// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// //query selectors//
// //screen display
// const previous = document.querySelector("#previous");
// const current = document.querySelector("#current");

// //buttons
// const numberBtns = document.querySelectorAll(".number");
// const operatorBtns = document.querySelectorAll(".operator");
// const clearBtn = document.querySelector("#clearBtn");
// const deleteBtn = document.querySelector("#deleteBtn");
// const decimalBtn = document.querySelector("#decimalBtn");
// const equalBtn = document.querySelector("#equalBtn");

// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// //button choices//

// numberBtns.forEach((number) =>
//     number.addEventListener('click', (e) => {
//         numSelection(e.target.textContent);
//         current.textContent = currentValue;
//     }));

// function numSelection(num) {
//     currentValue += num
// };


// operatorBtns.forEach((op) =>
//     op.addEventListener('click', (e) => {
//         operatorSelection(e.target.textContent)
//         previous.textContent = previousValue + ' ' + operator;
//         current.textContent = currentValue;
//     }));

// function operatorSelection(op) {
//     operator = op;
//     previousValue = currentValue;
//     currentValue = '';
// };

// equalBtn.addEventListener('click', () => {
//     if (currentValue != '' && previousValue != '') {
//         operate()
//     }
//     //     previous.textContent = '';
//     // } if (current.textContent = previousValue);
// });

// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// //functionality//

// function operate() {
//     previousValue = Number(previousValue); //used this to convert to a number
//     currentValue = Number(currentValue); //used this to convert to a number

//     if (operator === "+") {
//         previousValue += currentValue
//     } else if (operator === "-") {
//         previousValue -= currentValue
//     } else if (operator === "x") {
//         previousValue *= currentValue;
//     } else {
//         previousValue /= currentValue;
//     }
//     currentValue = roundNumber(previousValue);
//     previousValue = previousValue.toString();  //changing back into string
//     currentValue = previousValue.toString();  //changing back into string
//     displayResults();
// };

// function displayResults() {
//     if (previousValue.length <= 11) {
//         current.textContent = previousValue // allows equal button to stop after one click

//     } else {

//         current.textContent = previousValue.slice(0, 11) + "...";
//     }
//     previous.textContent = '';
//     // operator = '';
//     currentValue = ''; //executes the value after pressing equal
// };

// function roundNumber(num) {
//     return Math.random(num * 1000) / 1000;
// };

// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// //clear and delete//
// function clearDisplay() {
//     currentValue = '';
//     previousValue = '';
//     operator = '';
//     current.innerHTML = "";
//     previous.innerHTML = "";
// };

// clearBtn.addEventListener('click', clearDisplay);


// function backSpace() {
//     current.innerText = current.innerText.slice(0, -1);
// };

// deleteBtn.addEventListener('click', backSpace);
// /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////
// function addDecimal() {
//     if (!currentValue.includes(".")) {
//         currentValue += '.';
//         current.textContent = currentValue;
//     };
// };

// decimalBtn.addEventListener('click', () => {
//     addDecimal();
// });

/* 1. have equal button stop after one click
////    2. fix bug with decimal code and stop after one click //////
    3. figure out how to have entries continue when pushing multiple operators
    4. find a way to have current value to continue or delete after equal button is pushed // equation sticks on new entry after equal button
/*
/* store current number into first operand;
then
if add is pressed
    then change operator choice to add
    etc
clear current number
update current number display
*/


// let a = 1;
// let b = 2;

// function add(a, b) {
//     return a + b
// };

// function substract(a, b) {
//     return a - b
// };

// function multiply(a, b) {
//     return a * b
// };

// function divide(a, b) {
//     if (b == 0) {
//         return "-_-";
//     } else
//         return a / b
// };

// console.log(add(a, b));
// console.log(substract(a, b));
// console.log(multiply(a, b));
// console.log(divide(a, b));

// function operate(operator, a, b) {
//     a = Number(a);
//     b = Number(b);
//     switch (operator) {
//         case "+":
//             return add(a, b);
//         case "-":
//             return substract(a, b);
//         case "×":
//             return multiply(a, b);
//         case "÷":
//             return divide(a, b);
//         default:
//             return null

//     }
// }

// function operate(a, operator, b) {
//     if (operator === "+") {
//         return add(a, b);
//     } else if (operator === "-") {
//         return subtract(a, b);
//     } else if (operator === "x") {
//         return multiply(a, b);
//     } else {
//         return divide(a, b);
//     }
// };

// console.log(operate(a, '+', b));
// console.log(operate(a, "-" b));
// console.log(operate(a, 'x', b));
// console.log(operate(a, '/', b));