const container = document.querySelector(".container")
const SQUARE = 200


for(let i = 0; i < SQUARE; i++){
    const square = document.createElement("div")
    square.classList.add("square")
    square.addEventListener("mouseover", (e) => {
        const ranColor = getRandomColor()
        e.target.style.background = `${ranColor}`
        e.target.style.boxShadow = `0 0 10px ${ranColor}`
    })

    square.addEventListener("mouseleave", (e) => {
        e.target.style.background = `rgb(29, 29, 29)`
        e.target.style.boxShadow = `0 0 10px rgba(0,0,0,0.5)`
    })
    container.append(square)
}


function getRandomColor(){
    let str = "0123456789abcdef"
    let color = "#"
    
    for (let i = 0; i < 6; i++) {
        let ranNumber = Math.floor(Math.random() * str.length)
        color += str[ranNumber]
    }
    return color
}
