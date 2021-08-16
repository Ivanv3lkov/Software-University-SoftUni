import * as request from '../../utils/requestFetch.js';
import { collection } from '../../utils/usefulLinks.js';

export function createBook(e) {
    e.preventDefault();

    let formData = new FormData(e.target);
    let title = formData.get('title');
    let description = formData.get('description');
    let imageUrl = formData.get('imageUrl');
    let type = formData.get('type');

    let errorList = [];

    if (!title) {
        errorList.push('Please add a title!');
    }

    if (!description) {
        errorList.push('Please add a description!');
    }

    if (!imageUrl) {
        errorList.push('Please add an image!');
    }

    if (!type) {
        errorList.push('Please add an image!');
    }



    if (title && description && imageUrl && type) {

        let newMeme = {
            title,
            description,
            imageUrl,
            type
        }

        request.pos(collection.books, newMeme, true)
            .then(() => {
                window.location.replace('/');
            });
    } else {
        alert(errorList.join('\n'));
    }
}