const items = document.querySelectorAll(".item")
const filters = document.querySelectorAll(".filter")


filters.forEach(filter => {
    filter.onclick = (e) => {
        document.querySelector(".filter.active").classList.remove("active")
        e.target.classList.add("active")
        items.forEach(item => {
            if(e.target.textContent.toLowerCase() === item.dataset.type){
                item.classList.remove("hide")
            }else{
                item.classList.add("hide")
            }
            if(e.target.textContent.toLowerCase() === "all food"){
                item.classList.remove("hide")
            }
        })
    }
})