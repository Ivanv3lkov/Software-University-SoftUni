async function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const response = await fetch(url);
    const data = await response.json();

    const main = document.getElementById('main');
    //main.innerHTML = '';
    if (main.children) {
        Array.from(main.children).forEach(el => el.remove());
    }
  
    Object.values(data).forEach((user, i) => {
        i = i + 1;

        const profile =
            createElement('div', { class: 'profile' }, '',
                createElement('img', { src: './iconProfile2.png', class: 'userIcon' }),
                createElement('label', {}, 'Lock'),
                createElement('input', { type: 'radio', name: `user${i}Locked`, value: 'lock', checked: '' }),
                createElement('label', {}, 'Unlock'),
                createElement('input', { type: 'radio', name: `user${i}Locked`, value: 'unlock' }),
                createElement('br'),
                createElement('hr'),
                createElement('label', {}, `Username`),
                createElement('input', { type: 'text', name: `user${i}Username`, value: `${user.username}`, disabled: ``, randomly: `` }),
                createElement('div', { id: `user${i}HiddenFields` }, '',
                    createElement('hr'),
                    createElement('label', {}, 'Email:'),
                    createElement('input', { type: 'email', name: `user${i}Email`, value: `${user.email}`, disabled: '', randomly: '' }),
                    createElement('label', {}, 'Age'),
                    createElement('input', { type: 'email', name: `user${i}Age`, value: `${user.age}`, disabled: '', randomly: '' })),
                createElement('button', {}, 'Show More'));

        main.appendChild(profile);

        document.querySelector(`#user${i}HiddenFields`).style.display = 'none';
    });
    Array.from(document.querySelectorAll('button'))
        .forEach(e => e.addEventListener('click', onClick));
}

function onClick(e) {
    if (!e.target.parentNode.querySelector('input[value="lock"]:checked') && e.target.parentNode.querySelector('div').style.display == 'block') {
        e.target.parentNode.querySelector('div').style.display = 'none';
        e.target.textContent = 'Show More';
    } else if (!e.target.parentNode.querySelector('input[value="lock"]:checked')) {
        e.target.parentNode.querySelector('div').style.display = 'block';
        e.target.textContent = 'Hide it';
    };
}

function createElement(type, attribute, text, ...params) {
    const element = document.createElement(type);

    if (attribute != {} && attribute != undefined) {
        Object.entries(attribute).forEach(([name, value]) => {
            element.setAttribute(`${name}`, `${value}`);
        });
    }

    if (text != undefined && text != '') {
        element.textContent = text;
    }

    if (params != undefined && params.length != 0) {
        params.forEach(e => element.appendChild(e));
    }

    return element;
}