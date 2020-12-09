function solution() {

    const sections = document.querySelectorAll('section');

    const addSection = sections[0];
    const listSection = sections[1];
    const sentSection = sections[2];
    const deiscardedSection = sections[3];

    const input = addSection.querySelector('input');
    const addBtn = addSection.querySelector('button');

    addBtn.addEventListener('click', addGift);

    function addGift(e) {
        if (!input.value) { return; }
        const li = document.createElement('li');
        li.className = 'gift';
        li.textContent = input.value;

        const sendBtn = createButton('sendButton', 'Send');
        sendBtn.addEventListener('click', function (e) {
            const li = document.createElement('li');
            li.textContent = e.target.parentElement.textContent.slice(0, e.target.parentElement.textContent.lastIndexOf('Send'));

            const sentGifts = sentSection.querySelector('ul');
            sentGifts.appendChild(li);

            e.target.parentElement.remove();
        });

        const discardBtn = createButton('discardButton', 'Discard');
        discardBtn.addEventListener('click', function (e) {
            const li = document.createElement('li');
            li.textContent = e.target.parentElement.textContent.slice(0, e.target.parentElement.textContent.lastIndexOf('Send'));

            const disctredGifts = deiscardedSection.querySelector('ul');
            disctredGifts.appendChild(li);

            e.target.parentElement.remove();
        })

        li.appendChild(sendBtn);
        li.appendChild(discardBtn);

        const allGifts = listSection.querySelector('ul');
        allGifts.appendChild(li);

        let gifts = Array.from(listSection.querySelector('ul').children);
        gifts.sort((a, b) =>
            (a.textContent.slice(0, a.textContent.indexOf('Send')))
                .localeCompare(b.textContent.slice(0, b.textContent.lastIndexOf('Send'))));

        allGifts.innerHTML = '';
        gifts.forEach(element => {
            allGifts.appendChild(element)
        });

        input.value = '';

        function createButton(btnId, btnText) {
            const button = document.createElement('button');
            button.id = btnId;
            button.textContent = btnText;

            return button;
        }
    }
}