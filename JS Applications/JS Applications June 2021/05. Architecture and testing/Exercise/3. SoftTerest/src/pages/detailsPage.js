import ideasService from "../services/ideasService.js"
import construct from "../ui/templates.js"
import viewPort from "../runners/viewPort.js"

let keepRefElement = undefined;

const init = (domElement) => {
    keepRefElement = domElement;
};


const getPage = async (id) => {

    let domElement = document.createTextNode('Upps something went wrong');
    try {
        let ideasDetails = await ideasService.getIdea(id);
        let {_ownerId, title, description, img} = ideasDetails;
        domElement = construct.detailedView(_ownerId, title, description, img, id);

    } catch (err) {
        alert(err);
    }
    return domElement;
};


const deleteIdea = async (id) => {
    await ideasService.deleteIdea(id);
    await viewPort.navigateTo('dashboard');
};

let detailsPage = {
    init, getPage,deleteIdea
};

export default detailsPage;

