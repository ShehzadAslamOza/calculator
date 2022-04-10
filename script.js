let firstNumber = "";
let secondNumber = "";
let operator = "";

let numberKeys = document.querySelectorAll(".data-number");
let operatorKeys = document.querySelectorAll(".data-operator");
let pointBtn = document.querySelector(".pointBtn");
let clearBtn = document.querySelector(".clearBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let equalsBtn = document.querySelector(".equalsBtn");
let prevCalcScreen = document.querySelector("#prevCalc");
let currentCalcScreen = document.querySelector("#currentCalc");

// Event Listners
numberKeys.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    handleNumber(numberBtn.textContent);
  });
});

operatorKeys.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    handleOperator(operatorBtn.textContent);
  });
});

pointBtn.addEventListener("click", () => handlePoint());
deleteBtn.addEventListener("click", () => deleteNum());
clearBtn.addEventListener("click", () => clear());
equalsBtn.addEventListener("click", () => equals());

// Functions
function handleOperator(operation) {
  if (secondNumber == "") {
    operator = operation;
    prevCalcScreen.textContent = firstNumber + " " + operator;
  } else {
    //prevCalcScreen.textContent = firstNumber + " " + operation;
    let ans = operate(operator, firstNumber, secondNumber);
    prevCalcScreen.textContent = answer + " " + operation;
    currentCalcScreen.textContent = answer;
    firstNumber = answer;
    secondNumber = "";
    operator = operation;
  }
}

function equals() {
  if (operator != "" && firstNumber != "" && secondNumber != "") {
    let answer = operate(operator, firstNumber, secondNumber);
    prevCalcScreen.textContent =
      firstNumber + " " + operator + " " + secondNumber + "=";
    currentCalcScreen.textContent = answer;
    firstNumber = answer;
    secondNumber = "";
  }
}

function operate(operation, a, b) {
  answer = "";

  switch (operation) {
    case "+":
      answer = add(a, b);
      break;
    case "-":
      answer = subtract(a, b);
      break;
    case "x":
      answer = multiply(a, b);
      break;
    case "÷":
      answer = divide(a, b);
      break;
  }

  return answer;
}

function handleNumber(num) {
  console.log(num);
  if (operator == "") {
    firstNumber = firstNumber + num;
    currentCalcScreen.textContent = firstNumber;
  } else {
    secondNumber = secondNumber + num;
    currentCalcScreen.textContent = secondNumber;
  }
}

function handlePoint() {
  if (operator == "") {
    if (firstNumber == "") {
      firstNumber = "0.";
    } else {
      if (!firstNumber.includes(".")) {
        firstNumber = firstNumber + ".";
      }
    }

    currentCalcScreen.textContent = firstNumber;
  } else {
    if (secondNumber == "") {
      secondNumber = "0.";
    } else {
      if (!secondNumber.includes(".")) {
        secondNumber = secondNumber + ".";
      }
    }
    currentCalcScreen.textContent = secondNumber;
  }
}

function clear() {
  prevCalcScreen.textContent = "";
  currentCalcScreen.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
}

function deleteNum() {
  if (operator == "") {
    firstNumber = firstNumber.slice(0, firstNumber.length - 1);
    currentCalcScreen.textContent = firstNumber;
  } else {
    secondNumber = secondNumber.slice(0, secondNumber.length - 1);
    currentCalcScreen.textContent = secondNumber;
  }
}

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function divide(a, b) {
  if (parseFloat(b) == 0) {
    alert("You cant divide by Zero");
    return;
  }

  let ans = parseFloat(a) / parseFloat(b) + "";

  if (ans.includes(".")) {
    return parseFloat(ans).toFixed(2);
  }

  return ans;
}
