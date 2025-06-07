// psuedo code generate button add event listener insert math.random
const display = document.querySelector("#display")
const generateRandom = document.querySelector("#generateBtn")

// function generateRandomNumber() {
//     generateRandom.addEventListener("click", () => {
//           const randomNumber = Math.floor(Math.random() * 100) + 1;
//             // Step 3b: Display it
//           display.textContent = randomNumber;

//     })
// }

// Step 2: Add event listener directly
generateRandom.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    display.textContent = randomNumber;
});