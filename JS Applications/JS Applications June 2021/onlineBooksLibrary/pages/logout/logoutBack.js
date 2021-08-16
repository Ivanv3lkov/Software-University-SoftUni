import { isAuthorized } from '../../utils/authValidate.js';
import { collection } from '../../utils/usefulLinks.js';

export function logoutUser(e) {
    
    fetch(collection.logoutLink, {
        headers: {
            'X-Authorization': isAuthorized()
        },
    })
    
        .then(() => {
            localStorage.clear();
            window.location.replace('/')
        });
}