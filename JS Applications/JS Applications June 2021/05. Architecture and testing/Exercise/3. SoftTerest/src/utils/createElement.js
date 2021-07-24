function createElement(type, text, attributes = []) {
    let element = document.createElement(type);
    if (text) {
        element.textContent = text;
    }
    attributes.map(attr => attr.split('=')).forEach(([name, value]) => {
        value ? element.setAttribute(name, value) : element.setAttribute(name, '');
    });
    return element;
}

const appendElementsChildren = (pr, children) => children.forEach(child => pr.appendChild(child));

let createElements = {
    createElement, appendElementsChildren
}

export default createElements;