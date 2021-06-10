function validate() {
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('change', function () {
        emailInput.classList.remove('error');
        const value = emailInput.value;
        if (value.match(/^[a-z-\.\+@[a-z-\.]+\.[a-z]{2,4}/)) {
            return;
        }
        emailInput.classList.add('error');
    });
}