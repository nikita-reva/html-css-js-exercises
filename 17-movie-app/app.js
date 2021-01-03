const API_URL =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6865c33d6c394720a5ffd740cd9e979a&page=1'

const SEARCH_URL =
	'https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=6865c33d6c394720a5ffd740cd9e979a&query="'

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const form = document.getElementById('form')

const search = document.getElementById('search')

const main = document.querySelector('main')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
	const res = await fetch(url)
	const data = await res.json()

	showMovies(data.results)
}

function showMovies(movies) {
	main.innerHTML = ''
	console.table(movies)

	movies.forEach((movie) => {
		const { title, vote_average, poster_path, overview } = movie

		const movieElement = document.createElement('div')
		movieElement.classList.add('movie')
		movieElement.innerHTML = `			
            <img
                src="${IMG_PATH + poster_path}"
                alt="${title}"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
					vote_average
				)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>
                    ${overview}
                </p>
            </div>`
		main.appendChild(movieElement)
	})
}

function getClassByRate(vote) {
	if (vote >= 8) {
		return 'green'
	} else if (vote >= 5) {
		return 'orange'
	} else {
		return 'red'
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault()

	const searchTerm = search.value
	if (searchTerm && searchTerm !== '') {
		getMovies(`${SEARCH_URL + searchTerm}"`)
		search.value = ''
	} else {
		window.location.reload()
	}
})
