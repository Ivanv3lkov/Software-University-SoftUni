
let section = undefined;
let navLinkClass = undefined;

function initiliaze(domElement, linkClass) {
    section = domElement;
    navLinkClass = linkClass;
}

async function getView() {
    return section;
}

let createIdeaPage = {
    initiliaze,
    getView
};

export default createIdeaPage;