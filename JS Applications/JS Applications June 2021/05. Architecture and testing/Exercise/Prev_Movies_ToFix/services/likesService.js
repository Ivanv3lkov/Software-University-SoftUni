import { jsonRequest } from "../helpers/httpService.js";
import auth from "./authService.js";

let baseUrl = 'http://localhost:3030';

async function getUserLikes(id){
    let userId = auth.getUserId();
    let userLikesArr = await jsonRequest(`${baseUrl}/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);
    return userLikesArr;
}

async function getMovieLikes(id){
    let movieLikes = await jsonRequest(`${baseUrl}/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    return movieLikes;
}

async function likeMovie(body){
    let result = await jsonRequest(`${baseUrl}/data/likes`, 'Post', body, true);
}

let likesService = {
    getUserLikes,
    getMovieLikes,
    likeMovie
}

export default likesService;