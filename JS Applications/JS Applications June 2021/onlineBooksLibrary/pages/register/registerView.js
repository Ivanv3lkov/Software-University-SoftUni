import { html, render } from '../../node_modules/lit-html/lit-html.js';

import { container } from '../../app.js';
import { regisUser } from './registerBack.js';

let register = () => html`
    <!-- Register Page ( Only for Guest users ) -->
    <section id="register-page" class="register">
            <form id="register-form" action="" method="" @submit=${regisUser}>
                <fieldset>
                    <legend>Register Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <p class="field">
                        <label for="repeat-pass">Repeat Password</label>
                        <span class="input">
                            <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Register">
                </fieldset>
            </form>
        </section>
`;

export default function (context) {
    render(register(), container);
}