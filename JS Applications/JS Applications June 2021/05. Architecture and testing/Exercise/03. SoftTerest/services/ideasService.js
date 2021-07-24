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

async function getIdea(id){
    let idea = await jsonRequest(`${baseUrl}/data/ideas/${id}`);
    return idea;
}

async function getAllIdeas(){
    let url = `${baseUrl}/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc`;
    let movies = await jsonRequest(url);
    return movies;
}

async function deleteIdea(id){
    let deleteResult = await jsonRequest(`${baseUrl}/data/ideas/${id}`, 'Delete', undefined, true);
    return deleteResult;
}

let ideaService = {
    createMovie,
    editMovie,
    getIdea,
    getAllIdeas,
    deleteIdea
}

export default ideaService;