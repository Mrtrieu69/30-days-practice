const toggle = document.querySelector(".toggle")
const body = document.body

toggle.addEventListener("click", () => {
    body.classList.toggle("dark")
})
