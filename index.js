const operationsDisplay = document.querySelector(".operations-display");
const buttons = document.querySelectorAll(".btn");
const equals = document.querySelector(".equals");
let state = "";

const add = (...nums) => [...nums].reduce((acum, curr) => (acum += curr));

const subtract = (...nums) => [...nums].reduce((acum, curr) => (acum -= curr));

const multiply = (...nums) => [...nums].reduce((acum, curr) => (acum *= curr));

const divide = (...nums) => [...nums].reduce((acum, curr) => (acum /= curr));

const operate = (str) => {
  const operationArr = str.split(" ");
  console.log(operationArr);

  switch (operationArr[1]) {
    case "+":
      return add(parseInt(operationArr[0]), parseInt(operationArr[2]));

    case "-":
      return subtract(parseInt(operationArr[0]), parseInt(operationArr[2]));

    case "*":
      return multiply(parseInt(operationArr[0]), parseInt(operationArr[2]));

    case "/":
      return divide(parseInt(operationArr[0]), parseInt(operationArr[2]));
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    state += button.dataset.sign;
    operationsDisplay.textContent = state;
  });
});

equals.addEventListener("click", () => {
  state = JSON.stringify(operate(state));
  operationsDisplay.textContent = state;
});
