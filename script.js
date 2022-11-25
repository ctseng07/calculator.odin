let previousValue = '';
let currentValue = '';
let operator = '';

//query selectors
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



numberBtns.forEach((number) =>
    number.addEventListener('click', function (e) {
        numSelection(e.target.textContent);
        current.textContent = currentValue;
    }));

operatorBtns.forEach((op) =>
    op.addEventListener('click', function (e) {
        operatorSelection(e.target.textContent)
        previous.textContent = previousValue + ' ' + operator;
        current.textContent = currentValue;
    }));

equalBtn.addEventListener('click', function () {
    if (currentValue != '' && previousValue != '') {
        operate()
        previous.textContent = '';
    } if (current.textContent = previousValue);
    console.log(equalBtn);
});


function numSelection(num) {
    currentValue += num
};

function operatorSelection(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
};

decimalBtn.addEventListener('click', addDecimal);

// decimalBtn.addEventListener('click', function () {
//     addDecimal();
// });

clearBtn.addEventListener('click', clearDisplay);

function clearDisplay() {
    currentValue = '';
    previousValue = '';
    operator = '';
    current.innerHTML = "";
    previous.innerHTML = "";
};

function backSpace() {
    current.innerText = current.innerText.slice(0, -1);
};

deleteBtn.addEventListener('click', backSpace);

// if (equalBtn == true) {
// } else {
//     operator == "";
// }

function operate() {
    previousValue = Number(previousValue); //used this to convert to a number
    currentValue = Number(currentValue); //used this to convert to a number

    if (operator === "+") {
        previousValue += currentValue
        // add();
    } else if (operator === "-") {
        previousValue -= currentValue
        // substract();
    } else if (operator === "x") {
        previousValue *= currentValue;
        // multiply();
    } else {
        previousValue /= currentValue;
        //     // divide()
        // } else {
        //     return null
    }
    // previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();  //changing back into string
    currentValue = previousValue.toString();  //changing back into string
};

function roundNumber(num) {
    return Math.random(num * 1000) / 1000;
};

function addDecimal() {
    if (current.textContent.includes('.')) return
    currentValue.textContent += '.';
}

// function addDecimal() {
//     if (!currentValue.includes('.')) {
//         currentValue += '.';
//     }
// }



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
// if (equalBtn == true) {
// } else {
//     operator == "";
// }


// // //operator functions
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

// decimalBtn.addEventListener('click', numChoice)

// function decimal(number) {
//     if (number === '.' && current.textContent.includes('.')) return
//     current = current.toString() + number.toString()
// }


/* store current number into first operand;
then
if add is pressed
    then change operator choice to add
    etc
clear current number
update current number display

*/