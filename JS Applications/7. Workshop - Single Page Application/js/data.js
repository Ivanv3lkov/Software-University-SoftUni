import { beginRequest, endRequest } from './controllers/notification.js';
import API from './api.js';

const endpoints = {
    MOVIES: "data/movies",
    MOVIE_BY_ID: "data/movies/"
};

const api = new API(
    'F29FC4B6-905A-5BEC-FF40-AC13B6275C00',
    '488750C6-7930-4330-8388-C2C2D6A7A5CD',
    endpoints,
    beginRequest,
    endRequest);

export const login = api.login.bind(api);
export const register = api.register.bind(api);
export const logout = api.logout.bind(api);

/* 
    този bind го правим, понеже като изнесем функцията 
    от обекта, като референция само чрез e.g api.login,
    губим връзката с this.
*/

// get all movies
export async function getMovies(search) {

    // PAGIN WITH pagesize  - `?pageSize=10offset=20`
    if (!search) {
        return api.get(endpoints.MOVIES);
    } else {
        return api.get(endpoints.MOVIES + `?where=${escape(`genres LIKE '%${search}%'`)}`);
    }
}

// get movie by ID
export async function getMovieById(id) {
    return api.get(endpoints.MOVIE_BY_ID + id);
}

// create movie
export async function createMovie(movie) {
    return api.post(endpoints.MOVIES, movie);
}

// edit movie
export async function updateMovie(id, updateProps) {
    return api.put(endpoints.MOVIE_BY_ID + id, updateProps);
}

// delete movie
export async function deleteMovie(id) {
    return api.delete(endpoints.MOVIE_BY_ID + id);
}

// get movies by userID
export async function getMovieByOwner() {
    const ownerId = localStorage.getItem('userId');

    return api.get(endpoints.MOVIES + `?where=ownerId%3D%27${ownerId}%27`);
}

// buy ticket
export async function buyTicket(movie) {
    const newTickets = movie.tickets - 1;
    const movieId = movie.objectId;

    return updateMovie(movieId, { tickets: newTickets });

    // obtain userId
    // make request
}