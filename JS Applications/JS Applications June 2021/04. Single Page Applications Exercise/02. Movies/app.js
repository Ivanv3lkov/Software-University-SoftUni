import { reqUrls, validateData, fetchData, clearData, domEL } from "./src/helpers.js";
import { createPath, router, clickHandler } from "./src/router.js";
import { home } from "./src/home.js";
import { newMovie } from "./src/newMovie.js";
import { login } from "./src/login.js";
import { logout } from "./src/logout.js";
import { register } from './src/register.js';
import { details } from "./src/details.js";
import { edit } from "./src/edit.js";

window.addEventListener('popstate', function () {
    router(location.href, true)
})

window.addEventListener('load', function (e) {
    router(location.href, true)
    document.addEventListener('click', clickHandler)
})

createPath('/', home)
createPath('/home', home)
createPath('/newMovie', newMovie)
createPath('/login', login)
createPath('/logout', logout)
createPath('/register', register)
createPath('/details', details)
createPath('/edit', edit)











