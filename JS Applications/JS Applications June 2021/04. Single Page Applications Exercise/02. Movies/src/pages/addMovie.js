import viewFinder from "../viewFinder.js";
import { jsonRequest } from "../services/httpService.js";

let section = undefined;

export function initialize(domSection){
    section = domSection;
    let form = section.querySelector('form');
    form.addEventListener('submit', addMovie);
}

export async function getView(){
    return section;
}

async function addMovie(e){
    e.preventDefault();
    try {
        let form = e.target;
        let formData = new FormData(form);
        let newMovie = {
            title: formData.get('title'),
            description: formData.get('description'),
            img: formData.get('imageUrl')
        }
    
        let createResult = await jsonRequest('http://localhost:3030/data/movies', 'Post', newMovie, true);
        console.log(createResult);
        form.reset();
        viewFinder.navigateTo('home');
    } catch(err){
        console.error(err);
        alert(err);
    }
}

let addMoviePage = {
    initialize,
    getView
}

export default addMoviePage;