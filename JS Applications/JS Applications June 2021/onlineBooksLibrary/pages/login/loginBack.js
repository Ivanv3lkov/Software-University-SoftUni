import * as request from '../../utils/requestFetch.js';
import { collection } from '../../utils/usefulLinks.js';

export function loginUser(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');

    let errorList = [];

    if (!email) {
        errorList.push('Please enter your email!')
    }

    if (!password) {
        errorList.push('Please enter your password!')
    }

    if (email && password) {

        let oldUser = {
            email,
            password
        }

        request.pos(collection.loginLink, oldUser)
            
            .then(data => {

                if (data.code == '403') {
                    throw new Error(data.message);

                } else {
                    localStorage.setItem('accessToken', data.accessToken);
                    localStorage.setItem('email', data.email);
                    localStorage.setItem('userId', data._id);
                    
                    window.location.replace('/');
                }
            })

            .catch(error => {
                alert('Email or password doesn\'t match!');
            });

    } else {
        alert(errorList.join('\n'));
    }
}