let display = document.getElementById('display');

// Append numbers to the display
function appendNumber(number) {
    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

// Append operators to the display
function appendOperator(operator) {
    display.value += operator;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value); // Use eval for simple operations
    } catch (error) {
        display.value = "Error";
    }
}
