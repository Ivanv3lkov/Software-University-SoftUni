import { html } from "./../../node_modules/lit-html/lit-html.js";

export const tableBody = () => html`
<table>
<thead>
    <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
    </tr>
</thead>
<tbody>
</tbody>
</table>`;

export const tableRow = ({title, author, id}) => html`
<tr data-id="${id}">
    <td class="title"> ${title} </td>
    <td class="author"> ${author} </td>
    <td>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    </td>
</tr>
`;

export const tableRows = (books) => html`${books.map(x=> tableRow(x))}`;