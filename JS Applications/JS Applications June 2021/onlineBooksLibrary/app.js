import { render } from './node_modules/lit-html/lit-html.js'
import page from './node_modules/page/page.mjs';

import { navBar } from './pages/nav-bar/navBarView.js';
import dashboard from './pages/dashboard/dashboardView.js';
import login from './pages/login/loginView.js';
import register from './pages/register/registerView.js';
import create from './pages/create/createView.js';

import myBooks from './pages/myPage/myBooksView.js';
import details from './pages/details/detailsView.js';
import edit from './pages/edit/editView.js';

export { container };

const navArea = document.querySelector('#site-header');
const container = document.querySelector('main');

render(navBar(), navArea);
page('/index.html', '/');

page('/', dashboard);
page('/login', login);
page('/register', register);
page('/create', create);
page('/my-books', myBooks);
page('/:id', details);
page('/:id/edit', edit);

page.start();