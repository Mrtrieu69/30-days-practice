const boxList = document.querySelector(".box-list")
const input = document.querySelector(".box-input")
const removeAll = document.querySelector(".delete-all")

var listArr = ["nodejs", "reactjs"]

function render(){
    var htmls = listArr.map((item, index) => {
        return `
            <li class="box-item">
                ${item}
                <span onclick="removeItem(${index})">&times;</span>
            </li>
        `
    }).join("")
    boxList.innerHTML = htmls
}

render()

function addItem(value){
    if(value === "" || listArr.includes(value)){
        return
    }
    listArr.push(value)
    render()
}

function removeItem(index){
    listArr.splice(index, 1)
    render()
}
input.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        addItem(e.target.value)
        e.target.value = ""
        e.target.focus()
    }
})

removeAll.addEventListener("click", () => {
    listArr.splice(0)
    render()
})