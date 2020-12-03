const progress = document.getElementById('progress')
const btnPrev = document.getElementById('prev')
const btnNext = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

btnPrev.addEventListener('click', () => {
	if (currentActive > 0) {
		currentActive--
	}

	updateProgressBar()
	updateButtons()
})

btnNext.addEventListener('click', () => {
	if (currentActive < circles.length) {
		currentActive++
	}

	updateProgressBar()
	updateButtons()
})

function updateProgressBar() {
	circles.forEach((circle, index) => {
		if (index < currentActive) {
			circle.classList.add('active')
		} else {
			circle.classList.remove('active')
		}
	})

	const actives = document.querySelectorAll('.circle.active')

	progress.style.width = `${
		100 * ((actives.length - 1) / (circles.length - 1))
	}%`
}

function updateButtons() {
	if (currentActive <= 1) {
		btnPrev.disabled = true
	} else if (currentActive >= circles.length) {
		btnNext.disabled = true
	} else {
		btnNext.disabled = false
		btnPrev.disabled = false
	}
}
