const inputItem = document.querySelector(".input-item")
const eyes = document.querySelectorAll(".eyes")
const input = document.querySelector(".input-item input")
const lowerCase = document.querySelector(".lower-case")
const upperCase = document.querySelector(".upper-case")
const number = document.querySelector(".number")
const symbol = document.querySelector(".symbol")
const character = document.querySelector(".character")

eyes.forEach(eye => {
    eye.onclick = () => {
        inputItem.classList.toggle("active")
        
        input.type === "password" ? (input.type = "text") : (input.type = "password")
    }
})

input.oninput = (e) => {
    const value = e.target.value.trim();

    (/[a-z]/).test(value) ? 
        lowerCase.classList.add("valid") :
        lowerCase.classList.remove("valid");

    (/[A-Z]/).test(value) ? 
        upperCase.classList.add("valid") :
        upperCase.classList.remove("valid");

    (/\d/).test(value) ? 
        number.classList.add("valid") :
        number.classList.remove("valid");

    (/\W/).test(value) ? 
        symbol.classList.add("valid") :
        symbol.classList.remove("valid");

    value.length >= 8 ? 
        character.classList.add("valid") :
        character.classList.remove("valid");
}   

