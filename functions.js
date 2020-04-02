const buttons = document.querySelectorAll('.btn-number, .btn-operator');
const equalsButton = document.querySelector('.btn-equals');
const display = document.querySelector('.display');
const clearButton = document.querySelector('.btn-clear');

// Testing for empty NodeList module from query selector
// console.log(buttons);

let displayData = "";

// console.log("Am I here");

buttons.forEach(button => {
    button.addEventListener('click', () => { 
        const buttonValue = button.getAttribute('data-num');
        displayData += buttonValue;
        display.textContent = displayData;
    })
})

equalsButton.addEventListener('click', () => { 
    displayData=eval(displayData)
    display.textContent = displayData
})

clearButton.addEventListener('click', () => { 
  displayData = "";
  display.textContent = displayData;
})
