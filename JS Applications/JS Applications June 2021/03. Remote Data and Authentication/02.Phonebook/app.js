function attachEvents() {
    let loadButton = document.getElementById('btnLoad');
    let createButton = document.getElementById('btnCreate');
    let personInput = document.getElementById('person');
    let phoneNumInput = document.getElementById('phone');
    let phonebookTr = document.getElementById('phonebook');

    loadButton.addEventListener('click', loadPhonebook);
    createButton.addEventListener('click', createEntry);

    function loadPhonebook() {
        // phonebookTr.innerHTML = '';
        Array.from(phonebookTr.children).forEach(td => td.remove());
        fetch('http://localhost:3030/jsonstore/phonebook')
            .then(res => res.json())
            .then(data => {
                Object.entries(data)
                    .forEach(([key, phonebookData]) => {
                        let { person, phone } = phonebookData;
                        let tr = document.createElement('tr');
                        let tdName = document.createElement('td');
                        tdName.textContent = person;
                        let tdPhone = document.createElement('td');
                        tdPhone.textContent = phone;
                        let tdDeleteBtn = document.createElement('td');

                        let deleteBtn = document.createElement('button');
                        deleteBtn.textContent = 'Delete';
                        deleteBtn.setAttribute('data-target', key);
                        deleteBtn.addEventListener('click', deleteEntry);
                        tdDeleteBtn.appendChild(deleteBtn);

                        tr.appendChild(tdName);
                        tr.appendChild(tdPhone);
                        tr.appendChild(tdDeleteBtn);
                        phonebookTr.appendChild(tr);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }

    function deleteEntry() {
        let idToDelete = this.getAttribute('data-target');

        let headers = {
            method: 'DELETE'
        };

        fetch(`http://localhost:3030/jsonstore/phonebook/${idToDelete}`, headers)
            .then(() => {
                // phonebookUl.innerHTML = "";
                Array.from(phonebookTr.children).forEach(td => td.remove());
                loadPhonebook();
            });
    }

    function createEntry() {
        let person = personInput.value;
        let phone = phoneNumInput.value;

        if (!person || !phone) {
            return;
        }
        let headers = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ person, phone })
        };

        fetch('http://localhost:3030/jsonstore/phonebook', headers)
            .then(() => {
                // phonebookUl.innerHTML = "";
                Array.from(phonebookTr.children).forEach(td => td.remove());
                personInput.value = '';
                phoneNumInput.value = '';
                loadPhonebook();
            });
    }
}

attachEvents();