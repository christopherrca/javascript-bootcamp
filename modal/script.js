

const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn")
const close = document.querySelector(".close")



btn.addEventListener("click", openModal)
close.addEventListener("click", closeModal)

function openModal(e) {
  e.preventDefault()
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none"
}