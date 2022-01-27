const list = document.querySelector(".list")
const addBtn = document.querySelector(".add")
const input = document.querySelector(".input")
const items = document.querySelectorAll(".item")
const form = document.querySelector("form")
const heading = document.querySelector(".heading")

const STORAGE_TODOS = "todos"
var todos = JSON.parse(localStorage.getItem("todos")) || []

render()

form.onsubmit = (e) =>{
    e.preventDefault()
    let val = input.value.trim()
    if(val){
        todos.push({
            text: val,
            isCompleted: false
        })
        saveStorage("todos", todos)
        render()
    }
    input.value = ""
    input.focus()
}


function render(){
    list.innerHTML = ""
    todos.forEach((todo, index) => {
        var li = document.createElement("li")
        li.className = `item ${todo.isCompleted ? "completed" : ""}`
        li.innerHTML = `
            <p class="name">${todo.text}</p>
            <i class="fas fa-trash"></i>
        `

        li.onclick = () =>{
            done(index)
        }

        li.querySelector("i").onclick = (e) => {
            remove(index)
            e.stopPropagation()
        }
        list.appendChild(li)
    })
    if(todos.length === 0){
        heading.style.borderBottom = "none"
    }else{
        heading.style.borderBottom = "1px solid black"
    }
}

function remove(index){
    todos.splice(index, 1)
    saveStorage("todos", todos)
    render()
}

function done(index){
    todos[index].isCompleted = !todos[index].isCompleted
    saveStorage("todos", todos)
    render()
}

function saveStorage(key, list){
    localStorage.setItem(key, JSON.stringify(list))
}