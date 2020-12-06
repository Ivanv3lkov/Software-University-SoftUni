function solve() {

    function makeElement(type, text) {
        let element = document.createElement(type);
        if (text !== null) {
            element.textContent = text;
        }
        return element;
    }

    function convertDate(dateValue) {
        while (dateValue.includes('-')) {
            dateValue = dateValue.replace('-', '/');
        }

        dateValue = dateValue.replace('T', ' - ');
        
        return dateValue;
    }

    function convertToDateAgain(string) {
        let splittedString = string.split(' - ');
        let dateValue = splittedString[1] + 'T' + splittedString[2];

        while (dateValue.includes('/')) {
            dateValue = dateValue.replace('/', '-');
        }
        
        return dateValue;;
    }

    const [lectureInput, dateInput] = document.querySelectorAll('div .form-control > input');
    const selectModule = document.querySelector('div .form-control > select');
    const addButton = document.querySelector('.form-control > button');
    const trainingsSection = document.querySelector('section.user-view.section-view > div');

    addButton.addEventListener('click', addNewLecture);

    function addNewLecture(e) {
        e.preventDefault();

        if (lectureInput.value.trim() === '' || dateInput.value.trim() === '' || selectModule.value === 'Select module') {
            return;
        }
        
        const selectedModule = selectModule.value.toUpperCase() + '-MODULE';
        
        const selectedDate = `${lectureInput.value} - ${convertDate(dateInput.value)}`;

        const div = makeElement('div');
        div.setAttribute('class', 'module');

        const h3 = makeElement('h3', selectedModule);
        div.appendChild(h3);

        const ul = makeElement('ul');

        const li = makeElement('li');
        li.setAttribute('class', 'flex');

        const h4 = makeElement('h4', selectedDate);
        li.appendChild(h4);

        const deleteButton = makeElement('buton', 'Del');
        deleteButton.setAttribute('class', 'red');
        li.appendChild(deleteButton);
        deleteButton.addEventListener('click', deleteLecture);

        ul.appendChild(li);

        let allModules = Array.from(trainingsSection.querySelectorAll('div'));
        
        if (allModules.length === 0) {
            div.appendChild(ul);
            trainingsSection.appendChild(div);
        } else {
            let isModuleExist = allModules.find(m => m.querySelector('h3').textContent === selectedModule);
            
            if (isModuleExist) {
                isModuleExist.querySelector('ul').appendChild(li);
            } else {
                div.appendChild(ul);
                trainingsSection.appendChild(div);
            }
        }
    }

    function deleteLecture(e) {
        const lecturesCurrentModule = e.target.parentNode.parentNode.children;
        const currentModule = e.target.parentNode.parentNode.parentNode;

        if (lecturesCurrentModule.length === 1) {
            currentModule.remove();
        } else {
            e.target.parentNode.remove();
        }
    }
}
