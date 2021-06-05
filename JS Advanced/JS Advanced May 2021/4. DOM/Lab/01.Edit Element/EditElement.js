function editElement(element, match, replacer) {
    let newText = element.textContent;
    while (newText.includes(match)) {
        newText = newText.replace(match, replacer)
    }
    element.textContent = newText;
}