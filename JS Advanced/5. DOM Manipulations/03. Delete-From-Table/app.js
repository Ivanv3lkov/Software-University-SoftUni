function deleteByEmail(){
    let emailTds = document.querySelectorAll('table tr td:nth-child(2)');
    let deleted = false;

    for (let td of emailTds) {
        if (td.textContent === document.getElementsByName('email')[0].value) {
            td.parentNode.parentNode.removeChild(td.parentNode);
            deleted = true;
        }
    }

    document.getElementById('result').textContent = deleted ? 'Deleted.' : 'Not found.';
}

