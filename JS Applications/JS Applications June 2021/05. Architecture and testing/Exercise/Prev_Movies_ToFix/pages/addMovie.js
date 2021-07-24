import { jsonRequest } from "../helpers/httpService.js";
import movieService from "../services/movieService.js";
import viewFinder from "../viewFinder.js";

let section = undefined;

export function initiliaze(domElement){
    section = domElement;
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
    
        let createResult = await movieService.createMovie(newMovie);
        console.log(createResult);
        form.reset();
        viewFinder.navigateTo('home');
    } catch(err){
        console.error(err);
        alert(err);
    }
}

let addMoviePage = {
    initiliaze,
    getView
};

export default addMoviePage;