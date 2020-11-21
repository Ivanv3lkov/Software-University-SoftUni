function solve(e) {  // PET MEEEE
    function makeEl(type, text) {
        let el = document.createElement(type);
        if (text !== null) {
            el.textContent = text;
        }
        return el;
    }

    const form = document.getElementById('container');
    let [name, age, kind, owner, addBtn] = Array.from(form.children);

    let mainSec = document.querySelector('#adoption > ul');
    let adoptedSec = document.querySelector('#adopted > ul');


    addBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (name.value === '' || age.value === '' || isNaN(age.value) || kind.value === '' || owner.value === '') {
            console.log('Error');
            return;
        }

        let li = makeEl('li', null);
        let p = makeEl('p', null);
        p.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`;
        li.appendChild(p);
        li.appendChild(makeEl('span', `Owner: ${owner.value}`));
        li.appendChild(makeEl('button', 'Contact with owner'));

        mainSec.appendChild(li);

        name.value = '';
        age.value = '';
        kind.value = '';
        owner.value = '';

        //contactBtn
        li.children[2].addEventListener('click', function () {
            li.children[2].remove();

            let div = makeEl('div', null);

            let inputEl = makeEl('input', null);
            inputEl.setAttribute('placeholder', 'Enter your names');
            div.appendChild(inputEl);

            div.appendChild(makeEl('button', 'Yes! I take it!'));
            li.appendChild(div);

            // takeItBtn
            div.children[1].addEventListener('click', function () {

                if (div.children[0].value !== '') {
                    mainSec.removeChild(li);

                    li.lastChild.remove();
                    li.lastChild.remove();
                    li.appendChild(makeEl('span', `New Owner: ${div.children[0].value}`));
                    li.appendChild(makeEl('button', 'Checked'));

                    adoptedSec.appendChild(li);

                    // checkedBtn
                    li.children[2].addEventListener('click', function (e) {
                        e.target.parentNode.remove();
                    })
                }
            });
        });
    });
}