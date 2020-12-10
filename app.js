const labels = document.querySelectorAll('.form-control label')
const clickSound = document.getElementById('click')
const btn = document.querySelector('.btn')

labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split('')
		.map(
			(letter, index) =>
				`<span style="transition-delay: ${
					index * 0.05
				}s">${letter}</span>`
		)
		.join('')
})

btn.addEventListener('click', () => {
	clickSound.play()
})
