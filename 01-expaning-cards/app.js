/* Enforce setting the browser zoom level to 100% on page load */
// document.body.style.webkitTransform =  'scale(1)';
// document.body.style.msTransform =   'scale(100)';
// document.body.style.transform = 'scale(1)';
// document.body.style.zoom = screen.logicalXDPI / screen.deviceXDPI;

const panels = document.querySelectorAll('.panel')

panels.forEach((panel, index) => {
	panel.addEventListener('click', () => {
		removeActiveClasses(index)
		panel.style.transition = 'flex 0.7s ease-in'
		panel.classList.toggle('active')
	})
})

function removeActiveClasses(currentIndex) {
	panels.forEach((panel, index) => {
		if (index !== currentIndex) {
			panel.classList.remove('active')
		}
	})
}
