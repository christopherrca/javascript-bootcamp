// psuedo code generate button add event listener insert math.random
const display = document.querySelector("#display")
const generateRandom = document.querySelector("#generateBtn")
const resetBtn = document.querySelector("#resetBtn");


// Step 2: Add event listener directly
generateRandom.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    display.textContent = randomNumber;
});


resetBtn.addEventListener("click",() => {
    display.textContent = 0;
})