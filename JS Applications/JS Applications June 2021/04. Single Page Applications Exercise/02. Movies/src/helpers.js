const reqUrls = {
    movies: 'http://localhost:3030/data/movies',
    likes: 'http://localhost:3030/data/likes',
    register: 'http://localhost:3030/users/register',
    login: 'http://localhost:3030/users/login',
    logout: 'http://localhost:3030/users/logout',
}

function validateData(z) {
    const data = Array.from(z).every(x => x.value !== '')
    if (data) {
        return z
    }
    alert('Wrong input data!')
    errorHandler({ message: 'Wrong input data!' })
}

function validateUserRegister(x) {
    const data = Object.values(x).every(x => x !== '')
    if (data) {
        const checkPassword = x.password.length >= 6
        if (!checkPassword) {
            alert('The length of the password is too short!')
            errorHandler({ message: 'The length of the password is too short!' })
        }
        const validatePassword = checkPassword ? x.password === x.repeatPassword : null
        if (validatePassword) {
            return { email: x.email, password: x.password }
        }
        alert('Password doesn\'t match!')
        errorHandler({ message: 'Password doesn\'t match!' })
    }
    alert('All fields are required!')
    errorHandler({ message: 'All fields are required!' })
}

function errorHandler(e) {
    throw new Error(`${e.message}`)
}

function fetchData(baseUrl, uri, headers = {}) {
    const url = uri !== '' ? `${baseUrl}${uri}` : baseUrl

    return fetch(url, headers)
        .then(serverResponse)
        .then(r => r.json())
        .catch(errorHandler)

}

function serverResponse(x) {
    if (x.url === reqUrls['register'] && x.status === 409) {
        alert('This email already have registration!')
        errorHandler({ message: x.statusText })
    }
    if (!x.ok) {
        throw new Error(x.message)
    }
    return x
}

function clearData(z) {
    Array.from(z).map(x => x.value = '')
}

function setUserToken(x) {
    sessionStorage.setItem('token', x.accessToken)
    sessionStorage.setItem('user', x._id)
    sessionStorage.setItem('email', x.email)
}

function removeUserToken() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
    sessionStorage.removeItem('email')
}

const domEL = {
    main: document.getElementById('main'),
    movies: document.getElementById('movies'),
    'add-movie': document.getElementById('add-movie'),
    'home-page': document.getElementById('home-page'),
    'text-center': document.querySelector('h1.text-center'),
    'addMovieButton': document.getElementById('add-movie-button'),
    'form-login': document.getElementById('form-login'),
    'form-sign-up': document.getElementById('form-sign-up'),
    navigation: document.getElementById('navigation'),
    'add-movie': document.getElementById('add-movie'),
    'movie-details': document.getElementById('movie-details'),
    likesSection: document.getElementById('likesSection'),
    'edit-movie': document.getElementById('edit-movie')
}

export {
    validateData,
    errorHandler,
    fetchData,
    serverResponse,
    clearData,
    setUserToken,
    removeUserToken,
    validateUserRegister,
    reqUrls,
    domEL
}