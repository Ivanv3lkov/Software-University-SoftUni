function focused() {
    let inputs = Array.from(document.querySelectorAll('input'));

    inputs.map(i => addListener(i));

    function addListener(el) {
        el.addEventListener('focus', () => {
            el.parentElement.setAttribute('class', 'focused');
        })
        el.addEventListener('blur', () => {
            el.parentElement.removeAttribute('class', 'focused');
        })
    }
}