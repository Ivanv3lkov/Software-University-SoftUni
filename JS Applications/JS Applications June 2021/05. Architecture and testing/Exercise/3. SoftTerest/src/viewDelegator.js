let mainSection = undefined;
let sectionViewSelector = undefined;

const init = (mainDomElement,selectorViews) => {
    mainSection = mainDomElement;
    sectionViewSelector = selectorViews;
};

const changeView = async (viewPromise) =>{
    let view = await viewPromise;
    if(view !== undefined){
        mainSection.querySelectorAll('.view').forEach(e => e.remove());
        mainSection.appendChild(view);
    }
};

let viewDelegator = {
    init,changeView
};

export default viewDelegator;