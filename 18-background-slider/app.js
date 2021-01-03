const body = document.body

const slides = document.querySelectorAll('.slide')

const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

setBgToBody()

function setBgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
	slides.forEach((slide) => slide.classList.remove('active'))
	slides[activeSlide].classList.add('active')
}

leftBtn.addEventListener('click', () => {
	if (activeSlide !== 0) {
		activeSlide--
	} else {
		activeSlide = slides.length - 1
	}
	setBgToBody()
	setActiveSlide()
})

rightBtn.addEventListener('click', () => {
	if (activeSlide < slides.length - 1) {
		activeSlide++
	} else {
		activeSlide = 0
	}
	setBgToBody()
	setActiveSlide()
})
