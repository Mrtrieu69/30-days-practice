const items = document.querySelectorAll(".show-on-scroll")

window.onscroll = () => showItemInViewPort()

function showItemInViewPort(){
    items.forEach(item => {
        var isInViewPort = isItemInViewPort(item)
        if(isInViewPort){
            item.classList.add("start")
        }else{
            item.classList.remove("start")
        }
    })
}

function isItemInViewPort(item){
    var { top, bottom } = item.getBoundingClientRect()
    return (top <= window.innerHeight && bottom >= 0)
}