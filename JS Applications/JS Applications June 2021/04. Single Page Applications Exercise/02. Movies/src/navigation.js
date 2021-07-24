import { domEL } from "./helpers.js";

function loggedUser() {
    const links = domEL['navigation'].querySelectorAll('li.nav-item')
    Array.from(links).map(x => x.style.display = 'none')
    links[0].children[0].innerHTML = `Welcome, ${sessionStorage.getItem('email')}`
    links[0].style.display = 'block'
    links[1].style.display = 'block'
    return domEL['navigation']
}

function guest() {
    const links = domEL['navigation'].querySelectorAll('li.nav-item')
    Array.from(links).map(x => x.style.display = 'none')
    links[2].style.display = 'block'
    links[3].style.display = 'block'
    return domEL['navigation']
}

export function navigation() {
    if(sessionStorage.getItem('token') !== null){
        domEL['addMovieButton'].style.display = 'block'
        return loggedUser()
    }
    domEL['addMovieButton'].style.display = 'none'
        return guest()
}