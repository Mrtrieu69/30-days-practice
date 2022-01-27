const btns = document.querySelectorAll(".btn")

btns.forEach(btn => {
    btn.onclick = (e) => {
        const value = e.target.textContent
        const audio = document.querySelector(`audio[data-key='${value}']`)
        playAudio(audio)
    }
})

document.onkeydown = (e) => {
    const key = e.key.toUpperCase()
    const audio = document.querySelector(`audio[data-key='${key}']`)
    playAudio(audio)
}

function playAudio(audio){
    audio.currentTime = 0
    audio.play()
}