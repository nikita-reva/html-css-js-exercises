hourElement = document.querySelector('.hour')
minuteElement = document.querySelector('.minute')
secondElement = document.querySelector('.second')
timeElement = document.querySelector('.time')
dateElement = document.querySelector('.date')
toggleBtn = document.querySelector('.toggle')

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
]

const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'Mai',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
]

toggleBtn.addEventListener('click', (e) => {
	const htmlElement = document.querySelector('html')
	if (htmlElement.classList.contains('dark')) {
		htmlElement.classList.remove('dark')
		e.target.innerText = 'Dark Mode'
	} else {
		htmlElement.classList.add('dark')
		e.target.innerText = 'Light Mode'
	}
})

const formatTime = (timeUnit) => (timeUnit < 10 ? '0' + timeUnit : timeUnit)

setTime()

function setTime() {
	const time = new Date()
	const month = time.getMonth()
	const day = time.getDay()
	const date = time.getDate()
	const hours = time.getHours()
	const hoursForClock = hours % 12
	const minutes = time.getMinutes()
	const seconds = time.getSeconds()

	hourElement.style.transform = `translate(-50%, -100%) rotate(${
		12 / hoursForClock
	}turn)`

	minuteElement.style.transform = `translate(-50%, -100%) rotate(${
		minutes / 60
	}turn)`

	secondElement.style.transform = `translate(-50%, -100%) rotate(${
		seconds / 60
	}turn)`

	timeElement.innerText = `
        ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}
    `
	dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

setInterval(setTime, 1000)

const scale = (num, in_min, in_max, out_min, out_max) => {
	return (num - in_min) * ((out_max - out_min) / (in_max - in_min)) + out_min
}
