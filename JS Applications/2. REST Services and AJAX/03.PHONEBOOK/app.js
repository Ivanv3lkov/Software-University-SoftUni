function attachEvents() {
    let loadBtn = document.getElementById("btnLoad");
    let createBtn = document.getElementById("btnCreate");
    let personInput = document.getElementById("person");
    let phoneNumInput = document.getElementById("phone");
    let phonebookUl = document.getElementById("phonebook");

    loadBtn.addEventListener("click",loadPhonebook);

    function loadPhonebook(){
        phonebookUl.innerHTML = "";
        fetch("https://phonebook-nakov.firebaseio.com/phonebook.json")
        .then(res=>res.json())
        .then(data=>{
            Object.entries(data)
            .forEach(([key,phonebookData])=>{
                let {person, phone} = phonebookData;
                let li = document.createElement("li");
                li.textContent = `${person}: ${phone}`;

                let deleteBtn = document.createElement("button");
                deleteBtn.textContent = "Delete";
                deleteBtn.setAttribute("data-target",key);
                deleteBtn.addEventListener("click", deleteEntry);
                li.appendChild(deleteBtn);
                phonebookUl.appendChild(li);
            });
        })
        .catch(err =>{
            console.log(err);
        });
    }

    function deleteEntry(){
        let idToDelete = this.getAttribute("data-target");
        
        let headers = {
            method : "DELETE"
        };

        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${idToDelete}.json`,headers)
        .then(()=>{
            phonebookUl.innerHTML = "";
            loadPhonebook();
        });
    }

    createBtn.addEventListener("click", createEntry);

    function createEntry(){
        let person = personInput.value;
        let phone = phoneNumInput.value;

        let headers = {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({person,phone})
        };

        fetch("https://phonebook-nakov.firebaseio.com/phonebook.json",headers)
        .then(()=>{
            phonebookUl.innerHTML = "";
            personInput.value = "";
            phoneNumInput.value = "";
            loadPhonebook();
        });
    }
}

