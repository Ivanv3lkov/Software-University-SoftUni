import ideasService from "../services/ideasService.js"
import templates from "../ui/templates.js"
import {removeChildren,appendElement} from "../ui/render.js"

let container = undefined;
let viewNoIdeas = undefined;
const init = (domElement) => {
    container = domElement;
    viewNoIdeas = container.querySelector('#no-ideas');
};

const controlView = (ideas) => {
    if (ideas.length <= 0) {
        appendElement(container,viewNoIdeas);
        return container;
    }
};

const getPage = async () => {
    try {
        let data = await ideasService.getAllIdeas();
        let ideas = Object.values(data)

        removeChildren(Array.from(container.children));
        controlView(ideas);

        ideas.map(e => templates.createIdeas(e.img, e.title, e._id, 'link')).forEach(e => {
            appendElement(container,e);
        });
    } catch (err) {
        console.log(err);
    }
    return container;
};

let dashboardPage = {
    init, getPage
};

export default dashboardPage;