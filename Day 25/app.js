const video = document.querySelector(".video")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const progress = document.querySelector("#progress")
const volume = document.querySelector("#volume")
const toggle = document.querySelector(".toggle")
const currentTimeEl = document.querySelector(".current-time")

var isPlay = false

toggle.onclick = () => handlePlay()
video.onclick = () => handlePlay()
nextBtn.onclick = () => next()
prevBtn.onclick = () => prev()

video.volume = volume.value / 100

function handlePlay(){
    if(isPlay){
        video.pause()
    }else{
        video.play()
    }
}
function next(){
    video.currentTime += 10
}

function prev(){
    video.currentTime -= 10
}

function renderTime(currentTime){
    const currentValue = currentTime < 10 ? `00:0${currentTime}`: `00:${currentTime}`
    currentTimeEl.innerHTML = currentValue
}

video.onplay = () => {
    isPlay = true
    toggle.classList.add("play")
}

video.onpause = () => {
    isPlay = false
    toggle.classList.remove("play")
}

video.ontimeupdate = () => {
    const durationTime = video.duration
    const currentTime = video.currentTime
    const progressValue = Math.ceil((currentTime / durationTime) * 100)
    progress.value = progressValue
    renderTime(Math.ceil(currentTime))
}

progress.oninput = (e) => {
    const currentValue = e.target.value
    video.currentTime = (currentValue / 100 * video.duration)
}

volume.oninput = (e) => {
    const currentValue = e.target.value
    video.volume = currentValue / 100
}