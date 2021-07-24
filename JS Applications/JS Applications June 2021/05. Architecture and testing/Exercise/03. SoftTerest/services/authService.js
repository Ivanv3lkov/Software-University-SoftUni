import { jsonRequest } from "../helpers/httpService.js";
import nav from "../pages/nav.js";
import viewFinder from "../viewFinder.js";


export function setAuthToken(token) {
    localStorage.setItem('authToken', token);
}

export function getAuthToken(token) {
    return localStorage.getItem('authToken');
}

export function getUserId(){
    return localStorage.getItem('userId');
}

export function setUserId(userId){
    localStorage.setItem('userId', userId);
}

export function isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
}

export async function logout(){
    let result = await jsonRequest(
        'http://localhost:3030/users/logout', 'Get', undefined, true, true);
    localStorage.clear();
    nav.logoutUser();
    viewFinder.navigateTo('login');
}

export async function login(user){
    let url = 'http://localhost:3030/users/login';
    let result = await jsonRequest(url, 'Post', user);
    setAuthToken(result.accessToken);
    setUserId(result._id);
    setUsername(result.email);
    nav.loginUser();
    viewFinder.navigateTo('home');
}

export async function register(user){
    let url = 'http://localhost:3030/users/register';
    let result = await jsonRequest(url, 'Post', user);
    setAuthToken(result.accessToken);
    setUserId(result._id);
    setUsername(result.email);
    nav.loginUser();
    viewFinder.navigateTo('home');
}

export function getUsername(){
    return localStorage.getItem('username');
}

export function setUsername(userId){
    localStorage.setItem('username', userId);
}

let auth = {
    setAuthToken,
    getAuthToken,
    isLoggedIn,
    logout,
    setUserId,
    getUserId,
    setUsername,
    getUsername,
    login,
    register
};

export default auth;