
const input = document.querySelector("input")
const search = document.querySelector(".search")


search.addEventListener("click", () => {
    input.classList.toggle("hide")
    input.focus()
})