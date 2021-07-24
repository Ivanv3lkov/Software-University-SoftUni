export const appendElement = (container, child) => {
    container.appendChild(child);
};

export const removeChildren  = (arrElements) => arrElements.forEach(e => e.remove());