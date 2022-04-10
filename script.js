let numberKeys = document.querySelectorAll(".data-number");
let operatorKeys = document.querySelectorAll(".data-operator");
let pointBtn = document.querySelector(".pointBtn");
let clearBtn = document.querySelector(".clearBtn");
let deleteBtn = document.querySelector(".deleteBtn");
let equalsBtn = document.querySelector(".equalsBtn");
let prevCalcScreen = document.querySelector("#prevCalc");
let currentCalcScreen = document.querySelector("#currentCalc");

numberKeys.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    alert(numberBtn.textContent);
  });
});

operatorKeys.forEach((numberBtn) => {
  numberBtn.addEventListener("click", () => {
    alert(numberBtn.textContent);
  });
});

pointBtn.addEventListener("click", () => alert(pointBtn.textContent));
deleteBtn.addEventListener("click", () => alert(deleteBtn.textContent));
clearBtn.addEventListener("click", () => alert(clearBtn.textContent));
equalsBtn.addEventListener("click", () => alert(equalsBtn.textContent));

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}
