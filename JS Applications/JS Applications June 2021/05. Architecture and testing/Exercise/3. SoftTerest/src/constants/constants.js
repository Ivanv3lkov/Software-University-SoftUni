const AUTH_TOKEN = `auth_token`;
const EMAIL_USER = `email_user`;
const ID_USER = `user_id`;
const BASE_URL = `http://localhost:3030/`;
const FIELDS_ALERT = `All field\'s are required!`;
const PASSWORD_ALERT = `Those passwords didn't match. Try again.`;
const INVALID_TITLE = `The title should be at least 6 characters long`;
const INVALID_DESCRIPTION = `The description should be at least 10 characters long.`;
const INVALID_IMG = `The image should be at least 5 characters long.`;


let endPoints ={
    allIdeasPoint: `data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc `,
    createPoint: `data/ideas`,
    getPoint: `data/ideas/`,
    deletePoint: `data/ideas/`,
    login: `users/login`,
    register: `users/register`,
    logout: `users/logout`
}
export default {
    AUTH_TOKEN,EMAIL_USER,BASE_URL,endPoints,FIELDS_ALERT,PASSWORD_ALERT,ID_USER,INVALID_TITLE,INVALID_DESCRIPTION,INVALID_IMG
}