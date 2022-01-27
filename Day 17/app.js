const facebookCount = document.querySelector(".facebook-count")
const youtubeCount = document.querySelector(".youtube-count")
const tiktokCount = document.querySelector(".tiktok-count")

function counterUp(el, to){
    let speed = 200
	let from = 0
	let step = to / speed
	const counter = setInterval(function () {
		from += step
		if (from > to) {
			clearInterval(counter)
			el.innerText = to
		} else {
			el.innerText = Math.ceil(from)
		}
	}, 1)

}

counterUp(facebookCount, 3300)
counterUp(youtubeCount, 1000)
counterUp(tiktokCount, 9900)


