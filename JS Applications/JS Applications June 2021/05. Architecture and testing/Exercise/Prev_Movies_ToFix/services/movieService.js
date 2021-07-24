import { jsonRequest } from "../helpers/httpService.js";

let baseUrl = 'http://localhost:3030';

async function createMovie(newMovie){
    let createResult = await jsonRequest(`${baseUrl}/data/movies`, 'Post', newMovie, true);
    return createResult;
}

async function editMovie(editedMovie, id){
    let updateResult = await jsonRequest(`${baseUrl}/data/movies/${id}`, 'Put', editedMovie, true);
    return updateResult;
}

async function getMovie(movieId){
    let movie = await jsonRequest(`${baseUrl}/data/movies/${movieId}`);
    return movie;
}

async function getAllMovies(){
    let url = `${baseUrl}/data/movies`;
    let movies = await jsonRequest(url);
    return movies;
}

async function deleteMovie(movieId){
    let deleteResult = await jsonRequest(`${baseUrl}/data/movies/${movieId}`, 'Delete', undefined, true);
    return deleteResult;
}

let movieService = {
    createMovie,
    editMovie,
    getMovie,
    getAllMovies,
    deleteMovie
}

export default movieService;