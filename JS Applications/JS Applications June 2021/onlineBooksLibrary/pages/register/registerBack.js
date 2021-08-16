import * as request from '../../utils/requestFetch.js';
import { collection } from '../../utils/usefulLinks.js';

export function regisUser(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');
    let repeatPass = formData.get('confirm-pass');
    
    let errorList = [];
    let condition = password === repeatPass;

    if (!email) {
        errorList.push('Please enter an email!')
    }

    if (!password) {
        errorList.push('Please enter a password!')
    }

    if (!repeatPass) {
        errorList.push('Please enter a repeat password!')
    }

    if (!condition) {
        errorList.push('Password must be written twice!')
    }

    if ( email && password &&
        repeatPass && condition) {

        let newUser = {
            email,
            password
        }

        request.pos(collection.regisLink, newUser)

            .then(data => {
                if (data.code == '409') {
                    throw new Error(data.message);
                } else {
                    localStorage.setItem('accessToken', data.accessToken);
                    localStorage.setItem('email', data.email);
                    localStorage.setItem('userId', data._id);
                    
                    window.location.replace('/');
                }
            }).catch(error => {
                alert(error.message);
            });
    } else {
        alert(errorList.join('\n'));
    }
}