const search = document.querySelector(".search")
const city = document.querySelector(".city")
const country = document.querySelector(".country")
const temperature = document.querySelector(".temperature .value")
const shortDesc = document.querySelector(".short-desc")
const visibility = document.querySelector(".visibility .value")
const wind = document.querySelector(".wind .value")
const cloud = document.querySelector(".cloud .value")
const content = document.querySelector(".content")
const body = document.body

search.onkeyup = (e) =>{
    if(e.key === "Enter"){
        handleEvent(e.target.value.trim())
        e.target.value = ""
        e.target.focus()
    }
}


async function handleEvent(value){
    var weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    var data = await fetch(weatherAPI).then(res => res.json())    
    console.log(data);
    if(data.cod === 200){
        content.classList.remove("hide")
        city.innerHTML = data.name
        country.innerHTML = data.sys.country
        temperature.innerHTML = Math.floor(data.main.temp)
        shortDesc.innerHTML = data.weather[0].main
        visibility.innerHTML = data.visibility + " m"
        wind.innerHTML = data.wind.speed + " m/s"
        cloud.innerHTML = data.main.humidity + " %"
    }else{
        content.classList.add("hide")
    }

    if(Math.floor(data.main.temp) < 10){
        body.classList.add("cold")
        body.classList.remove("hot")
    }else{
        body.classList.remove("cold")
        body.classList.add("hot")
    }
}

handleEvent("saint petersburg")