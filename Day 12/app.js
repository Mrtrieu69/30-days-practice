const ranger = document.querySelector(".ranger")
const percent = document.querySelector(".percent")
const body = document.body
const title = document.querySelector(".title")

ranger.addEventListener("mousemove", (e) => {
    var percentEl = Math.round(e.layerX / 600 * 100)
    percent.style.width = `${percentEl}%`
    percent.innerHTML = `${percentEl}%`
    body.style.background = `rgba(0, 0, 0, ${percentEl/100})`
    title.style.color = `rgba(0, 0, 0, ${1 - percentEl/100})`
})