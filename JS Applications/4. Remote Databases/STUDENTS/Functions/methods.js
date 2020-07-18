export class Methods {
    getValues(el) {
        return Object.values(el.children)
            .filter((x) => x.tagName === 'INPUT')
            .map((x) => x.value);
    }
    validateInput(input) {
        return input.filter((x) => x).length;
    }
    clearInput(x) {
        return Object.values(x.children)
            .filter((x) => x.tagName === 'INPUT')
            .forEach((x) => (x.value = ''));
    }
    inputHandler(x) {
        if (!x.ok) {
            return alert('Something went wrong!');
        }
        return alert('New Student has been added successfully!');
    }
    newElements(createEl, x, delBtn, editBtn) {
        return createEl('tr', [createEl('td', x.title), createEl('td', x.author), createEl('td', x.isnb), createEl('td', [delBtn, editBtn])]);
    }
    getParent(x) {
        return x.parentNode.parentNode;
    }
}
