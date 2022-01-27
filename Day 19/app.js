const input = document.querySelector(".box input")
const plus = document.querySelector(".box.plus")
const minus = document.querySelector(".box.minus")
const valueSize = document.querySelector(".box.value")
const eraser = document.querySelector(".box.eraser")
const clear = document.querySelector(".box.clear")
const downLoad = document.querySelector(".box.download")
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

var color = "#000"
var size = parseInt(valueSize.textContent)

downLoad.addEventListener("click", (e) => {
    const imageURI = canvas.toDataURL('image/png')
	if(!e.target.closest("i")){
        e.target.href = imageURI
    }else{
        e.target.parentElement.href = imageURI
    }
})

clear.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

minus.addEventListener("click", () => {
    if(size > 5){
        size -= 5
        valueSize.innerText = size
    }
})

plus.addEventListener("click", () => {
    if(size < 30){
        size += 5
        valueSize.innerText = size
    }
})

eraser.addEventListener("click", () => {
    color = "#ffffff"
})

input.onchange = (e) => {
    color = e.target.value
}

// Canvas draw
var isMouseDown = false
let x, y
canvas.addEventListener("mousedown", (e) =>{
    isMouseDown = true
    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener("mousemove", (e) =>{
    if(isMouseDown){
        const { offsetX: x2, offsetY: y2 } = e
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2 
        y = y2
    }
})

canvas.addEventListener("mouseup", () => {
    isMouseDown = false

    x = undefined
    y = undefined
})

function drawCircle(x, y){
    ctx.beginPath()
	ctx.arc(x, y, size, 0, Math.PI * 2)
	ctx.fillStyle = color
	ctx.fill()
}

function drawLine(x, y, x2, y2){
    ctx.beginPath()
	ctx.moveTo(x, y)
	ctx.lineTo(x2, y2)
	ctx.strokeStyle = color
	ctx.lineWidth = size * 2
	ctx.stroke()
}
