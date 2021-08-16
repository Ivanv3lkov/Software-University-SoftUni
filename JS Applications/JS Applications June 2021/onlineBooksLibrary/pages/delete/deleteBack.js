import * as request from '../../utils/requestFetch.js';
import { collection } from '../../utils/usefulLinks.js';

export function deleteBook(e) {
    let result = confirm('Are you sure about the deletion?');

    if (result) {
        let id = e.target.dataset.id;

        request.del(`${collection.books}/${id}`, null, true)
            .then(() => {
                console.log('Deleted');
                
                window.location.replace('/');
            });
    }
}