const boxs = document.querySelectorAll(".box")
const img = document.querySelector("img")

img.addEventListener("dragstart", (e) => {
    setTimeout(() => e.target.classList.add("hide"), 0)
    
})

img.addEventListener("dragend", (e) => {
    e.target.classList.remove("hide")
    
})

boxs.forEach(box => {
    box.addEventListener("dragenter", (e) => {
        box.classList.add("active")
    })
    box.addEventListener("dragleave", (e) => {
        box.classList.remove("active")
    })
    box.addEventListener("drop", (e) => {
        box.append(img)
        box.classList.remove("active")
    })
    box.addEventListener("dragover", (e) => {
        e.preventDefault()
    })
})