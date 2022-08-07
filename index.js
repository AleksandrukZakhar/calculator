const operationsDisplay = document.querySelector(".operations-display");
const buttons = document.querySelectorAll(".btn");
const equals = document.querySelector(".equals");
const deleteBtn = document.querySelector(".delete");
const clear = document.querySelector(".clear");

let state = "";
let operationsCount = 0;

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
    switch (button.dataset.sign) {
      case " + ":
      case " - ":
      case " * ":
      case " / ":
        operationsCount += 1;
        break;
    }

    switch (operationsCount) {
      case 2:
        operationsCount -= 1;
        state = JSON.stringify(operate(state)) + button.dataset.sign;
        operationsDisplay.textContent = state;
        break;

      default:
        state += button.dataset.sign;
        operationsDisplay.textContent = state;
    }
  });
});

equals.addEventListener("click", () => {
  state = JSON.stringify(operate(state));
  operationsDisplay.textContent = state;
});

deleteBtn.addEventListener("click", () => {
  const stateArr = state.split("");
  stateArr.pop();
  state = stateArr.join("");
  operationsDisplay.textContent = state;
});

clear.addEventListener("click", () => {
  state = "";
  operationsDisplay.textContent = state;
});
