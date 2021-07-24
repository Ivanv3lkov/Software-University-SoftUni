import constants from "../constants/constants.js";
import httpRequest from "../httpLibrary/httpService.js";
import nav from "../runners/nav.js";
import viewPort from "../runners/viewPort.js";


const getEmail = () => {
    return localStorage.getItem(constants.EMAIL_USER);
};
const setEmail = (email) => {
    localStorage.setItem(constants.EMAIL_USER, email)
};
const getUserId = () => {
    return localStorage.getItem(constants.ID_USER);
};
const setUserId = (email) => {
    localStorage.setItem(constants.ID_USER, email)
};
const getToken = () => {
    return localStorage.getItem(constants.AUTH_TOKEN);
};

const setToken = (token) => {
    localStorage.setItem(constants.AUTH_TOKEN, token)
};
const removeToken = () => {
    localStorage.clear();
};

const isLoggedIn = () => {
    return getToken() !== undefined && getToken() !== null;
};

const logUser = async (data) => {
    console.log(`${constants.BASE_URL}${constants.endPoints.login}`)
    let responseJson = await httpRequest.post(`${constants.BASE_URL}${constants.endPoints.login}`, false, data);
    setEmail(responseJson.email);
    setUserId(responseJson._id);
    setToken(responseJson.accessToken);
    await nav.loginUserView();
    await viewPort.navigateTo('home');
};
const regUser = async (data) => {
    let responseJson = await httpRequest.post(`${constants.BASE_URL}${constants.endPoints.register}`, false, data);
    setEmail(responseJson.email);
    setUserId(responseJson._id);
    setToken(responseJson.accessToken);
    await nav.loginUserView();
    await viewPort.navigateTo('home');
};

const logout = async () => {
    await httpRequest.get(`${constants.BASE_URL}${constants.endPoints.logout}`, true);
    localStorage.clear();
    await nav.logoutUserView();
    await viewPort.navigateTo('home');
};
let authService = {
    isLoggedIn, getToken, getEmail, getUserId, logUser,regUser,logout,removeToken
};
export default authService;