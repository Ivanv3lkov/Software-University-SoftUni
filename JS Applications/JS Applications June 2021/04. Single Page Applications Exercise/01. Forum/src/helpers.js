const reqUrls = {
    post: 'http://localhost:3030/jsonstore/collections/myboard/posts',
    comments: 'http://localhost:3030/jsonstore/collections/myboard/comments',
}

function validateData(z) {
    const data = Array.from(z).every(x => x.value !== '')
    if (data) {
        return z
    }
    alert('Wrong input data!')
    errorHandler({ message: 'Wrong input data!' })
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
    if (!x.ok) {
        throw new Error(x.message)
    }
    return x
}

function clearData(z) {
    z.map(x => x.value = '')
}

function setUserToken(x) {
    sessionStorage.setItem('token', x.accessToken)
    sessionStorage.setItem('user', x._id)
}

function removeUserToken() {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
}


export {
    validateData,
    errorHandler,
    fetchData,
    serverResponse,
    clearData,
    setUserToken,
    removeUserToken,
    reqUrls,
}
