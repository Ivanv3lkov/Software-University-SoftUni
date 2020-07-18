import { FetchData, getUrl } from './data.js';
import { map } from './dom.js';
import { Methods } from './Functions/methods.js';
(function () {
    const methods = new Methods();
    const elements = map();
    class Values {
        constructor(id, firstName, lastName, facultyNumber, grade) {
            this.id = Number(id);
            this.firstName = firstName;
            this.lastName = lastName;
            this.facultyNumber = facultyNumber;
            this.grade = Number(grade);
        }
    }
    const btn = {
        Submit: () => sendData(),
        LoadData: () => loadData(),
    };
    document.body.addEventListener('click', function (e) {
        e.preventDefault();
        if (typeof btn[e.target.textContent] === 'function') {
            btn[e.target.textContent]();
        }
    });

    function sendData() {
        const values = methods.getValues(elements.form());
        if (values.length !== methods.validateInput(values)) {
            alert('Invalid Input!');
            return;
        }
        new FetchData(getUrl)
            .sentData(new Values(...values))
            .then(methods.inputHandler)
            .catch(methods.inputHandler);
        setTimeout(function () {
            methods.clearInput(elements.form());
        }, 1000);
    }
    function loadData() {
        new FetchData(getUrl)
            .getData()
            .then((x) => x.json())
            .then((x) => {
                elements.result().innerHTML = '';
                Object.values(x)
                    .sort((a, b) => a.id - b.id)
                    .forEach((x) =>
                        elements
                            .result()
                            .appendChild(
                                createEl('tr', [
                                    createEl('td', x.id),
                                    createEl('td', x.firstName),
                                    createEl('td', x.lastName),
                                    createEl('td', x.facultyNumber),
                                    createEl('td', x.grade),
                                ])
                            )
                    );
            })
            .catch((x) => alert(x));
    }

    function createEl(type, content, attributes) {
        const el = document.createElement(type);
        if (attributes !== undefined) {
            Object.assign(el, attributes);
        }
        Array.isArray(content) ? content.forEach(createNode) : createNode(content);
        function createNode(node) {
            if (typeof node === 'string' || typeof node === 'number') {
                node = document.createTextNode(node);
            }
            return el.appendChild(node);
        }
        return el;
    }
})();
