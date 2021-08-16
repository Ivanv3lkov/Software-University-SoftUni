import { html, render } from '../../node_modules/lit-html/lit-html.js';

import * as request from '../../utils/requestFetch.js';
import { collection } from '../../utils/usefulLinks.js';
import { returnUserId } from '../../utils/authValidate.js';
import { isAuthorized } from '../../utils/authValidate.js';
import { deleteBook } from '../delete/deleteBack.js';

let details = (obj) => html`
       <!-- Details Page ( for Guests and Users ) -->
       <section id="details-page" class="details">
            <div class="book-information">
                <h3>${obj.title}</h3>
                <p class="type">Type: ${obj.type}</p>
                <p class="img"><img src=${obj.imageUrl}></p>
                <div class="actions">
                    <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                    ${obj._ownerId === returnUserId() 
                    ? html`
                    <a class="button" href="/${obj._id}/edit">Edit</a>
                    <a class="button" href="#">Delete</a>
                    `:  ''} 
                    <!-- Bonus -->
                    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                    ${isAuthorized() && obj._ownerId !== returnUserId()
                    ? html`
                    <a class="button" href="#">Like</a>` 
                    : ''}

                    <!-- ( for Guests and Users )  -->
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: 0</span>
                    </div>
                    <!-- Bonus -->
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${obj.description}</p>
            </div>     
        </section>
`;

export default function (context) {
    let id = context.params.id;
    console.log(`${collection.books}/${id}`);

    request.get(`${collection.books}/${id}`)
        .then(data => {
            console.log(data);
            render(details(data), container);
        });

}