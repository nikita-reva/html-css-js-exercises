const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
	cup.addEventListener('click', () => {
		highlightCups(idx)
	})
})

function highlightCups(idx) {
	if (
		smallCups[idx].classList.contains('full') &&
		smallCups[idx].nextElementSibling
			? !smallCups[idx].nextElementSibling.classList.contains('full')
			: smallCups[idx].classList.contains('full')
	) {
		idx--
	}

	smallCups.forEach((cup, idx2) => {
		if (idx2 <= idx) {
			cup.classList.add('full')
		} else {
			cup.classList.remove('full')
		}
	})

	updateBigCup()
}

function updateBigCup() {
	const fullCups = document.querySelectorAll('.cup-small.full').length
	const totalCups = smallCups.length
	const fillLevel = fullCups / totalCups
	if (fillLevel === 0) {
		percentage.style.visibility = 'hidden'
		percentage.innerText = ''
		percentage.style.height = '0'
		liters.innerText = `2l`
	} else if (fillLevel > 0 && fillLevel < 1) {
		percentage.style.visibility = 'visible'
		remained.style.visibility = 'visible'
		percentage.style.height = `${fillLevel * 100}%`
		percentage.innerText = `${fillLevel * 100}%`
		liters.innerText = `${(1 - fillLevel) * 2}l`
	} else {
		remained.style.visibility = 'hidden'
		remained.style.height = '0'
		percentage.innerText = '100%'
		percentage.style.height = '100%'
	}
}
