import { html, render } from '../../node_modules/lit-html/lit-html.js';

import * as request from '../../utils/requestFetch.js';
import { container } from '../../app.js';
import { collection } from '../../utils/usefulLinks.js';

let oneBook = (obj) => html`
   <li class="otherBooks">
     <h3>${obj.title}</h3>
        <p>Type: ${obj.type}</p>
        <p class="img"><img src=${obj.imageUrl}></p>
        <a class="button" href="/${obj._id}">Details</a>
    </li>
`;

let dashboard = (arr) => html`
    <section id="dashboard-page" class="dashboard">
        <h1>Dashboard</h1>
        ${arr.length > 0
        ?
        html`<ul class="other-books-list">
        ${arr.map(obj => oneBook(obj))}
        </ul>`
        :
        html`
        <p class="no-books">No books in database!</p>`
    }
    </section>
`;

export default function (context, next) {
    request.get(collection.allDashboardBooks)
        .then(data => {
            console.log(data);
            
            return render(dashboard(data), container);
        });
}