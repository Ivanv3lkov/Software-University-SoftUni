import { html, render } from '../../node_modules/lit-html/lit-html.js';

import * as request from '../../utils/requestFetch.js';
import { collection } from '../../utils/usefulLinks.js';
import { editBook } from './editBack.js';

let edit = (obj) => html`
    <!-- Edit Page ( Only for the creator )-->
    <section id="edit-page" class="edit">
            <form id="edit-form" action="#" method="" data-id=${obj._id} @submit=${editBook}>
                <fieldset>
                    <legend>Edit my Book</legend>
                    <p class="field">
                        <label for="title">Title</label>
                        <span class="input">
                            <input type="text" name="title" id="title" value="A Court of Thorns and Roses" .value=${obj.title}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="description">Description</label>
                        <span class="input">
                            <textarea name="description"
                                id="description">${obj.description}</textarea>
                        </span>
                    </p>
                    <p class="field">
                        <label for="image">Image</label>
                        <span class="input">
                            <input type="text" name="imageUrl" id="image" value="/images/book1.png" .value=${obj.imageUrl}>
                        </span>
                    </p>
                    <p class="field">
                        <label for="type">Type</label>
                        <span class="input" .value=${obj.type}>
                            <select id="type" name="type" value="Fiction">
                                <option value="Fiction" selected>Fiction</option>
                                <option value="Romance">Romance</option>
                                <option value="Mistery">Mistery</option>
                                <option value="Classic">Clasic</option>
                                <option value="Other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Save">
                </fieldset>
            </form>
        </section>
`;

export default function (context) {

    let id = context.params.id;

    request.get(`${collection.books}/${id}`)
        .then(data => {
            render(edit(data), container);
        });
}