const images = document.querySelectorAll(".item img")
const imageMain = document.querySelector(".main img")
const prevBtn = document.querySelector(".btn-prev")
const nextBtn = document.querySelector(".btn-next")

var imgActive = 0

images.forEach(img => {
    img.onclick = (e) => {
        if(e.target.closest("img")){
            document.querySelector(".item.active").classList.remove("active")
            e.target.parentElement.classList.add("active")
            imgActive = e.target.dataset.index
            var srcCurrent = e.target.src
            imageMain.src = srcCurrent
        }
    }
})

prevBtn.onclick = () => {
    imgActive-- 
    if(imgActive <= -1){
        imgActive = images.length - 1
    }
    showMainImage(imgActive)
}

nextBtn.onclick = () => {
    imgActive++
    if(imgActive >= images.length){
        imgActive = 0
    }
    showMainImage(imgActive)
}

function showMainImage(index){
    var imgActive = document.querySelector(`.item img[data-index="${index}"]`)
    imageMain.src = imgActive.src
    document.querySelector(".item.active").classList.remove("active")
    imgActive.parentElement.classList.add("active")
}