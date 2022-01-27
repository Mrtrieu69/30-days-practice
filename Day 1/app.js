const root = document.documentElement
const colors = document.querySelectorAll(".info__color-color")


colors.forEach(color => {
    color.onclick = (e) => {
        if(e.target.closest(".red")){
            root.style.setProperty("--primary-color", "rgb(255, 70, 70)")
        }
        if(e.target.closest(".green")){
            root.style.setProperty("--primary-color", "#4daf54")
        }
        if(e.target.closest(".black")){
            root.style.setProperty("--primary-color", "black")
        }
    }
})