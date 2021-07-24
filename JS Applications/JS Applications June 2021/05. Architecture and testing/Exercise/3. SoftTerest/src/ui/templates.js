import utils from "../utils/createElement.js";
import viewPort from "../runners/viewPort.js";
import auth from "../services/authService.js";


const createIdeas = (img, title, idIdea, navLinkClass) => {
    let divCardIdea = utils.createElement('div', null, ['class=card overflow-hidden current-card details',
    'style=style="width: 20rem; height: 18rem']);

    let divCardBody = utils.createElement('div', null, ['class=card-body']);
    let cardText = utils.createElement('p', `${title}`,['class=card-text']);
    divCardBody.appendChild(cardText);
    let imgMovie = utils.createElement('img', null, ['class=card-image', `src=${img}`, 'alt=Card image cap']);
    let linkAnchor = utils.createElement('a', `Details`, [`class=btn ${navLinkClass}`, 'data-route=details',
        `data-id=${idIdea}`, `href=#`
    ]);
    linkAnchor.addEventListener('click', viewPort.onClickTriggerAction);
    utils.appendElementsChildren(divCardIdea, [divCardBody, imgMovie, linkAnchor]);
    return divCardIdea;
};

const detailedView =  (_ownerId, title, description, img, ideaId) => {
    let divHomeElement = utils.createElement('div', null, ['class=container home some view']);
    let imgElement = utils.createElement('img', null, ['class=det-img', `src=${img}`, 'alt=Movie']);

    let divDesc = utils.createElement('div', null, ['class=desc']);
    let titleElement = utils.createElement('h2', `${title}`,['class=display-5']);
    let infoTypeElement = utils.createElement('p', `Description:`,['class=infoType']);
    let ideaDescriptionElement = utils.createElement('p', `${description}`,['class=idea-description']);

    utils.appendElementsChildren(divDesc, [titleElement, infoTypeElement,ideaDescriptionElement]);
    utils.appendElementsChildren(divHomeElement, [imgElement, divDesc]);

    const isOwner = _ownerId === auth.getUserId();

    if (isOwner && auth.isLoggedIn()) {
        let divCenterElement = utils.createElement('div', null, ['class=text-center']);
        let deleteAnchor = utils.createElement('a', `Delete`, ['class=btn btn-danger link',
            'data-route=delete', `data-id=${ideaId}`,`href=#`]);
        deleteAnchor.addEventListener('click', viewPort.onClickTriggerAction);
        divCenterElement.appendChild(deleteAnchor);
        utils.appendElementsChildren(divHomeElement, [divCenterElement]);
    }

    return divHomeElement;
}
let constructor = {
    createIdeas, detailedView
};

export default constructor;