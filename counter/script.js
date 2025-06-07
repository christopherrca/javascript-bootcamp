const count = document.querySelector(".count");
const add = document.querySelector(".add");
const reset = document.querySelector(".reset");
const subtract = document.querySelector(".subtract");


add.addEventListener("click", () => {
    count.innerHTML++;
    setColor();
})

subtract.addEventListener("click", () => {
    count.innerHTML--;
    setColor();
})

reset.addEventListener("click", () => {
    count.innerHTML = 0;
    setColor();
})


function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "green"
    } else if (count.innerHTML < 0) {
        count.style.color = "red"
    } else {
        count.style.color = "grey"
    }   
}