import { html } from '../../node_modules/lit-html/lit-html.js';

import { isAuthorized, returnEmail } from '../../utils/authValidate.js';
import { logoutUser } from '../logout/logoutBack.js';

export let navBar = () => html`
 <!-- Navigation -->
 <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="/">Dashboard</a>
                    <!-- Guest users -->
                    ${!isAuthorized()
                    ? html`
                    <div id="guest">
                        <a class="button" href="/login">Login</a>
                        <a class="button" href="/register">Register</a>
                    </div>`
                    : html`
                    <div id="user">
                        <span>Welcome, ${returnEmail()}</span>
                        <a class="button" href="/my-books">My Books</a>
                        <a class="button" href="/create">Add Book</a>
                        <a class="button" href="javascript:void(0)" @click=${logoutUser}>Logout</a>
                    </div>
                    `}
                    <!-- Logged-in users -->
                </section>
            </nav>
`;