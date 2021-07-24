
let section = undefined;
let navLinkClass = undefined;

function initiliaze(domElement, linkClass) {
    section = domElement;
    navLinkClass = linkClass;
}

async function getView() {
    return section;
}

let homePage = {
    initiliaze,
    getView
};

export default homePage;