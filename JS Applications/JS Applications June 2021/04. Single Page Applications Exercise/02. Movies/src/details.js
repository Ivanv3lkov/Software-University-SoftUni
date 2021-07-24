import { router } from "./router.js";
import { domEL, fetchData, reqUrls } from "./helpers.js";
import { navigation } from "./navigation.js";
import { movieDetails } from "../templates/movieDetails.js";

let movieId
let liked

export async function details(x) {
    domEL['main'].innerHTML = ''
    domEL['main'].appendChild(await renderDetails(x))
}

domEL['movie-details'].addEventListener('click', (e) => {
    e.preventDefault()
    e.stopImmediatePropagation()

    const btns = {
        'btn btn-danger': deleteMovie,
        'btn btn-warning': editMovie,
        'btn btn-primary': likeMovie,
    }

    if (e.target.tagName === 'A') {
        btns[e.target.className](e)
    }
})

function editMovie(e) {
    router(e.target.href)
}

async function likeMovie(e) {
    const x = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('token')
        },
        body: JSON.stringify({ movieId })
    }
    const like = await fetchData(reqUrls['likes'], '', x)
    if (like) {
        e.target.parentElement.querySelector('#likesSection').innerHTML = `${++liked} likes`
        e.target.remove()
    }
}

async function deleteMovie() {
    const x = {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': sessionStorage.getItem('token')
        }
    }
    const c = confirm('Are you sure?')
    if (c) {
        const r = await fetchData(reqUrls['movies'], `/${movieId}`, x)
        router('/home')
    }

}

async function renderDetails(x) {
    movieId = x[0]
    const fragment = document.createDocumentFragment()
    fragment.appendChild(navigation())

    const user = sessionStorage.getItem('user')

    const [dataMovie, likes, ownLike] = await Promise.all([
        fetchData(reqUrls['movies'], `/${movieId}`),
        fetchData(reqUrls['likes'], `/?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count `),
        fetchData(reqUrls['likes'], `?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${user}%22`),
    ])
    liked = likes

    const element = movieDetails(dataMovie, likes, ownLike)

    const b = [...element.querySelectorAll('.btn-danger, .btn-warning, .btn-primary')]
    if (user) {
        if (user === dataMovie._ownerId) {

            element.querySelector('.btn-primary').style.display = 'none'
        } else if (ownLike.length === 0) {
            b.slice(0, 2).map(x => x.style.display = 'none')
        } else {
            b.map(x => x.style.display = 'none')
        }
    } else {
        b.map(x => x.style.display = 'none')
    }

    domEL['movie-details'].innerHTML = ''
    domEL['movie-details'].appendChild(element)
    fragment.appendChild(domEL['movie-details'])

    return fragment
}

