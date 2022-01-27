const images = document.querySelectorAll(".image")
const result = document.querySelector(".result")
const container = document.querySelector(".container")

images.forEach(image => {
    image.addEventListener("mousemove", (e) => {
        result.classList.remove("hide")

        // Link image
        let link = e.target.src

        // Position background
        let { offsetX, offsetY } = e
        let { clientWidth, clientHeight } = e.target
        let x = (offsetX / clientWidth) * 100
        let y = (offsetY / clientHeight) * 100

        // Position result
        let { pageX, pageY } = e
        let { offsetLeft, offsetTop } = container
        let posX = pageX - offsetLeft
        let posY = pageY - offsetTop

        // Set css result
        result.style.cssText = `
            top: ${posY}px;
            left: ${posX}px;
            background-image: url("${link}");
            background-position: ${x}% ${y}%;
        `
    })

    image.addEventListener("mouseleave", (e) => {
        result.classList.add("hide")
        result.style.cssText = ''
    })
})