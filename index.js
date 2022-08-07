const operationsDisplay = document.querySelector(".operations-display");
const buttons = document.querySelectorAll(".btn");
let state = "";

buttons.forEach((button) => {
  button.addEventListener(
    "click",
    () => (operationsDisplay.textContent += button.dataset.sign)
  );
});
