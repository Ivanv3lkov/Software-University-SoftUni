function solve() {
    const dropdownBtn = document.getElementById('dropdown');
    const list = document.getElementById('dropdown-ul');
    const listItems = Array.from(list.getElementsByTagName('li'));
    const box = document.getElementById('box');
   
    dropdownBtn.addEventListener('click', function () {
        if (list.style.display === '' || list.style.display === 'none') {
            list.style.display = 'block';
            box.style.backgroundColor = 'black';
        } else if (list.style.display === 'block') {
            list.style.display = 'none';
            box.style.color = 'white';
            box.style.backgroundColor = 'black';
        }
    });

    for (let li of listItems) {
        li.addEventListener('click', function () {
            let color = li.textContent;
            box.setAttribute('style', 'background-color');
            box.style.backgroundColor = color;
            box.style.color = 'black';
        });
    }
}

