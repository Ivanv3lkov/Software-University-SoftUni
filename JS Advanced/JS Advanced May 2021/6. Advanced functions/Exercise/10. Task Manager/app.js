function solve() {
    let taskInput = document.getElementById('task');
    let textAreaInput = document.getElementById('description');
    let dataInput = document.getElementById('date');
    let addButton = document.getElementById('add');
    let sections = Array.from(document.querySelectorAll('section'));
    let openDiv = Array.from(sections[1].querySelectorAll('div'))[1]
    let inProgressDiv = Array.from(sections[2].querySelectorAll('div'))[1]
    let completedDiv = Array.from(sections[3].querySelectorAll('div'))[1]

    addButton.addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();
        if (taskInput.value.trim() === '' || textAreaInput.value.trim() === '' || dataInput.value.trim() === '') { return; }

        let article = createElement('article');
        let h3 = createElement('h3', taskInput.value);
        let p1 = createElement('p', `Description: ${textAreaInput.value}`);
        let p2 = createElement('p', `Due Date: ${dataInput.value}`);
        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);

        let div = createElement('div');
        div.setAttribute('class', 'flex');
        let startButton = createElement('button', 'Start');
        startButton.setAttribute('class', 'green');
        let deleteButton = createElement('button', 'Delete');
        deleteButton.setAttribute('class', 'red');
        div.appendChild(startButton);
        div.appendChild(deleteButton);
        article.appendChild(div);

        openDiv.appendChild(article);

        startButton.addEventListener('click', (e) => {
            let currentDiv = e.target.parentElement;
            e.target.textContent === 'Start' ? e.target.remove() : '';
            let finishButton = createElement('button', 'Finish');
            finishButton.setAttribute('class', 'orange');
            currentDiv.appendChild(finishButton);
            inProgressDiv.appendChild(currentDiv.parentElement);

            finishButton.addEventListener('click', (e) => {
                let currentTask = e.target.parentElement.parentElement;
                e.target.parentElement.remove();
                completedDiv.appendChild(currentTask);
            })
        })

        deleteButton.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();
        })
    }

    function createElement(type, text) {
        let element = document.createElement(type);

        if (text) {
            element.textContent = text;
        }

        return element;
    }
}