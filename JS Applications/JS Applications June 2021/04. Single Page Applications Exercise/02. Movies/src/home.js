import { domEL, fetchData, reqUrls } from "./helpers.js";
import { navigation } from "./navigation.js";
import { homePageMovies } from "../templates/homePageMovie.js";

async function renderHome() {
    const fragment = document.createDocumentFragment()

    fragment.append(navigation(), domEL['home-page'], domEL['text-center'], domEL['addMovieButton'])

    const data = await fetchData(reqUrls['movies'], '')

    domEL['movies'].querySelector('#movieSection').innerHTML = 
        data.map(homePageMovies).join('')

    fragment.appendChild(domEL['movies'])
    return fragment
}

export async function home() {
        domEL['main'].innerHTML = ''
        domEL['main'].appendChild(await renderHome())
}




