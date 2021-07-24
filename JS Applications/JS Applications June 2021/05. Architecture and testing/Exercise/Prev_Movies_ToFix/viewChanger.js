let mainSection = undefined;
let sectionViewSelector = undefined;

function initiliaze(mainDomElement, viewSelector) {
    mainSection = mainDomElement;
    sectionViewSelector = viewSelector;
}

async function changeView(viewPromise) {
    let view = await viewPromise;
    if(view !== undefined){
        mainSection.querySelectorAll(sectionViewSelector).forEach(v => v.remove());
        mainSection.appendChild(view);
    }
}

let viewChanger = {
    initiliaze,
    changeView
};

export default viewChanger;