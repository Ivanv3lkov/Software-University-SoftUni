export { 
    isAuthorized, 
    returnEmail, 
    returnUserId, 
};

function isAuthorized() {
    let accessToken = localStorage.getItem('accessToken');
    return accessToken;
}

function returnEmail() {
    let email = localStorage.getItem('email');
    return email;
}

function returnUserId() {
    let userId = localStorage.getItem('userId');
    return userId;
}
