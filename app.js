const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    //console.log(buttonsEl[i].textContent); we get all buttons
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value); //eval - js method ,evaluates the expression and give the results
}

function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue; //the value added in te input field will be added to the new value added in the input
  //same as : inputFieldEl.value = inputFieldEl.value + buttonValue
}
