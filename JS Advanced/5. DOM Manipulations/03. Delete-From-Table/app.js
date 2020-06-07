function deleteByEmail(){
        const emailTds = Array.from(document.querySelectorAll('#customers td:last-child'));
        const emailInput = document.querySelector('input[name="email"]');
        const resultDiv = document.getElementById('result');

        resultDiv.textContent = '';

        const emailInputValue = emailInput.value;
        if (!emailInputValue) {return;};
        const td = emailTds.find(function (td) { return td.textContent === emailInputValue });
        emailInput.value = '';
        if (!td) {resultDiv.textContent = 'Not found.'; return;}
        td.parentElement.remove();
        resultDiv.textContent = 'Deleted.'
}
