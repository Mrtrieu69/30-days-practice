const modal = document.querySelector(".modal")
const layout = document.querySelector(".layout")
const closeX = document.querySelector(".close")
const closeBtn = document.querySelector(".btn-close")
const openBtn = document.querySelector(".open")

function toggleModal(){
    modal.classList.toggle("hide")
}

openBtn.addEventListener("click", toggleModal)
layout.addEventListener("click", toggleModal)
closeBtn.addEventListener("click", toggleModal)
closeX.addEventListener("click", toggleModal)