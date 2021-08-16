import { html, render } from '../../node_modules/lit-html/lit-html.js';

import { container } from '../../app.js';
import * as request from '../../utils/requestFetch.js';

let oneBook = (obj) => html`
   <li class="otherBooks">
     <h3>${obj.title}</h3>
        <p>Type: ${obj.type}</p>
        <p class="img"><img src=${obj.imageUrl}></p>
        <a class="button" href="/${obj._id}">Details</a>
    </li>
`;

let ownBooks = (arr) => html`
    <section id="my-books-page" class="my-books">
        <h1>My Books</h1>
        ${arr.length > 0
        ?
        html`<ul class="my-books-list">
        ${arr.map(obj => oneBook(obj))}
        </ul>`
        :
        html`
        <p class="no-books">No books in database!</p>`
    }
        </section>
    `;


export default function (context) {
    let id = localStorage.getItem("userId");

    request.get(`http://localhost:3030/data/books?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`)
        .then(data => {
            console.log(data);
            render(ownBooks(data), container);
        });
}