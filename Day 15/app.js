// const products = Array.from(document.querySelectorAll(".name"))
// const items = document.querySelectorAll(".item")
// const input = document.querySelector(".search input")
// const list = document.querySelector(".list")


// var listName = products.reduce((result, product, index) => 
//         [...result, {index, value: product.textContent.toLocaleLowerCase()}]
//     , [])


// input.oninput = (e) => {
//     if(e.target.value){ 
//         checkProductName(e.target.value.trim())
//     }else{
//         items.forEach(item => item.classList.remove("hide"))
//         list.style.overflowY = "scroll"
//     }
// }

// function checkProductName(value){
//     var listNameChecked = listName.filter(name => name.value.includes(value))
//     var listIdValid = listNameChecked.reduce((result, nameChecked) =>
//         [...result, nameChecked.index]    
//     , [])
//     handleShowProducts(listIdValid)
// }

// function handleShowProducts(listIdValid = ""){
//     items.forEach((item, index) => {
//         if(listIdValid.includes(index)){
//             item.classList.remove("hide")
//         }else{
//             item.classList.add("hide")
//         }
//     })
//     if(document.querySelectorAll(".item:not(.hide)").length <= 3){
//         list.style.overflowY = "unset"
//     }else{
//         list.style.overflowY = "scroll"
//     }
// }

const list = document.querySelector(".list")
const input = document.querySelector(".search input")




handleData(getItems)

async function handleData(callback){
    var products = await fetch("https://fakestoreapi.com/products").then(res => res.json())
    var htmls = products.map(product => {
        return`
            <li class="item">
                <div class="image">
                    <img src="${product.image}" alt="">
                </div>
                <div class="details">
                    <h4 class="name">${product.title}</h4>
                    <p class="price">${product.price}</p>
                </div>
            </li>
        `
    }).join("")
    list.innerHTML = htmls

    items = document.querySelectorAll(".item")
    callback(items)
}

function getItems(items){

    input.oninput = (e) => filterData(e.target.value.trim())

    function filterData(search){
        items.forEach(item => {
            var name = item.querySelector(".name").textContent
            if(name.toLowerCase().includes(search.toLowerCase())){
                item.classList.remove("hide")
            }else{
                item.classList.add("hide")
            }
        })
    }
}
