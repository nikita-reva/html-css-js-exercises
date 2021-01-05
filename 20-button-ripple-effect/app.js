const buttons = document.querySelectorAll('.ripple')

buttons.forEach((button) => {
	button.addEventListener('click', function (e) {
		const clickPosX = e.clientX
		const clickPosY = e.clientY

		const buttonLeft = e.target.offsetLeft
		const buttonTop = e.target.offsetTop

		const xInside = clickPosX - buttonLeft
		const yInside = clickPosY - buttonTop

		circleElement = document.createElement('span')
		circleElement.classList.add('circle')
		circleElement.style.left = xInside + 'px'
		circleElement.style.top = yInside + 'px'
		this.appendChild(circleElement)

		setTimeout(() => circleElement.remove(), 500)
	})
})
