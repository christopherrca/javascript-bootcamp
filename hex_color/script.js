const hex = document.querySelector(".hex")
const btn = document.querySelector(".generate")

const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = "#" + randomColor;


}

btn.addEventListener("click", generateColor)