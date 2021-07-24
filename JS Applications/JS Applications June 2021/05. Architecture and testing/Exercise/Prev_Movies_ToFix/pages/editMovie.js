import { jsonRequest } from "../helpers/httpService.js";
import movieService from "../services/movieService.js";
import viewFinder from "../viewFinder.js";

let section = undefined;

function initiliaze(domElement){
    section = domElement;
    let form = section.querySelector('form');
    form.addEventListener('submit', editMovie);
}

async function getView(id){
    try {
        let movie = await movieService.getMovie(id);
        let titleInput = section.querySelector('input[name="title"]');
        let descriptionTextarea = section.querySelector('textarea[name="description"]');
        let imageInput = section.querySelector('input[name="imageUrl"]');

        // pass id to form through html, can we improve this
        let form = section.querySelector('form');
        form.dataset.id = id;

        titleInput.value = movie.title;
        descriptionTextarea.value = movie.description;
        imageInput.value = movie.img;
        return section;
    } catch (err) {
        alert(err);
    }
}

async function editMovie(e) {
    e.preventDefault();
    try {
        let form = e.target;
        let formData = new FormData(form);
        
        //can we improve this
        let id = form.dataset.id;

        let editedMovie = {
            title: formData.get('title'),
            description: formData.get('description'),
            img: formData.get('imageUrl')
        }

        let updateResult = await movieService.editMovie(editedMovie, id);
        form.reset();
        viewFinder.navigateTo('movie-details', id);
    } catch (err) {
        console.error(err);
        alert(err);
    }
}

let editMoviePage = {
    initiliaze,
    getView
};

export default editMoviePage;