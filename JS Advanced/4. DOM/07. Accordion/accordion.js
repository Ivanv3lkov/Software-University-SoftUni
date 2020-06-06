function toggle() {
    const button = document.getElementsByClassName('button')[0];
    const div = document.getElementById('extra');

    if (div.style.display === 'block') {
        div.style.display = 'none',
        button.textContent = 'More'
    } else {
        div.style.display = 'block',
        button.textContent = 'Less'
    }
}