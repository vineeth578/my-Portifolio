// Initializing the count to the value inside the h3 element
let countEl = document.getElementById("count-el");
// let count = parseInt(countEl.textContent);
let count = 0
let saveEl = document.getElementById("previous")
console.log(saveEl)

// Function to increment the count
function increment() {
    count += 1; // Increase count by 1
    countEl.textContent = count; // Update the display
}

// Optional: save function if you want to implement some save functionality
function save() {
    let counter = count + " - "+" "
    saveEl.innerText += counter
    countEl.textContent = 0
    count=0
    console.log("Saved count: " + count);
}
