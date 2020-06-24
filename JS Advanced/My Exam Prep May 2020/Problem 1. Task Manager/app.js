function solve() {
    let sections = document.querySelectorAll('section');
    let openDiv = sections.item(1).querySelectorAll('div').item(1);
    let progressDiv = sections.item(2).querySelectorAll('div').item(1);
    let finishedDiv = sections.item(3).querySelectorAll('div').item(1);

    let inputTask = document.getElementById('task');
    let inputDesk = document.getElementById('description');
    let inputDate = document.getElementById('date');

    document.getElementById('add').addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();
        let taskName = inputTask.value.trim();
        let taskDesc = inputDesk.value.trim();
        let taskDate = inputDate.value.trim();

        if (taskName.length > 0 && taskDesc.length > 0 && taskDate.length > 0) {

            let startBtn = el('button', 'Start', { className: 'green' });
            let finishBtn = el('button', 'Finish', { className: 'orange' });
            let deleteBtn = el('button', 'Delete', { className: 'red' });
          
            let btnDiv = el('div', [
                startBtn,
                deleteBtn
            ], { className: 'flex' });

            let task = el('article', [
                el('h3', taskName),
                el('p', `Description: ${taskDesc}`),
                el('p', `Due Date: ${taskDate}`),
                btnDiv
            ]);

            startBtn.addEventListener('click', () => {
                progressDiv.appendChild(task);
                startBtn.remove();
                btnDiv.appendChild(finishBtn);
            });

            finishBtn.addEventListener('click', () => {
                finishedDiv.appendChild(task);
                btnDiv.remove();
            });

            deleteBtn.addEventListener('click', () => {
                task.remove();
            });

            openDiv.appendChild(task);
        }
    }

    function el(type, content, attributes) {
        const result = document.createElement(type);

        if (attributes !== undefined) {
            Object.assign(result, attributes);
        }

        if (Array.isArray(content)) {
            content.forEach(append);
        } else {
            append(content);
        }

        function append(node) {
            if (typeof node === 'string') {
                node = document.createTextNode(node);
            }
            result.appendChild(node);
        }

        return result;
    }
}