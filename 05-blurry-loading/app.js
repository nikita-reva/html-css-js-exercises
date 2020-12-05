const loadingText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const btnStart = document.querySelector('.btn')

let load = 0
let int

btnStart.addEventListener('click', () => {
	load = 0
	int = setInterval(blurring, 30)
})

function blurring() {
	load++
	console.log(load)
	if (load > 99) {
		clearInterval(int)
	}

	loadingText.innerHTML = `${load}%`
	loadingText.style.opacity = `${1 - load / 100}`
	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
