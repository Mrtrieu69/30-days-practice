const img = `<img src="https://images.unsplash.com/photo-1637420425895-97a239041d53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80" alt="">`
const title = `Nodemy`
const desc = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium, minima voluptates eligendi vel quasieligendi vel quasi`
const more = `Read More`

const card = document.querySelector(".card")
const imageEl = document.querySelector(".image")
const titleEl = document.querySelector(".title")
const descEl = document.querySelector(".desc")
const moreEl = document.querySelector(".more")

setTimeout(() => {
    imageEl.innerHTML = img
    titleEl.innerHTML = title
    descEl.innerHTML = desc
    moreEl.innerHTML = more
    card.classList.remove("loading")
    
}, 4000)