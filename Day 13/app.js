const container = document.querySelector(".container")
const input = document.querySelector(".container input")

container.onclick = () => {
    input.click()
}

input.onchange = (e) => {
    if(document.querySelector("img")){
        document.querySelector("img").remove()
    }
    var img = document.createElement("img")
    var file = e.target.files[0]
    img.src = URL.createObjectURL(file)
    container.appendChild(img)
}