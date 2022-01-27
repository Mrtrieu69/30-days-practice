const box = document.querySelector(".box")
const key = document.querySelector("#key")
const locationEl = document.querySelector("#location")
const which = document.querySelector("#which")
const code = document.querySelector("#code")
const layout = document.querySelector(".layout")

document.addEventListener("keydown", (e) => {
    
    box.innerHTML = e.keyCode
    if(e.code == "Space"){
        key.innerHTML = "Space"
    }else{
        key.innerHTML = e.key
    }
    locationEl.innerHTML = e.location
    which.innerHTML = e.which
    code.innerHTML = e.code
    layout.classList.add("hide")
})