function focus() {
    const inputs = Array.from(document.querySelectorAll('input[type="text"]'));
    inputs.forEach(i => {
        i.addEventListener('focus', focusIn);
        i.addEventListener('blur', focusOut);
    })

    function focusIn(e) {
        e.target.parentElement.classList.add('focused');
    }

    function focusOut(e) {
        e.target.parentElement.classList.remove('focused');
    }
}