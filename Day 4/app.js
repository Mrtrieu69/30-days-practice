const closeBtn = document.querySelector(".close")
const nextBtn = document.querySelector(".btn-next")
const prevBtn = document.querySelector(".btn-prev")
const modal = document.querySelector(".modal")
const images = document.querySelectorAll(".image")
const imageModal = document.querySelector(".modal-image img")
var currentImg

function toggleModal(){
    modal.classList.toggle("hide")
}

images.forEach((image, index) => {
    image.addEventListener("click", (e)=>{
        toggleModal()
        const srcImg = e.target.src
        imageModal.src = srcImg
        currentImg = index
    })
})

closeBtn.addEventListener("click", toggleModal)


prevBtn.addEventListener("click", () => {
    currentImg--
    if(currentImg <= -1){
        currentImg = images.length - 1
    }
    show(currentImg)
})

nextBtn.addEventListener("click", () => {
    currentImg++
    if(currentImg >= images.length){
        currentImg = 0
    }
    show(currentImg)
})


function show(currentImg){
    const currentSrc = images[currentImg].querySelector("img").src
    imageModal.src = currentSrc
}
