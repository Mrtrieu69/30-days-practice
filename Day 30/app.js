const list = document.querySelector(".list")
var isMove = false
var startX
var scrollLeft
list.onmousedown = (e) => {
    isMove = true
    startX = e.pageX - list.offsetLeft
    scrollLeft = list.scrollLeft
}

list.onmouseup = () => { isMove = false }
list.onmouseleave = () => { isMove = false }

list.onmousemove = (e) => {
    if(isMove){
        let x = e.pageX - list.offsetLeft
        move = (x - startX)
        list.scrollLeft = scrollLeft - move
    }
}