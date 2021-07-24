let container = undefined;

const init = (domElement) => {
    container = domElement;
};

const getPage  = () => {
    return container;
};

let homePage ={
  init,getPage
};

export default homePage;
