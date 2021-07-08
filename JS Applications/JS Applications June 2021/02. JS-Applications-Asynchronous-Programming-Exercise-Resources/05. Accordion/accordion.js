(function solution() {
    let mainSection = document.getElementById('main');
    let url = 'http://localhost:3030/jsonstore/advanced/articles/list';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(({ _id, title }) => {
                let accordionDiv = createElement('div', { class: 'accordion' });
                let headDiv = createElement('div', { class: 'head' });
                let span = createElement('span', {}, title);
                let button = createElement('button', { class: 'button', id: _id }, 'More');
                button.addEventListener('click', showMore);
                headDiv.appendChild(span);
                headDiv.appendChild(button);
                let extraDiv = createElement('div', { class: 'extra' });
                let p = createElement('p', {});
                extraDiv.appendChild(p);
                accordionDiv.appendChild(headDiv);
                accordionDiv.appendChild(extraDiv);
                mainSection.appendChild(accordionDiv);
            })
        })

    function showMore(e) {
        let buttonId = e.target.getAttribute('id');
        fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${buttonId}`)
            .then(res => res.json())
            .then(({ content }) => {
                let p = e.target.parentElement.nextElementSibling.querySelector('p');
                p.textContent = content;
                if (e.target.textContent === 'More') {
                    e.target.textContent = 'Less';
                    p.parentElement.style.display = 'block';
                } else {
                    e.target.textContent = 'More';
                    p.parentElement.style.display = 'none';
                }
            })
    }

    function createElement(type, attribute, text) {
        const element = document.createElement(type);

        if (attribute != {} && attribute != undefined) {
            Object.entries(attribute).forEach(([name, value]) => {
                element.setAttribute(`${name}`, `${value}`);
            });
        }

        if (text != undefined && text != '') {
            element.textContent = text;
        }

        return element;
    }
})()


// <div class="accordion">
//             <div class="head">
//                 <span>Scalable Vector Graphics</span>
//                 <button class="button" id="ee9823ab-c3e8-4a14-b998-8c22ec246bd3">More</button>
//             </div>
//             <div class="extra">
//                 <p>Scalable Vector Graphics .....</p>
//             </div>
//         </div> 