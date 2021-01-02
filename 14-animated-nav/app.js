const buttonToggle = document.getElementById('toggle')
const navElement = document.getElementById('nav')

buttonToggle.addEventListener('click', () => {
	navElement.classList.toggle('active')
})
